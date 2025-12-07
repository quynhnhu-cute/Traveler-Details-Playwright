import test, { chromium, expect, Page } from "@playwright/test";
import {
  PAYMENT_PAGE_URL,
  TRAVELER_DETAIL_PAGE_URL,
} from "../../constants/constants";
import {
  MOCK_CONTACT_DATA,
  MOCK_FIRST_TRAVELER,
  MOCK_SECOND_TRAVELER,
} from "./mockdata";
import {
  CONTACT_X_PATH,
  CONTINUE_X_PATH,
  FIRST_TRAVELER_X_PATH,
  SECOND_TRAVELER_X_PATH,
} from "./xpath";
import { selectAnOption } from "../../general-functions/functions";

// Mock Data
const {
  firstName: contactFirstName,
  middleName: contactMiddleName,
  lastName: contactLastName,
  email: contactEmail,
  phone: contactPhone,
  address: contactAddress,
} = MOCK_CONTACT_DATA;

const {
  firstName: t1FirstName,
  middleName: t1MiddleName,
  lastName: t1LastName,
} = MOCK_FIRST_TRAVELER;

const {
  firstName: t2FirstName,
  middleName: t2MiddleName,
  lastName: t2LastName,
} = MOCK_SECOND_TRAVELER;

// XPath

const {
  firstName: t1FirstNameXPath,
  middleName: t1MiddleNameXPath,
  lastName: t1LastNameXPath,
  dob: t1DobXPath,
  mob: t1MonthOfBirthXPath,
  yob: t1YobXPath,
  nationality: t1NationalityXPath,
} = FIRST_TRAVELER_X_PATH;

const {
  firstName: t2FirstNameXPath,
  middleName: t2MiddleNameXPath,
  lastName: t2LastNameXPath,
  dob: t2DobXPath,
  mob: t2MonthOfBirthXPath,
  yob: t2YobXPath,
  nationality: t2NationalityXPath,
} = SECOND_TRAVELER_X_PATH;

const {
  firstName: cFirstNameXPath,
  middleName: cMiddleNameXPath,
  lastName: cLastNameXPath,
  email: cEmailXPath,
  phone: cPhoneXPath,
  address: cAddressXPath,
} = CONTACT_X_PATH;

const fillContactData = async (page: Page) => {
  await page.fill(cFirstNameXPath, contactFirstName);
  await page.fill(cMiddleNameXPath, contactMiddleName);
  await page.fill(cLastNameXPath, contactLastName);
  await page.fill(cEmailXPath, contactEmail);
  await page.fill(cPhoneXPath, contactPhone);
  await page.fill(cAddressXPath, contactAddress);
};

const fillFirstTravelerData = async (page: Page) => {
  await page.fill(t1FirstNameXPath, t1FirstName);
  await page.fill(t1MiddleNameXPath, t1MiddleName);
  await page.fill(t1LastNameXPath, t1LastName);
  await page.waitForTimeout(300);
  await selectAnOption(page, t1YobXPath.elm, t1YobXPath.value);
  await page.waitForTimeout(300);
  await selectAnOption(page, t1DobXPath.elm, t1DobXPath.value);
  await page.waitForTimeout(300);
  await selectAnOption(
    page,
    t1MonthOfBirthXPath.elm,
    t1MonthOfBirthXPath.value
  );
  await selectAnOption(page, t1NationalityXPath.elm, t1NationalityXPath.value);
};

const fillSecondTravelerData = async (page: Page) => {
  await page.fill(t2FirstNameXPath, t2FirstName);
  await page.fill(t2MiddleNameXPath, t2MiddleName);
  await page.fill(t2LastNameXPath, t2LastName);
  await selectAnOption(page, t2YobXPath.elm, t2YobXPath.value);
  await page.waitForTimeout(300);
  await selectAnOption(page, t2DobXPath.elm, t2DobXPath.value);
  await page.waitForTimeout(300);
  await selectAnOption(
    page,
    t2MonthOfBirthXPath.elm,
    t2MonthOfBirthXPath.value
  );
  await selectAnOption(page, t2NationalityXPath.elm, t2NationalityXPath.value);
};

const inputTravelerDetails = async (page: Page) => {
  // 1. Open the page in the new context
  await page.goto(TRAVELER_DETAIL_PAGE_URL, { waitUntil: "networkidle" });

  // 2. Fill in data
  await fillContactData(page);
  await fillFirstTravelerData(page);
  await fillSecondTravelerData(page);

  // 3. Continue
  const continueBtn = page.locator(CONTINUE_X_PATH);
  await continueBtn.click();

  //4. Verify the URL in payment page
  await expect(page).toHaveURL(PAYMENT_PAGE_URL, { timeout: 20000 });
};

test("Hotel booking — fill traveler details and proceed", async ({ page }) =>
  await inputTravelerDetails(page));
