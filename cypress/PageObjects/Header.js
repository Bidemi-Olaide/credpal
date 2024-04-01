class Header {
  static credLink = "a[href='/']";
  static productLink = "header button[title='Products']";
  static dropDown = "[data-ui-type='dropdown:menu']";
  static dropDownItems = "[data-ui-type='dropdown:item']";

  static businessPageHeading = "main h1";
  static whatLink = "header [href='/faqs']";
  static businessLink = "header [href='/business']";
  static affiliateLinkHeader = "header [href='/sales']";
  static switchLink = "button[title='Switch Nationality']";
  static switchLocaleToEgypt =
    "body > div:nth-child(3) > div:nth-child(2) > a:nth-child(3) > span:nth-child(2)";
  static modulePopup = ".dialog-open";
  static whatPageHeading = "main h1";

  static downloadLink = "header button[title='Download the CredPal app']";

  static savingsLink = "a[href='/savings-and-investments']";
  static creditLink = "a[href='/credit-builder']";
  static faqInArabic = "a[title='ما نحن داو']";
  static qrCodePopup = "body > div:nth-child(5)";
  static languagePopup = "body > div:nth-child(3)";

  static switchCountryToEgypt() {
    cy.get(this.switchLocaleToEgypt).click();
  }

  static verifyEgyptLanguage(text) {
    cy.get(this.faqInArabic).should("be.visible").should("have.text", text);
  }

  static clickDownloadButton() {
    cy.get(this.downloadLink).should('be.visible').trigger('mouseover').trigger("click");
  }

  static verifyQrCodePopup() {
    cy.get(this.qrCodePopup).should("be.visible");
  }

  static verifyCredPalLogo() {
    cy.get(this.credLink).should("be.visible");
  }

  static openProductDropdown() {
    cy.get(this.productLink).should('be.visible').trigger('mouseover').trigger("click");
  }

  static verifyProductDropdown() {
    cy.get(this.dropDown).should("be.visible");
  }

  static verifyProductDropdownItems() {
    cy.get(this.dropDownItems).each(($item) => {
      cy.wrap($item).should("be.visible");
    });
  }

  static clickBusinessButton() {
    cy.get(this.businessLink).click();
  }

  static verifyBusinessPage(text) {
    cy.get(this.businessPageHeading).should("be.visible").and("contain", text);
  }

  static clickWhatWeDoButton() {
    cy.get(this.whatLink).click();
  }

  static verifyFAQPage($text) {
    cy.get(this.whatPageHeading).should("be.visible").and("contain", $text);
  }

  static clickAffiliateButton() {
    cy.get(this.affiliateLinkHeader).click();
  }

  static clickNationalityButton() {
    cy.get(this.switchLink).should('be.visible').trigger('mouseover').trigger("click");
  }

  static verifyNationalityPopup() {
    cy.get(this.languagePopup).should("be.visible");
  }
}

export default Header;
