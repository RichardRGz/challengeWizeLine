*** Settings ***
Library  SeleniumLibrary
Resource  ../Resources/LoginFunctionalities.robot
Resource  ../Resources/ProductsFunctionalities.robot

Test Teardown  End TestCase

*** Test Cases ***
As a user, i can add multiple products to my cart
    [Documentation]  Expected: Validate all the items that have been added to the shopping cart.
    [Tags]    ProductsRelated
    Open LoginPage
    Sumbit your credentials
    Validate if you logged in successfully
    Add the products to your cart
    Validate if your products are in your cart
    