*** Settings ***
Library  SeleniumLibrary
Resource  ../Resources/LoginFunctionalities.robot

Test Teardown  End TestCase

*** Test Cases ***
As a user, i can successfully log in
    [Documentation]  Expected: Validate the user navigates to the products page when logged in.
    [Tags]    LoginRelated 
    Open LoginPage
    Sumbit your credentials
    Validate if you logged in successfully

