import { test } from "@playwright/test";

test("Youtube Search @youtube2", async ({ page }) => {
  await page.goto("https://www.youtube.com");

   const searchBox = page.locator("//input[@id='search']");

   await searchBox.click();

   await searchBox.fill("CYDEO");

   await page.waitForTimeout(3000);

   await searchBox.press("Enter");

    const firstVideo = page.locator("(//a[@id='video-title'])[1]");

    await firstVideo.click();

});
