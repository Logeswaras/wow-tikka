Feature: Cart Page
    Scenario: Modify cart
        Given Shows the items added to cart
        When Plus and Minus button are clicked
        Then Items is added and reduced respectively
        And Clicking "Continue to payment" button in the cart page
        And Delivery types page is redirected