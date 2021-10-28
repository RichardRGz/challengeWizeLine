*** Settings ***
Library  SeleniumLibrary
Resource  ../Resources/LoginFunctionalities.robot
Resource  ../Resources/ProductsFunctionalities.robot

Test Teardown  End TestCase

*** Test Cases ***
As a user, i can add a specific product to the cart
    [Documentation]  Expected:  Validate the correct product was added to the cart. <‘Sauce Labs Onesie’> 
    [Tags]    ProductsRelated
    Open LoginPage
    Sumbit your credentials
    Validate if you logged in successfully
    Add the expected product to the cart
    Validate if your selected product is in your cart
#