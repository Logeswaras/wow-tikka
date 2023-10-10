Feature: Home screen
    Scenario: Search location
        Given Location is entered in the searchbox
        When "Search" button is clicked
        Then Menu respective of search is shown

    Scenario: Check cart
        Given Cart symbol is present at navbar
        When Cart symbol is clicked to view cart page
        Then Cart page is shown

    Scenario: Menu List
        Given List of menus are shown
        When OnClick of the menu card opens menu-description page
        Then Menu-description page is seen
        And OnClick of button "Customize"
        And Shows Customize column at the right end
        And OnClick of "AddToCart" button
        And Adds menu to the cart

