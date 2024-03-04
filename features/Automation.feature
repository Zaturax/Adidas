Feature: Test Automation

##JossJoss!1
    Scenario: Happy scenario
        Given I go to the "adidasPT"
        And I click the "accountIcon" element
        And I fill the 'emailAddress' element with 'generatedEmail'
        And I click the 'marketingBox' element
        And I click the 'tosBox' element
        When I click the 'continueButton' element
        Then I should see the "welcomeMessage" element
        Given I fill the 'passwordField' element with 'generatedPassword' 
        Then I click the 'createPasswordButton' element
        Given I go to the "adidasPTLogOut" 
        When I click the 'logoutButton' element
        And I click the 'logoutConfirmButton' element
        Then I should see the "afterLogoutMessage" element
        Given I hover the "collectionsMenu"
        And I click the 'ultraboostMenuItem' element
        And I click the 'ultraboostItem' element
        And I select a random shoe size
        When I click the 'addToCart' element
        Then I should see the "addedToCartModalTitle" element
        Given I click the 'closeModalButton'
        And I click the "accountIcon" element
        And I fill the 'emailAddress' element with 'generatedEmail'
        And I click the 'continueButton' element
        And I fill the 'passwordField' element with 'generatedPassword'
        When I click the 'loginButton' element
        Then I should see the "cartNotEmpty" element
