Feature: Cart

  Background:
    Given I go to saucedemo.com
  
  Scenario: Verify add item to cart
    When I type "<userName>" in "loginPage: usernameField"
    And I type "<password>" in "loginPage: passwordField"
    And I click on "loginPage: loginButton"
    And I add product "<producName>" to cart
    Then I should see remove button for product "<producName>"
    And I should see "productsPage: cartBadge" with text "1"

  Examples:
    | userName      | password     | producName              |
    | standard_user | secret_sauce | Sauce Labs Bolt T-Shirt |
    | problem_user  | secret_sauce | Sauce Labs Bolt T-Shirt |


  Scenario: Verify remove item from cart
    When I type "<userName>" in "loginPage: usernameField"
    And I type "<password>" in "loginPage: passwordField"
    And I click on "loginPage: loginButton"
    And I add product "<producName>" to cart
    And I remove product "<producName>" from cart
    Then I should not see remove button for product "<producName>"
    And I should not see "productsPage: cartBadge"

  Examples:
    | userName      | password     | producName          |
    | standard_user | secret_sauce | Sauce Labs Backpack |
    | problem_user  | secret_sauce | Sauce Labs Backpack |
