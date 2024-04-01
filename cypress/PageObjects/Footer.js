class Footer {
 static footerHeading = "body > div:nth-child(6) > div:nth-child(1) > article:nth-child(2) > main:nth-child(1) > section:nth-child(6) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)";
 static homepageReviews = ".flex.flex-row.gap-6.pb-10";
 static customerTerms = "a[title='Customer Terms of use']";
 static customerTermsHeader = "#customer-terms-of-use";
 static merchantTerms = "a[title='Merchant Terms of service']";
 static merchantHeader = "#credpal-pay-terms-of-service";
 static privacyNotice = "a[title='Privacy Notice']";
 static privacyHeader = "div[class='font-prose prose-headings:font-heading prose prose-blue max-w-prose'] h1";
 static blogLink = "a[title='Blog']";
 static blogHeader = "#logo"

 static verifyCredPalFooter($text) {
    cy.get(this.footerHeading).should("be.visible").should("have.text", $text);
}
static verifyReviewsLength() {
    cy.get(this.homepageReviews).its('length').should('be.gte', 1);
}

static verifyCustomerTerm() {
    cy.get(this.customerTerms).click();
}
static verifyCustomerTermHeader($text) {
    cy.get(this.customerTermsHeader).should('be.visible').should("have.text", $text);
}

static verifyMerchantTerm() {
    cy.get(this.merchantTerms).click();
}
static verifyMerchantHeader($text) {
    cy.get(this.merchantHeader).should('be.visible').should("have.text", $text);

}
static verifyPrivacyNotice() {
    cy.get(this.privacyNotice).click();
}
static verifyPrivacyHeader($text) {
    cy.get(this.privacyHeader).should('be.visible').should("have.text", $text);

}
static verifyBlogLink() {
    cy.get(this.blogLink).click();
}
static verifyBlogHeader() {
    cy.get(this.blogHeader).should('be.visible');

}
}

export default Footer;