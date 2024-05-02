Cypress.Commands.add('LaunchApp', () => {
    cy.visit('/sales')
})

Cypress.Commands.add('CrepalHeader', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.credLink).should("be.visible")
    });
})

Cypress.Commands.add('ProductLink', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.productLink).should('be.visible').trigger('mouseover').trigger("click")
    })
})

Cypress.Commands.add('ProductDropdown', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.dropDown).should("be.visible");
        cy.get(el.dropDownItems).each(($item) => {
            cy.wrap($item).should("be.visible");
        });
    })
})

Cypress.Commands.add('BusinessLink', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.businessLink).click();
    })
})

Cypress.Commands.add('BusinessPage', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.businessPageHeading).should("be.visible").and("contain", "Grow your business with CredPal Pay");
    })
})

Cypress.Commands.add('WhatLink', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.whatLink).click();
    })
})

Cypress.Commands.add('FAQPage', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.whatPageHeading).should("be.visible").and("contain", "Frequently asked questions");
    })
})

Cypress.Commands.add('AffiliateLink', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.affiliateLinkHeader).click();
    })
})

Cypress.Commands.add('SwitchLink', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.switchLink).should('be.visible').trigger('mouseover').trigger("click");
    })
})


Cypress.Commands.add('NationalityPopup', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.switchLocaleToEgypt).click();
    })
})

Cypress.Commands.add('LanguageChange', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.faqInArabic).should("be.visible").should("have.text", "ما نحن داو")
    })
})

Cypress.Commands.add('DownloadButton', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.downloadLink).should('be.visible').trigger('mouseover').trigger("click");
    })
})

Cypress.Commands.add('QRCodePopup', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.qrCodePopup).should("be.visible");
    })
})

Cypress.Commands.add('OnboardBackgroundImage', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.backgroundImage).should("be.visible");
    })
})

Cypress.Commands.add('SubmitButton', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.submitButton).should("be.visible").click();
    })
})

Cypress.Commands.add('ValidationMessage', (message) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.invalidMessage).should("be.visible").contains(message);
    })
})

Cypress.Commands.add('ErrorMessage', (message) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.errorMessage).should("be.visible").contains(message);
    })
})

Cypress.Commands.add('FillForm', (firstName, lastName, email, phone) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.firstNameField).type(firstName)
        cy.get(el.lastNameField).type(lastName);
        cy.get(el.emailAddressField).type(email);
        cy.get(el.phoneNumber).type(phone);
    })
})


Cypress.Commands.add('CheckBox', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.checkbox).find("label:first-child").click();
    })
})

Cypress.Commands.add('SuccessMessage', () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.successMessage).should("be.visible").contains(message)
    })
})