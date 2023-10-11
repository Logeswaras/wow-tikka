Feature: Payment Page
    Scenario: Perform payment through stripe gateway
        Given Payment details are given
        When "Continue to payment" button is clicked after giving payment details
        Then After successful payment success message is shown
        