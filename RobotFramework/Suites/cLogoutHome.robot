*** Settings ***
Library  SeleniumLibrary
Resource  ../Resources/LoginFunctionalities.robot

Test Teardown  End TestCase

*** Test Cases ***
As a user, i can successfully log out
    [Documentation]  Expected: Validate the user navigates to the login page.
    [Tags]    LoginRelated 
    Open LoginPage
    Sumbit your credentials
    Validate if you logged in successfully
    Click on the burger menu and try to log out
    Validate if you logged out successfully
