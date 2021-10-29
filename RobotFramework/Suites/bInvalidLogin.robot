*** Settings ***
Library  SeleniumLibrary
Resource  ../Variables.robot
Resource  ../Resources/LoginFunctionalities.robot

Test Template  Login with invalid credentials should fail
Test Teardown  End TestCase


*** Test Cases ***
# These multiple tests covers the expected functionality when input a invalid credentials
Invalid Username      ${INVALID_USERNAME}  ${VALID_PASSWORD} 
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Invalid Password      ${VALID_USERNAME}  ${INVALID_PASSWORD}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Invalid Both          ${INVALID_USERNAME}   ${INVALID_PASSWORD}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Empty Username        ${EMPTY}  ${VALID_PASSWORD} 
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Empty Password        ${VALID_USERNAME}  ${EMPTY}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Empty Both            ${EMPTY}  ${EMPTY}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.
Locked Username       ${LOCKED_USERNAME}  ${VALID_PASSWORD}
    [Tags]    LoginRelated
    [Documentation]    Expected: Validate error message is displayed.