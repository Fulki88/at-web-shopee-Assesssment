
Feature: Create Public Gist - Shopee Assessment

  Scenario: As an user, I want to create a public gist.

    Given a web browser is on the github.com page 
    When the user login with "" as username and "" as password
    And the user go to gist website and create public gist
    Then the user verify the created gist
    And the user logout