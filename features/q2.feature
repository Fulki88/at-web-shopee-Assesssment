
Feature: Edit existing Gist - Shopee Assessment

  Scenario: As an user, I want to edit an existing gist.

    Given a web browser is on the github.com page 
    When the user login with "" as username and "" as password
    And the user go to gist website and edit first gist
    Then the user verify the edited gist
    And the user logout