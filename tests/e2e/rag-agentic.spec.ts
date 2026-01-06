import { expect, test } from '@playwright/test';

test.describe('RAG Agentic Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ragAgentic');
  });

  test('should load the RAG Agentic page', async ({ page }) => {
    // Verify the page has loaded by checking the URL
    expect(page.url()).toContain('/ragAgentic');
  });

  test('should be responsive', async ({ page }) => {
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/ragAgentic');
    await expect(page.locator('body')).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('body')).toBeVisible();

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('body')).toBeVisible();
  });
});
