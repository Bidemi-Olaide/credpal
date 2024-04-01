class Affiliate {
  static firstNameField = "#first_name";
  static lastNameField = "#last_name";
  static emailAddressField = "#email";
  static phoneNumber = "#phone";
  static submitButton = "button[type='submit']";
  static invalidMessage = ".text-xs.text-red-500.uppercase.mt-2";
  static errorMessage = ".bg-red-500.p-4.rounded.text-xs.text-white.mt-2";
  static invalidPhone = " label[for='phone']";
  static successMessage = ".bg-green-500";
  static backgroundImage = "img[alt='Affiliate Onboarding Form']";
  static formHeaderText =
    "h1.font-bold.font-heading.mb-10.text-\\[2\\.25rem\\]";
  static checkbox = '[class="gap-5 grid grid-cols-1 sm:grid-cols-2"]';

  static visitPage() {
    cy.visit("/sales");
  }

  static visitWrongPage() {
    cy.visit("/sale", {
      failOnStatusCode: false,
    });
  }

  static page404() {
    cy.get("h1[data-v-5d12fb99]")
      .should("have.length", 1)
      .and("have.text", "404");
  }

  static verifyOnboardingForm($text) {
    cy.get(this.formHeaderText).should("be.visible").should("have.text", $text);
  }

  static verifyOnboardBackgroundImage() {
    cy.get(this.backgroundImage).should("be.visible");
  }

  static triggerSubmitButton() {
    cy.get(this.submitButton).should("be.visible").click();
  }

  static verifyErrorMessage(message) {
    cy.get(this.errorMessage).should("be.visible").contains(message);
  }

  static verifyValidationMessage(message) {
    cy.get(this.invalidMessage).should("be.visible").contains(message);
  }

  static verifySuccessMessage(message) {
    cy.get(this.successMessage).should("be.visible").contains(message);
  }

  static setFirstName(firstName) {
    cy.get(this.firstNameField).type(firstName);
  }

  static setLastName(lastName) {
    cy.get(this.lastNameField).type(lastName);
  }

  static setEmail(email) {
    cy.get(this.emailAddressField).type(email);
  }

  static setPhone(phone) {
    cy.get(this.phoneNumber).type(phone);
  }

  static setCheckbox() {
    cy.get(this.checkbox).find("label:first-child").click();
  }
}

export default Affiliate;
