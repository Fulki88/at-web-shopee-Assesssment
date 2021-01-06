
Feature: my list of Gists - Shopee Assessment

  Scenario: As an user, I want to see my list of gists.

    Given a web browser is on the github.com page 
    When the user login with "" as username and "" as password
    And the user go to gist website and see my gist list 
    Then the user verify my gist list
    And the user logout