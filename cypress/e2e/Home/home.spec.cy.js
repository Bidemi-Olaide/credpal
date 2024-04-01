import {Given,
	When,
	Then
} from "@badeball/cypress-cucumber-preprocessor"
import Home from "../../PageObjects/Home";
import Header from "../../PageObjects/Header";
import Footer from "../../PageObjects/Footer";


Given(/^I launch the home page$/, () => {
	Home.visitPage();
});

Then(/^I should see "([^"]*)"$/, ($text) => {
	Home.verifyCredPalHeading($text);
});

Given(/^I launch the home page using wrong path$/, () => {
	cy.visit("/sale", {
	  failOnStatusCode: false,
	});
  });
  
Then(/^I should see error 404 message$/, () => {
	cy.get("h1[data-v-5d12fb99]")
	  .should("have.length", 1)
	  .and("have.text", "404");
  });

When(/^I click on product dropdown on the page header$/, () => {
	Home.verifyProductHeading();
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

// When(/^I click on affiliate button$/, () => {
// 	cy.get(Header.affiliateLinkHeader).click();
//   });

// Then(/^I should see "([^"]*)"$/, ($text) => {
// 	Home.verifyTheOnboardingForm($text);
//   });

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


Then(/^I should verify that download button is visible$/, () => {
	;
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


When(/^I click on customer terms$/, () => {
	Footer.verifyCustomerTerm();
});


Then(/^I should see the customer header "([^"]*)"$/, ($text) => {
	Footer.verifyCustomerTermHeader($text);
	;
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










