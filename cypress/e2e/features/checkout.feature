Feature: Checkout

  Scenario: Verify checkout cart
    Given I go to saucedemo.com
    When I type "<userName>" in "loginPage: usernameField"
    And I type "<password>" in "loginPage: passwordField"
    And I click on "loginPage: loginButton"
    And I add product "<producName>" to cart
    And I click on "productsPage: cartButton"
    And I click on "cartPage: checkoutButton"
    And I type "Will" in "checkoutPage: firstNameField"
    And I type "Smith" in "checkoutPage: lastNameField"
    And I type "12345" in "checkoutPage: zipCodeField"
    And I click on "checkoutPage: continueButton"
    Then I should see text "Payment Information"
    And I should see text "Shipping Information"
    And I should see text "Price Total"
    When I click on "checkoutPage: finishButton"
    Then I should see text "Thank you for your order!"
    And I should see text "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    And I should see "checkoutPage: backHomeButton"

  Examples:
    | userName      | password     | producName          |
    | standard_user | secret_sauce | Sauce Labs Backpack |
    | problem_user  | secret_sauce | Sauce Labs Backpack |
