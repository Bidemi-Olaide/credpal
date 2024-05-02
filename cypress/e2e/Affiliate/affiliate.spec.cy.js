import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I launch the affiliate page$/, () => {
  cy.LaunchApp();
});

Then(/^I should see "([^"]*)"$/, ($text) => {
  cy.fixture("elements").then((el)=>{
    cy.get(el.formHeaderText).should("be.visible").should("have.text", $text)
  })
})

// Given(/^I launch the affiliate page using wrong path$/, () => {
//   cy.visit("/sale", {
//     failOnStatusCode: false,
//   });
// });

// Then(/^I should see error 404 message$/, () => {
//   cy.get("h1[data-v-5d12fb99]").should("have.length", 1).and("have.text", "404");
// });

Then(/^Credpal logo should be visible on the header$/, () => {
  cy.CrepalHeader();
})

When(/^I click on product dropdown on the page header$/, () => {
  cy.ProductLink();
});

Then(/^I should see a dropdown$/, () => {
  cy.ProductDropdown();
});

When(/^I click on the business button$/, () => {
  cy.BusinessLink();
});

Then(/^I should see header on business page$/, () => {
  cy.BusinessPage();
});

When(/^I click on what we do button$/, () => {
  cy.WhatLink();
});

Then(/^I should see header on FAQ page$/, () => {
  cy.FAQPage();
});

When(/^I click on affiliate button$/, () => {
  cy.AffiliateLink();
});

When(/^I click on switch nationality dropdown$/, () => {
 cy.SwitchLink()
});

When(/^I select a country different from the default$/, () => {
  cy.contains('span.font-medium.text-xs.text-gray-500', 'Egypt').click();
});

Then(/^What We Do should be translated to Egypt on the page$/, () => {
  cy.LanguageChange();
});

When(/^I click on the download button$/, () => {
 cy.DownloadButton()
});

Then(/^I should see a modal or popup with qr code$/, () => {
  cy.QRCodePopup();
});

Then(/^I should see background image$/, () => {
  cy.OnboardBackgroundImage();
});

When(/^I click on submit button$/, () => {
  cy.SubmitButton();
});
Then(/^I should see a validation message "([^"]*)"$/, (message) => {
  cy.ValidationMessage(message);
});

Then(/^I should see an error message "([^"]*)"$/, (message) => {
  cy.ErrorMessage(message);
});

When(
  /^I input form details "([^"]*)", "([^"]*)", "([^"]*)", and "([^"]*)"$/,
  (firstName, lastName, email, phone) => {
    cy.FillForm(firstName, lastName, email, phone);
  });

Then(/^I click on checkbox$/, () => {
  cy.CheckBox();
});

Then(/^I should see success message "([^"]*)"$/, (msg) => {
  cy.SuccessMessage(msg);
});
