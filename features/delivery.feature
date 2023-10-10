Feature: Delivery Page
    Scenario: Select Delivery Type
        Given Delivery types are given
        When One of the delivery type is selected
        Then "Continue to payment" button is pressed
        And Redirected to Address page