*** Settings ***
Library  SeleniumLibrary
Resource  ../../Variables.robot

*** Keywords ***
Open LoginPage
    Open Browser    ${LOGIN_PAGE}  ${BROWSER}
    Maximize Browser Window
    Title Should Be  Swag Labs
    Set selenium timeout    10

End TestCase
    Close Browser