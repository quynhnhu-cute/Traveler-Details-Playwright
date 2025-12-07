export const CONTACT_X_PATH = {
  firstName: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[3]/div/div[2]/div/div/div[2]/div[2]/div/label/div/div[1]/div[1]/input`,
  middleName: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[3]/div/div[2]/div/div/div[3]/div[2]/div/label/div/div/div/input`,
  lastName: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[3]/div/div[2]/div/div/div[4]/div[2]/div/label/div/div/div/input`,
  email: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[3]/div/div[2]/div/div/div[5]/div[2]/div/label/div/div/div/input`,
  phone: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[3]/div/div[2]/div/div/div[6]/div[2]/div/label/div/div/div[2]/input`,
  address: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[3]/div/div[2]/div/div/div[8]/div[2]/div/label/div/div/div/input`,
};

export const FIRST_TRAVELER_X_PATH = {
  firstName: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[5]/div/div[2]/div/div/div/div[2]/div[2]/div/label/div/div/div/input`,
  middleName: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[5]/div/div[2]/div/div/div/div[3]/div[2]/div/label/div/div/div/input`,
  lastName: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[5]/div/div[2]/div/div/div/div[4]/div[2]/div/label/div/div/div/input`,
  yob: {
    elm: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[5]/div/div[2]/div/div/div/div[5]/div[2]/div/div/label[1]/div`,
    value: `//span[text()="2000"]`,
  },
  mob: {
    elm: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[5]/div/div[2]/div/div/div/div[5]/div[2]/div/div/label[2]/div`,
    value: `.q-date__months-item:has-text("Oct")`,
  },
  dob: {
    elm: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[5]/div/div[2]/div/div/div/div[5]/div[2]/div/div/label[3]/div`,
    value: `//span[text()="9"]`,
  },
  nationality: {
    elm: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[5]/div/div[2]/div/div/div/div[6]/div[2]/div/label/div`,
    value:
      "//div[contains(@class,'q-item__label')][normalize-space()='Albania (Shqipëri)']",
  },
};

export const SECOND_TRAVELER_X_PATH = {
  firstName: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[6]/div/div[2]/div/div/div/div[2]/div[2]/div/label/div/div/div/input`,
  middleName: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[6]/div/div[2]/div/div/div/div[3]/div[2]/div/label/div/div/div/input`,
  lastName: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[6]/div/div[2]/div/div/div/div[4]/div[2]/div/label/div/div/div/input`,
  yob: {
    elm: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[6]/div/div[2]/div/div/div/div[5]/div[2]/div/div/label[1]/div`,
    value: `//span[text()="2000"]`,
  },
  mob: {
    elm: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[6]/div/div[2]/div/div/div/div[5]/div[2]/div/div/label[2]/div`,
    value: `.q-date__months-item:has-text("Oct")`,
  },
  dob: {
    elm: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[6]/div/div[2]/div/div/div/div[5]/div[2]/div/div/label[3]/div`,
    value: `//span[text()="9"]`,
  },
  nationality: {
    elm: `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[1]/div/div[6]/div/div[2]/div/div/div/div[6]/div[2]/div/label/div`,
    value:
      "//div[contains(@class,'q-item__label')][normalize-space()='Albania (Shqipëri)']",
  },
};

export const CONTINUE_X_PATH = `xpath=/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div[2]/div/div[3]/button`;
