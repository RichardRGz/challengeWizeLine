*** Settings ***
Library  SeleniumLibrary
Resource  ../Resources/LoginFunctionalities.robot
Resource  ../Resources/ProductsFunctionalities.robot

Test Teardown  End TestCase

*** Test Cases ***
As i user, i can sort the products by price from low to high 
    [Documentation]  Expected: Validate the products have been sorted by price correctly. (low to high)
    [Tags]    ProductsRelated
    Open LoginPage
    Sumbit your credentials
    Validate if you logged in successfully
    Sort Products from low to high
    Validate if the products are sorted correctly