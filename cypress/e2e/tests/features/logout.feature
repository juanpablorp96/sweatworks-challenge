Feature: Logout

  Scenario: Verify Logout
    Given I go to saucedemo.com
    When I type "<userName>" in "loginPage: usernameField"
    And I type "<password>" in "loginPage: passwordField"
    And I click on "loginPage: loginButton"
    And I click on "productsPage: hamburgerMenu"
    And I click on "productsPage: logoutButton"
    Then I should see "loginPage: loginButton"

  Examples:
    | userName      | password     |
    | standard_user | secret_sauce |
    | problem_user  | secret_sauce |
