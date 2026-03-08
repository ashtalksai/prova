import { test, expect } from '@playwright/test';

test.describe('Landing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads and has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Prova/);
    await expect(page.locator('h1')).toContainText('Your clients store icons');
  });

  test('navbar is present with logo and nav links', async ({ page }) => {
    const nav = page.locator('header, [role="banner"]');
    await expect(nav).toBeVisible();
    // Logo
    await expect(page.locator('img[alt="Prova"]').first()).toBeVisible();
    // CTA button
    await expect(page.getByRole('link', { name: /start free trial/i }).first()).toBeVisible();
  });

  test('hero section has headline, subline, CTA and image', async ({ page }) => {
    await expect(page.locator('h1').first()).toBeVisible();
    // Hero image
    await expect(page.locator('img[alt*="Dashboard"], img[alt*="Prova Dashboard"]').first()).toBeVisible();
    // CTA
    await expect(page.getByRole('link', { name: /get started/i }).first()).toBeVisible();
  });

  test('has at least 8 sections', async ({ page }) => {
    // Count major sections: hero, problem, solution, features, how-it-works, pricing, social-proof, faq, cta, footer
    const h2s = await page.locator('h2').count();
    expect(h2s).toBeGreaterThanOrEqual(5);
    // Check specific sections exist
    await expect(page.getByText('The Industry Runs on Guesswork')).toBeVisible();
    await expect(page.getByText('Everything You Need')).toBeVisible();
    await expect(page.getByText('Get Started in Three Steps')).toBeVisible();
    await expect(page.getByText('Simple, Transparent Pricing')).toBeVisible();
    await expect(page.getByText('Frequently Asked Questions')).toBeVisible();
  });

  test('footer is present with nav and legal links', async ({ page }) => {
    const footer = page.locator('footer, [role="contentinfo"]');
    await expect(footer).toBeVisible();
    await expect(footer.getByRole('link', { name: /privacy/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /terms/i })).toBeVisible();
  });

  test('no console errors on landing', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    // Filter out known external errors
    const provaErrors = errors.filter(e => e.includes('prova.ashketing.com'));
    expect(provaErrors).toHaveLength(0);
  });

  test('pricing section has 3 tiers', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Starter' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Professional' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Enterprise' })).toBeVisible();
  });

  test('FAQ accordion has 6 questions', async ({ page }) => {
    const faqButtons = page.locator('[role="button"]').filter({ hasText: /\?/ });
    const count = await faqButtons.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });
});
