import { test, expect, Page } from '@playwright/test';

const DEMO_EMAIL = 'demo@getprova.com';
const DEMO_PASSWORD = 'demo1234';

async function loginAsDemo(page: Page) {
  await page.goto('/login');
  await page.getByPlaceholder(/email address/i).fill(DEMO_EMAIL);
  await page.getByPlaceholder(/password/i).fill(DEMO_PASSWORD);
  await page.getByRole('button', { name: /sign in/i }).click();
  await page.waitForURL(/\/dashboard/, { timeout: 10000 });
}

test.describe('Dashboard — Core Product', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsDemo(page);
  });

  test('dashboard shows stat cards with numbers', async ({ page }) => {
    await expect(page.getByText('Total Vehicles')).toBeVisible();
    await expect(page.getByText('Active Owners')).toBeVisible();
    await expect(page.getByText('Climate Alerts')).toBeVisible();
    await expect(page.getByText('Pending Services')).toBeVisible();
  });

  test('dashboard shows vehicle table with real data', async ({ page }) => {
    const table = page.locator('table').first();
    await expect(table).toBeVisible();
    await expect(table.getByText(/Ferrari|Porsche|McLaren|Lamborghini/i)).toBeVisible();
  });

  test('sidebar navigation links are all present', async ({ page }) => {
    await expect(page.getByRole('link', { name: /dashboard/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /vehicles/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /schedule/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /owners/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /settings/i }).first()).toBeVisible();
  });

  test('vehicles list page loads with real vehicles', async ({ page }) => {
    await page.goto('/dashboard/vehicles');
    await expect(page.getByRole('heading', { name: 'Vehicles' })).toBeVisible();
    await expect(page.getByText(/Ferrari|Porsche|McLaren/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /add vehicle/i })).toBeVisible();
  });

  test('vehicle detail page loads with complete data', async ({ page }) => {
    await page.goto('/dashboard/vehicles/1');
    await expect(page.getByText(/Ferrari/i)).toBeVisible();
    await expect(page.getByText('Climate History')).toBeVisible();
    await expect(page.getByText('Service History')).toBeVisible();
    // Action buttons
    await expect(page.getByRole('button', { name: /schedule service/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /contact owner/i })).toBeVisible();
  });

  test('schedule page shows calendar with March 2026 events', async ({ page }) => {
    await page.goto('/dashboard/schedule');
    await expect(page.getByText(/march 2026/i)).toBeVisible();
    // Should show at least one seeded event
    await expect(page.getByText(/Detail|Rotation|Inspection/i)).toBeVisible();
  });

  test('owners page shows 6 registered owners', async ({ page }) => {
    await page.goto('/dashboard/owners');
    await expect(page.getByText(/6 registered owners/i)).toBeVisible();
    await expect(page.getByText('Marcus Chen')).toBeVisible();
    await expect(page.getByText('Sarah Blackwood')).toBeVisible();
  });

  test('vehicle intake form page loads', async ({ page }) => {
    await page.goto('/dashboard/vehicles/new');
    // Should load (not 404)
    await expect(page).not.toHaveURL(/error|404/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('settings page loads', async ({ page }) => {
    await page.goto('/dashboard/settings');
    await expect(page).not.toHaveURL(/error|404/);
    await expect(page.locator('body')).toBeVisible();
  });
});
