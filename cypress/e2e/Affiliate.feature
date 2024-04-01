Feature: Test to verify affiliate page
    A test to launch url
    A test for page verification
    A test to verify affiliate links on the page
    A test for onboarding form


    Scenario: A test to verify affiliate page
        Given I launch the affiliate page
        Then I should see "Affiliate Onboarding Form"
        Then Credpal logo should be visible on the header

    Scenario: A test to verify background image
        Given I launch the affiliate page
        Then  I should see background image

    Scenario: A test to verify invalid affiliate url
        Given I launch the affiliate page using wrong path
        Then  I should see error 404 message

    Scenario: A test to check the product dropdown on the header is clickable or works
        Given I launch the affiliate page
        When  I click on product dropdown on the page header
        Then  I should see a dropdown

    Scenario: A test to check the business button on the header is clickable and redirect to the right page
        Given I launch the affiliate page
        When  I click on the business button
        Then  I should see "Grow your business with CredPal Pay" on business page


    Scenario: A test to check the what we do button on the header is clickable and redirect to the right page
        Given I launch the affiliate page
        When  I click on what we do button
        Then  I should see "Frequently asked questions" on FAQ page

    Scenario: A test to check the affiliate button on the header is clickable and redirect to the right page
        Given I launch the affiliate page
        When  I click on affiliate button
        Then  I should see "Affiliate Onboarding Form"

    Scenario: A test to succesfully switch nationality or change language
        Given I launch the affiliate page
        When  I click on switch nationality dropdown
        And   I select a country different from the default
        Then  What We Do should be translated to "ما نحن داو" on the page


    Scenario: A test to verify download button
        Given I launch the affiliate page
        When  I click on the download button
        Then I should see a modal or popup with qr code


    Scenario: A user try to submit without filling the form
        Given I launch the affiliate page
        When  I click on submit button
        Then  I should see a validation message "this field is required."

    Scenario: A user try to submit without filling all details of the form
        Given I launch the affiliate page
        When  I input form details "aramide", " ", "haramidey+215@239.com", and "08022991177"
        Then  I click on submit button
        Then  I should see a validation message "this field is required."

    Scenario: A user cannot submit using wrong email format
        Given I launch the affiliate page
        When  I input form details "aramide", "bidemi", "haramidey.com", and "08022991177"
        Then  I should see a validation message "this field has to be a valid email address."

    Scenario: A user cannot submit using wrong phone number format
        Given I launch the affiliate page
        When  I input form details "aramide", "bidemi", "haramidey+215@239.com", and "22991177"
        Then  I should see a validation message "the field has to be a valid nigerian phone number."

    Scenario: A user try to use an existing record
        Given I launch the affiliate page
        When  I input form details "aramide", "bidemi", "haramidey+215@239.com", and "08022991187"
        Then  I click on checkbox
        Then  I click on submit button
        Then  I should see a validation message "The email has already been taken."
        Then  I should see an error message "The given data was invalid."


    # Scenario: A user can submit succesfully
    #     Given I launch the affiliate page
    #     When  I input form details "aramide", "bidemi", "haramidey+901@239.com", and "08023871099"
    #     Then  I click on checkbox
    #     Then  I click on submit button
    #     Then  I should see success message "Data submitted successfully."
