
Feature: Delete existing Gist - Shopee Assessment

  Scenario: As an user, I want to delete an existing gist.

    Given a web browser is on the github.com page 
    When the user login with "" as username and "" as password
    And the user go to gist website and delete first gist
    Then the user verify the deleted gist
    And the user logout