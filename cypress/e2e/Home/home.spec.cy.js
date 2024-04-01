import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Home from "../../PageObjects/Home";
import Header from "../../pageObjects/Header";
import Footer from "../../PageObjects/Footer";
import Affiliate from "../../pageObjects/Affiliate";

Given(/^I launch the home page$/, () => {
  Home.visitPage();
});

Then(/^I should see "([^"]*)"$/, ($text) => {
  Home.verifyCredPalHeading($text);
});

Then(/^I should see error 404 message$/, () => {
  Affiliate.page404();
});

Given(/^I launch the home page using wrong path$/, () => {
  cy.visit("/sale", {
    failOnStatusCode: false,
  });
});

// Header Section

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


Then(/^I click on see savings and investment$/, () => {
	Home.verifySavingAndInvestmentLink();
});


Then(/^I should see "([^"]*)" on saving and investment page$/, ($text) => {
	Home.verifySavingsAndInvestmentHeader($text);
	
});


Then(/^I click on see credit builder$/, () => {
	Home.verifyCreditBuilderLink();
});

Then(/^I should see "([^"]*)" on credit builder page$/, ($text) => {
	Home.verifyCreditBuilderHeader($text);
	
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

Then(/^I should see "([^"]*)" on affiliate page$/, ($text) => {
  Affiliate.verifyOnboardingForm($text);
});
// end header section

Then(/^I should see background image is visible$/, () => {
  Home.verifyBackgroundImage();
});

Then(/^I should click on payment download button$/, () => {
  Home.verifyPaymentDownload();
});

Then(/^I should see payment image with sneakers picture$/, () => {
  Home.verifyPaymentImage();
});

Then(/^I should see savings image with savings icon$/, () => {
  Home.verifySavingsImage();
});

Then(/^I should see virtual image$/, () => {
  Home.verifyVirtualImage();
});

Then(/^I should see credit build image$/, () => {
  Home.verifyCreditImage();
});

Then(/^I should see footer with text "([^"]*)"$/, ($text) => {
  Footer.verifyCredPalFooter($text);
});

Then(/^I should the number of reviews is visible$/, () => {
  Footer.verifyReviewsLength();
});

Then(/^I should be able to see the download button$/, () => {
  Home.verifyDownloadButton();
});
When(/^I click on customer terms$/, () => {
  Footer.verifyCustomerTerm();
});

Then(/^I should see the customer header "([^"]*)"$/, ($text) => {
  Footer.verifyCustomerTermHeader($text);
});

When(/^I click on merchant terms$/, () => {
  Footer.verifyMerchantTerm();
});

Then(/^I should see the merchant header "([^"]*)"$/, ($text) => {
  Footer.verifyMerchantHeader($text);
});

When(/^I click on privacy notice$/, () => {
  Footer.verifyPrivacyNotice();
});

Then(/^I should see the privacy header "([^"]*)"$/, ($text) => {
  Footer.verifyPrivacyHeader($text);
});

When(/^I click on blog notice$/, () => {
  Footer.verifyBlogLink();
});

Then(/^I should see the blog header logo()$/, () => {
  Footer.verifyBlogHeader();
});
