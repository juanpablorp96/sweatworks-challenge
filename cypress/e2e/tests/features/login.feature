Feature: Login

  Scenario: Verify Login
    Given I go to saucedemo.com
    When I type "<userName>" in the "user-name" field
    And I type "<password>" in the "password" field
    And I click on "login-button"
    Then I should see "Swag Labs"

  Examples:
    | userName      | password     |
    | standard_user | secret_sauce |
    | problem_user  | secret_sauce |
