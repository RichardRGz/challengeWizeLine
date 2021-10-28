*** Settings ***
Library  SeleniumLibrary
Resource  ../Resources/LoginFunctionalities.robot
Resource  ../Resources/ProductsFunctionalities.robot

Test Teardown  End TestCase

*** Test Cases ***
As a user, i can make a order and then purchase it
    [Documentation]  Expected: Validate the user navigates to the order confirmation page.
    [Tags]    PurchaseFlow
    Open LoginPage
    Sumbit your credentials
    Validate if you logged in successfully
    Add the products to your cart
    Validate if your products are in your cart
    Checkout your buy order
    Confirm order and purchase it
    Click on the burger menu and try to log out
    Validate if you logged out successfully
#