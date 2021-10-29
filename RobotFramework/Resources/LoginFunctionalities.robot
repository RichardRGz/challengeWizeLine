*** Settings ***
Library  SeleniumLibrary
Resource  ../Variables.robot
Resource  ./CommonFunctionalities.robot


*** Keywords ***
Sumbit your credentials
    Capture Page Screenshot  EMBED
    Input Text   id:user-name  ${VALID_USERNAME}
    Input Password   id:password  ${VALID_PASSWORD}
    Click Button    id:login-button
    
Validate if you logged in successfully
    Title should be  ${PAGE_TITLE}
    Element should be enabled   class:header_secondary_container
    Sleep    1
    Capture page screenshot  EMBED

Click on the burger menu and try to log out
    Click button    id:react-burger-menu-btn
    Sleep    1
    Click element    id:logout_sidebar_link


Validate if you logged out successfully
    Title should be  ${PAGE_TITLE}
    Element should be enabled   class:bot_column
    Capture page screenshot  EMBED

Login with invalid credentials should fail
    [Arguments]    ${VALID_USERNAME}  ${VALID_PASSWORD}
   
    Open LoginPage
    Input Text   id:user-name  ${VALID_USERNAME}
    Input Password   id:password  ${VALID_PASSWORD}
    Click Button    id:login-button
    Sleep    1
    Element should be enabled   class:error-button
    Capture Page Screenshot  EMBED