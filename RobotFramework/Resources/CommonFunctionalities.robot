*** Settings ***
Library  SeleniumLibrary
Resource  ./Variables.robot

*** Keywords ***
Open LoginPage
    Open Browser    ${LoginPage}  ${Browser}
    Maximize Browser Window
    Title Should Be  Swag Labs
    Set selenium timeout    10

End TestCase
    Close Browser