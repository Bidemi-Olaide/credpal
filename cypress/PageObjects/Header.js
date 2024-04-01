class Header {
  static credLink = "a[href='/']";
  static productLink = "button[title='Products']";
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
    cy.get(this.downloadLink).click({ force: true });
  }

  static verifyQrCodePopup() {
    cy.get(this.qrCodePopup).should("be.visible");
  }
}

export default Header;
