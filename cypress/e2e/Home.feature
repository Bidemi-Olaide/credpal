Feature: Test to verify home page
    A test to launch url
    A test for page verification
    A test to verify home links on the page
    A test for onboarding form


    Scenario: A test to verify home page
        Given I launch the home page
        Then I should see "One App, all your Financial Needs"

    # Scenario: A test to verify invalid home url
    #     Given I launch the home page using wrong path
    #     Then  I should see error 404 message


    # header section

    Scenario: A test to check the product dropdown on the header is clickable or works
        Given I launch the home page
        When  I click on product dropdown on the page header
        Then  I should see a dropdown

    Scenario: A test to check the business button on the header is clickable and redirect to the right page
        Given I launch the home page
        When  I click on the business button
        Then  I should see on business page

    Scenario: A test to check the what we do button on the header is clickable and redirect to the right page
        Given I launch the home page
        When  I click on what we do button
        Then  I should see on FAQ page

    Scenario: A test to check the affiliate button on the header is clickable and redirect to the right page
        Given I launch the home page
        When  I click on affiliate button
        Then  I should see "Affiliate Onboarding Form" on affiliate page

    Scenario: A test to succesfully switch nationality or change language
        Given I launch the home page
        When  I click on switch nationality dropdown
        And   I select a country different from the default
        Then  What We Do should be translated to Egypt on the page

    Scenario: A test to verify download button
        Given I launch the home page
        When  I click on the download button
        Then I should see a modal or popup with qr code

    # end header section

    Scenario: A test to verify background image
        Given I launch the home page
        Then  I should see background image is visible

    Scenario: A test to verify payment image
        Given I launch the home page
        Then  I should see payment image with sneakers picture

    Scenario: A test to verify savings image
        Given I launch the home page
        Then  I should see savings image with savings icon

    Scenario: A test to verify virtual image
        Given I launch the home page
        Then  I should see virtual image

    Scenario: A test to verify credit build image
        Given I launch the home page
        Then  I should see credit build image

    Scenario: A test to verify credpal footer
        Given I launch the home page
        Then  I should see footer with text "Our customers love us"

    Scenario: A test to verify length of page reviews
        Given I launch the home page
        Then  I should the number of reviews is visible

    Scenario: A test that customer terms is clickable
        Given I launch the home page
        When I click on customer terms
        Then I should see the customer header "CUSTOMER TERMS OF USE"

    Scenario: A test that merchant terms is clickable
        Given I launch the home page
        When I click on merchant terms
        Then I should see the merchant header "CREDPAL PAY TERMS OF SERVICE"

    Scenario: A test that privacy notice is clickable
        Given I launch the home page
        When I click on privacy notice
        Then I should see the privacy header "Privacy Notice"


    Scenario: A test that blog notice is clickable
        Given I launch the home page
        When I click on blog notice
        Then I should see the blog header logo

    Scenario: A test to verify download button is visible
        Given I launch the home page
        Then  I should be able to see the download button