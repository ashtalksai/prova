import { test, expect } from '@playwright/test';

const DEMO_EMAIL = 'demo@getprova.com';
const DEMO_PASSWORD = 'demo1234';

test.describe('Authentication', () => {
  test('login page has correct layout', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
    await expect(page.getByRole('button', { name: /continue with google/i })).toBeVisible();
    await expect(page.getByPlaceholder(/email address/i)).toBeVisible();
    await expect(page.getByPlaceholder(/password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /start free trial/i })).toBeVisible();
  });

  test('login with demo credentials redirects to dashboard', async ({ page }) => {
    await page.goto('/login');
    await page.getByPlaceholder(/email address/i).fill(DEMO_EMAIL);
    await page.getByPlaceholder(/password/i).fill(DEMO_PASSWORD);
    await page.getByRole('button', { name: /sign in/i }).click();
    await page.waitForURL(/\/dashboard/, { timeout: 10000 });
    await expect(page).toHaveURL(/\/dashboard/);
  });

  test('dashboard is accessible after login', async ({ page }) => {
    await page.goto('/login');
    await page.getByPlaceholder(/email address/i).fill(DEMO_EMAIL);
    await page.getByPlaceholder(/password/i).fill(DEMO_PASSWORD);
    await page.getByRole('button', { name: /sign in/i }).click();
    await page.waitForURL(/\/dashboard/, { timeout: 10000 });
    await expect(page.getByRole('heading', { name: 'Dashboard' }).first()).toBeVisible();
    await expect(page.getByText('Total Vehicles')).toBeVisible();
  });

  test('session persists on refresh', async ({ page }) => {
    await page.goto('/login');
    await page.getByPlaceholder(/email address/i).fill(DEMO_EMAIL);
    await page.getByPlaceholder(/password/i).fill(DEMO_PASSWORD);
    await page.getByRole('button', { name: /sign in/i }).click();
    await page.waitForURL(/\/dashboard/, { timeout: 10000 });
    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    // Should still be on dashboard, not redirected to login
    await expect(page).toHaveURL(/\/dashboard/);
    await expect(page.getByText('Total Vehicles')).toBeVisible();
  });

  test('signup page has correct layout', async ({ page }) => {
    await page.goto('/signup');
    await expect(page.getByRole('heading', { name: 'Create your account' })).toBeVisible();
    await expect(page.getByRole('button', { name: /continue with google/i })).toBeVisible();
    await expect(page.getByPlaceholder(/full name/i)).toBeVisible();
    await expect(page.getByPlaceholder(/email address/i)).toBeVisible();
    await expect(page.getByPlaceholder(/password/i)).toBeVisible();
    await expect(page.getByPlaceholder(/company name/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /create account/i })).toBeVisible();
  });

  test('signup API creates user', async ({ request }) => {
    const timestamp = Date.now();
    const response = await request.post('/api/auth/signup', {
      data: {
        name: `Test User ${timestamp}`,
        email: `test${timestamp}@mailtest.dev`,
        password: 'TestPass123!',
        company: 'Test Facility'
      }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.user).toBeTruthy();
    expect(body.user.email).toBe(`test${timestamp}@mailtest.dev`);
  });

  test('unauthenticated user is redirected to login from dashboard', async ({ page }) => {
    // Use a fresh page with no session
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });

  test('sign out works', async ({ page }) => {
    await page.goto('/login');
    await page.getByPlaceholder(/email address/i).fill(DEMO_EMAIL);
    await page.getByPlaceholder(/password/i).fill(DEMO_PASSWORD);
    await page.getByRole('button', { name: /sign in/i }).click();
    await page.waitForURL(/\/dashboard/, { timeout: 10000 });
    // Click Sign Out
    await page.getByRole('button', { name: /sign out/i }).click();
    await page.waitForLoadState('networkidle');
    // Should redirect to login or landing
    const url = page.url();
    expect(url).toMatch(/\/login|\/$/);
  });
});
