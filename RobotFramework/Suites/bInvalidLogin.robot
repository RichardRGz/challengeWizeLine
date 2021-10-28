*** Settings ***
Library  SeleniumLibrary
Resource  ../Resources/Variables.robot
Resource  ../Resources/LoginFunctionalities.robot

Test Template  Login with invalid credentials should fail
Test Teardown  End TestCase


*** Test Cases ***
# These multiple tests covers the expected functionality when input a invalid credentials
Invalid Username      ${InvalidUsername}  ${ValidPassword} 
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Invalid Password      ${ValidUsername}  ${InvalidPassword}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Invalid Both          ${InvalidUsername}   ${InvalidPassword}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Empty Username        ${Empty}  ${ValidPassword} 
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Empty Password        ${ValidUsername}  ${Empty}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Empty Both            ${Empty}  ${Empty}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Locked Username       ${LockedUsername}  ${ValidPassword}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.