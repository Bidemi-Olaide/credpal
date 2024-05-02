import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I launch the home page$/, () => {
  cy.visit('/');
});

Then(/^I should see "([^"]*)"$/, ($text) => {
  cy.get('h1.font-bold.font-heading').should("be.visible").should("have.text", $text);
  })

// Then(/^I should see error 404 message$/, () => {
//   Affiliate.page404();
// });

// Given(/^I launch the home page using wrong path$/, () => {
//   cy.visit("/sale", {
//     failOnStatusCode: false,
//   });
// });

// Header Section

Then(/^Credpal logo should be visible on the header$/, () => {
  cy.CredpalHeader();
});

When(/^I click on product dropdown on the page header$/, () => {
 cy.ProductLink();
});

Then(/^I should see a dropdown$/, () => {
  cy.ProductDropdown();
});


Then(/^I click on see savings and investment$/, () => {
  cy.fixture("elements").then((el) => {
	cy.get(el.savingAndInvestmentsLink).should("be.visible").click();
});
});


Then(/^I should see "([^"]*)" on saving and investment page$/, ($text) => {
  cy.fixture("elements").then((el) => {
	cy.get(this.savingsAndInvestmentHeader).should("be.visible").should("have.text", $text);
  }) 
});


Then(/^I click on see credit builder$/, () => {
  cy.fixture("elements").then((el) => {
	cy.get(el.creditBuilderLink).should("be.visible").click();
  });
});

Then(/^I should see "([^"]*)" on credit builder page$/, ($text) => {
  cy.fixture("elements").then((el) => {
	cy.get(this.creditBuilderHeader).should("be.visible").should("have.text", $text);($text);
  })
});

When(/^I click on the business button$/, () => {
  cy.BusinessLink();
});

Then(/^I should see on business page$/, () => {
  cy.BusinessPage();
});

When(/^I click on what we do button$/, () => {
  cy.WhatLink();
});

Then(/^I should see on FAQ page$/, () => {
  cy.FAQPage();
});

When(/^I click on affiliate button$/, () => {
  cy.AffiliateLink();
});

When(/^I click on switch nationality dropdown$/, () => {
  cy.SwitchLink();
});

When(/^I select a country different from the default$/, () => {
  cy.contains('span.font-medium.text-xs.text-gray-500', 'Egypt').click();
});

Then(/^What We Do should be translated to Egypt on the page$/, () => {
  cy.LanguageChange();
});

When(/^I click on the download button$/, () => {
  cy.DownloadButton();
});

Then(/^I should see a modal or popup with qr code$/, () => {
  cy.QRCodePopup();;
});

Then(/^I should see "([^"]*)" on affiliate page$/, ($text) => {
  cy.fixture("elements").then((el) => {
  cy.get(el.formHeaderText).should("be.visible").should("have.text", $text);
  })
});
// end header section

Then(/^I should see background image is visible$/, () => {
  cy.fixture("elements").then((el) => {
  cy.get(el.homeBackgroundImage).should("be.visible");
  })
});


Then(/^I should click on payment download button$/, () => {
  cy.fixture("elements").then((el) => {
  cy.get(el.homePaymentDownload).should("be.visible").click();
  })
});

Then(/^I should see payment image with sneakers picture$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.paymentImage).should("be.visible");
  })
});

Then(/^I should see savings image with savings icon$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.savingsImage).should("be.visible");
  })
});

Then(/^I should see virtual image$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.virtualImage).should("be.visible");
  })
});


Then(/^I should see credit build image$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.creditImage).should("be.visible");
  })
});

Then(/^I should see footer with text "([^"]*)"$/, ($text) => {
  cy.fixture("elements").then((el) => {
    cy.get(el.footerHeading).should("be.visible").should("have.text", $text);
  })
});


Then(/^I should the number of reviews is visible$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.homepageReviews).its('length').should('be.gte', 1);
  })
});

Then(/^I should be able to see the download button$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.downloadButton).not("[title='Scroll Left']").not("[title='Scroll Right']").each(($button) => {
        cy.wrap($button).should("be.visible");
      })
      .its("length").should("be.eq", 9);
    })
});



When(/^I click on customer terms$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.customerTerms).click();
  })
});

Then(/^I should see the customer header "([^"]*)"$/, ($text) => {
  cy.fixture("elements").then((el) => {
    cy.get(el.customerTermsHeader).should('be.visible').should("have.text", $text);
  })
});

When(/^I click on merchant terms$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.merchantTerms).click();;
  })
});

Then(/^I should see the merchant header "([^"]*)"$/, ($text) => {
  cy.fixture("elements").then((el) => {
    cy.get(el.merchantHeader).should('be.visible').should("have.text", $text);
  })
});

When(/^I click on privacy notice$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.privacyNotice).click();
  })
});

Then(/^I should see the privacy header "([^"]*)"$/, ($text) => {
  cy.fixture("elements").then((el) => {
    cy.get(el.privacyHeader).should('be.visible').should("have.text", $text);
  })
});

When(/^I click on blog notice$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.blogLink).click();
  })
});

Then(/^I should see the blog header logo()$/, () => {
  cy.fixture("elements").then((el) => {
    cy.get(el.blogHeader).should('be.visible');
  })
});
