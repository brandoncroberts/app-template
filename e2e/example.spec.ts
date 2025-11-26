import { test, expect } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/i);
});

test("page has heading", async ({ page }) => {
  await page.goto("/");

  // Check if the page has some content
  const heading = page.locator("h1, h2, h3").first();
  await expect(heading).toBeVisible();
});

