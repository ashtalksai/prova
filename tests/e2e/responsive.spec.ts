import { test, expect } from '@playwright/test';

test.describe('Responsive layout', () => {
  test('landing page shows hamburger menu at 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    // At mobile width, desktop nav is hidden and hamburger appears
    const hamburger = page.getByRole('button', { name: /toggle menu/i });
    await expect(hamburger).toBeVisible();
  });

  test('landing page all sections visible at 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.getByText('The Industry Runs on Guesswork')).toBeVisible();
    await expect(page.getByText('Everything You Need')).toBeVisible();
  });

  test('login page renders correctly at 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
    await expect(page.getByPlaceholder(/email address/i)).toBeVisible();
  });

  test('pricing page renders correctly at 768px', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/pricing');
    await expect(page.getByRole('heading', { name: 'Simple, Transparent Pricing' })).toBeVisible();
    await expect(page.getByText('$500')).toBeVisible();
  });
});
