import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Affiliate from "../../pageObjects/Affiliate";
import Header from "../../pageObjects/Header";

Given(/^I launch the affiliate page$/, () => {
  Affiliate.visitPage();
});

Then(/^I should see "([^"]*)"$/, ($text) => {
  Affiliate.verifyOnboardingForm($text);
});

Given(/^I launch the affiliate page using wrong path$/, () => {
  Affiliate.visitWrongPage();
});

Then(/^I should see error 404 message$/, () => {
  Affiliate.page404();
});

Then(/^Credpal logo should be visible on the header$/, () => {
  Header.verifyCredPalLogo();
});

When(/^I click on product dropdown on the page header$/, () => {
  Header.openProductDropdown();
});

Then(/^I should see a dropdown$/, () => {
  Header.verifyProductDropdown();
  Header.verifyProductDropdownItems();
});

When(/^I click on the business button$/, () => {
  Header.clickBusinessButton();
});

Then(/^I should see "([^"]*)" on business page$/, ($text) => {
  Header.verifyBusinessPage($text);
});

When(/^I click on what we do button$/, () => {
  Header.clickWhatWeDoButton();
});

Then(/^I should see "([^"]*)" on FAQ page$/, ($text) => {
  Header.verifyFAQPage($text);
});

When(/^I click on affiliate button$/, () => {
  Header.clickAffiliateButton();
});

When(/^I click on switch nationality dropdown$/, () => {
  Header.clickNationalityButton();
});

When(/^I select a country different from the default$/, () => {
  Header.verifyNationalityPopup();
  Header.switchCountryToEgypt();
});

Then(/^What We Do should be translated to "([^"]*)" on the page$/, (text) => {
  Header.verifyEgyptLanguage(text);
});

When(/^I click on the download button$/, () => {
  Header.clickDownloadButton();
});

Then(/^I should see a modal or popup with qr code$/, () => {
  Header.verifyQrCodePopup();
});

Then(/^I should see background image$/, () => {
  Affiliate.verifyOnboardBackgroundImage();
});

When(/^I click on submit button$/, () => {
  Affiliate.triggerSubmitButton();
});
Then(/^I should see a validation message "([^"]*)"$/, (msg) => {
  Affiliate.verifyValidationMessage(msg);
});

Then(/^I should see an error message "([^"]*)"$/, (msg) => {
  Affiliate.verifyErrorMessage(msg);
});

When(
  /^I input form details "([^"]*)", "([^"]*)", "([^"]*)", and "([^"]*)"$/,
  (firstName, lastName, email, phone) => {
    Affiliate.setFirstName(firstName);
    Affiliate.setLastName(lastName);
    Affiliate.setEmail(email);
    Affiliate.setPhone(phone);
  }
);

Then(/^I click on checkbox$/, () => {
  Affiliate.setCheckbox();
});

Then(/^I should see success message "([^"]*)"$/, (msg) => {
  Affiliate.verifySuccessMessage(msg);
});
