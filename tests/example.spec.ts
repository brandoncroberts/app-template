import { test, expect } from '@playwright/test';

test('login and verify authentication', async ({ page }) => {
  const username = process.env.TEST_AUTOMATION_USERNAME;
  const password = process.env.TEST_AUTOMATION_PASSWORD;

  if (!username || !password) {
    throw new Error('TEST_AUTOMATION_USERNAME and TEST_AUTOMATION_PASSWORD must be set in .env');
  }

  // Go to the home page, which should redirect to login if not authenticated
  await page.goto('/');

  // Wait for the email input to be visible to ensure we are on the login page
  // Using a broad selector for email input
  const emailInput = page.locator('input[type="email"], input[name="email"]');
  await expect(emailInput).toBeVisible({ timeout: 10000 });
  await emailInput.fill(username);

  // Using a broad selector for password input
  const passwordInput = page.locator('input[type="password"], input[name="password"]');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill(password);

  // Click the sign in/login button
  // Using a broad selector for the submit button
  const submitButton = page.locator('button[type="submit"]').first();
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  // Verify successful authentication
  await expect(page.getByText("You're successfully authenticated.")).toBeVisible({ timeout: 20000 });
});
