import Header from "./Header";

class Home {
  static credpalHeaderText =
    "body > div:nth-child(6) > div:nth-child(1) > article:nth-child(2) > main:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)";
  static homeProductLink = "span[class='font-heading']";
  static homeFeedbackLink = "._hj-ETLL8__MinimizedWidgetMiddle__label";
  static feedbackMessage = "._hj--NfhW__ExpandedWidget__innerContainer";
  static homeBackgroundImage =
    ".flex.flex-col.gap-4.h-full.justify-center.py-16";
  static downloadButton = 'main [type="button"]';
  static paymentImage = "img[alt='payments']";
  static savingsImage = "img[alt='savingss']";
  static virtualImage = "img[alt='virtual_cards']";
  static creditImage = "img[alt='credit_builder']";

  static savingAndInvestmentsLink =
    "body > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1) > span:nth-child(1)";
  static savingsAndInvestmentHeader =
    "body > div:nth-child(6) > div:nth-child(1) > article:nth-child(2) > main:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)";
  static creditBuilderLink =
    "div[class='fixed max-w-screen mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transform transition-[opacity,transform] focus:outline-none z-[1100] duration-300 max-w-[21rem] translate-y-5'] a:nth-child(1)";
  static creditBuilderHeader =
    "body > div:nth-child(6) > div:nth-child(1) > article:nth-child(2) > main:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)";

  static homePaymentDownload = "";

  static visitPage() {
    cy.visit("/");
  }

  static verifyCredPalHeading($text) {
    cy.get(this.credpalHeaderText)
      .should("be.visible")
      .should("have.text", $text);
  }
  static verifyProductHeading() {
    cy.get(Header.productLink).should("be.visible").click();
  }

  static verifyFeedbackLink() {
    cy.get(this.homeFeedbackLink).should("be.visible").click();
  }

  static verifyFeedback($text) {
    cy.get(this.feedbackMessage)
      .should("be.visible")
      .should("have.text", $text);
  }
  static verifyBackgroundImage() {
    cy.get(this.homeBackgroundImage).should("be.visible");
  }
  static verifyPaymentDownload() {
    cy.get(this.homePaymentDownload).should("be.visible").click();
  }

  static verifyPaymentImage() {
    cy.get(this.paymentImage).should("be.visible");
  }
  static verifySavingsImage() {
    cy.get(this.savingsImage).should("be.visible");
  }
  static verifyVirtualImage() {
    cy.get(this.virtualImage).should("be.visible");
  }
  static verifyCreditImage() {
    cy.get(this.creditImage).should("be.visible");
  }

  static verifyDownloadButton() {
    cy.get(this.downloadButton)
      .not("[title='Scroll Left']")
      .not("[title='Scroll Right']")
      .each(($button) => {
        cy.wrap($button).should("be.visible");
      })
      .its("length")
      .should("be.eq", 9);
  }

  static verifySavingAndInvestmentLink() {
    cy.get(this.savingAndInvestmentsLink).should("be.visible").click();
  }

  static verifySavingsAndInvestmentHeader($text) {
    cy.get(this.savingsAndInvestmentHeader)
      .should("be.visible")
      .should("have.text", $text);
  }

  static verifyCreditBuilderLink() {
    cy.get(this.creditBuilderLink).should("be.visible").click();
  }

  static verifyCreditBuilderHeader($text) {
    cy.get(this.creditBuilderHeader)
      .should("be.visible")
      .should("have.text", $text);
  }
}
export default Home;
