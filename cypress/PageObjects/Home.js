import Header from "./Header";


class Home {

    static credpalHeaderText = "body > div:nth-child(6) > div:nth-child(1) > article:nth-child(2) > main:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)";
    static homeProductLink = "span[class='font-heading']";
    static homeFeedbackLink = "._hj-ETLL8__MinimizedWidgetMiddle__label";
    static feedbackMessage = "._hj--NfhW__ExpandedWidget__innerContainer";
    static homeBackgroundImage = ".flex.flex-col.gap-4.h-full.justify-center.py-16";
    static paymentImage = "img[alt='payments']";
    static savingsImage = "img[alt='savingss']";
    static virtualImage = "";
    static creditImage = "img[alt='credit_builder']";
    static downloadButton = "div[id='__nuxt'] div[class='mx-auto px-5 md:px-0 w-full md:max-w-[min(1040px,calc(100%-1rem))] md:w-[65rem]'] div:nth-child(3) div:nth-child(1)"
    static appStore = ""
    
    static homePaymentDownload = "";

    
    static visitPage() {
        cy.visit('/');
    }

    static verifyCredPalHeading($text) {
        cy.get(this.credpalHeaderText).should("be.visible").should("have.text", $text);
    }
    static verifyProductHeading() {
        cy.get(Header.productLink).should("be.visible").click();
    }

    static verifyFeedbackLink() {
        cy.get(this.homeFeedbackLink).should("be.visible").click();
    }

    static verifyFeedback($text) {
        cy.get(this.feedbackMessage).should("be.visible").should("have.text", $text);
    }
    static verifyBackgroundImage() {
        cy.get(this.homeBackgroundImage).should("be.visible");
    }
    static verifyPaymentDownload() {
        cy.get(this.homePaymentDownload).should("be.visible").click()
    }

    static verifyPaymentImage() {
        cy.get(this.paymentImage).should("be.visible")
    }
    static verifySavingsImage() {
        cy.get(this.savingsImage).should("be.visible")
    }
    static verifyVirtualImage() {
        cy.get(this.virtualImage).should("be.visible")
    }
    static verifyCreditImage() {
        cy.get(this.creditImage).should("be.visible")
    }
    static verifyDownloadButton() {
        cy.get(this.downloadButton).should("be.visible")
    }
    
}
export default Home;