Feature: Login

  Scenario: Verify Login
    Given I go to saucedemo.com
    When I type "<userName>" in "loginPage: usernameField"
    And I type "<password>" in "loginPage: passwordField"
    And I click on "loginPage: loginButton"
    Then I should see text "Products"

  Examples:
    | userName      | password     |
    | standard_user | secret_sauce |
    | problem_user  | secret_sauce |
