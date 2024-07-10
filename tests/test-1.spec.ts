import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('assertions');
  await expect(page.getByRole('option', { name: 'Assertions', exact: true }).getByRole('link')).toBeVisible();
});