Feature: Address Page
    Scenario: Select Address
        Given Address can be added
        When Address is selected
        Then Button "Continue to payment" is clicked
        And Redirected to stripe payment method page