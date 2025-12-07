import { Page } from "@playwright/test";

export const selectAnOption = async (
  page: Page,
  elmXPath: string,
  valueXPath: string
) => {
  await page.locator(elmXPath).click();

  const option = await page
    .locator(valueXPath)
    .waitFor({ state: "visible", timeout: 500 });
  await page.locator(valueXPath).click();
};
