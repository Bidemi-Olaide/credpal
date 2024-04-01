import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Affiliate from "../../PageObjects/Affiliate";
import Header from "../../PageObjects/Header";

Given(/^I launch the affiliate page$/, () => {
  Affiliate.visitPage();
});

Then(/^I should see "([^"]*)"$/, ($text) => {
  Affiliate.verifyOnboardingForm($text);
});

Given(/^I launch the affiliate page using wrong path$/, () => {
  cy.visit("/sale", {
    failOnStatusCode: false,
  });
});

Then(/^I should see error 404 message$/, () => {
  cy.get("h1[data-v-5d12fb99]")
    .should("have.length", 1)
    .and("have.text", "404");
});

Then(/^Credpal logo should be visible on the header$/, () => {
  cy.get(Header.credLink).should("be.visible");
});

When(/^I click on product dropdown on the page header$/, () => {
  cy.get(Header.productLink).click();
});

Then(/^I should see a dropdown$/, () => {
  cy.get(Header.dropDown).should("not.have.class", "opacity-0");
  cy.get(Header.dropDownItems).each(($item) => {
    cy.wrap($item).should("be.visible");
  });
});

When(/^I click on the business button$/, () => {
  cy.get(Header.businessLink).click();
});

Then(/^I should see "([^"]*)" on business page$/, ($text) => {
  cy.get(Header.businessPageHeading).should("be.visible").and("contain", $text);
});

When(/^I click on what we do button$/, () => {
  cy.get(Header.whatLink).click();
});

Then(/^I should see "([^"]*)" on FAQ page$/, ($text) => {
  cy.get(Header.whatPageHeading).should("be.visible").and("contain", $text);
});

When(/^I click on affiliate button$/, () => {
  cy.get(Header.affiliateLinkHeader).click();
});

When(/^I click on switch nationality dropdown$/, () => {
  cy.get(Header.switchLink).click({ force: true });
});

When(/^I select a country different from the default$/, () => {
  cy.get(Header.languagePopup)
    .should("not.have.class", "opacity-0")
    .should("not.have.class", "invisible");
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
