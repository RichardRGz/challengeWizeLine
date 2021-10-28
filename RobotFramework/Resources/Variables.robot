** Settings ***
Library  SeleniumLibrary

*** Variables ***
#Site Data
${LoginPage}  https://www.saucedemo.com/
${Browser}    Chrome
${PageTitle}  Swag Labs
#Login Data
${ValidUsername}    standard_user
${ValidPassword}    secret_sauce
${LockedUsername}   locked_out_user
${InvalidUsername}  invalid_username
${InvalidPassword}  invalid_password
${Empty}  ##
#Products Data
${Backpack}  Sauce Labs Backpack
${Jacket}    Sauce Labs Fleece Jacket
${Tshirt}    Test.allTheThings() T-Shirt (Red)
${Onesie}    Sauce Labs Onesie

#Billing Data
${FirstName}  userFirstName
${LastName}   userLastName
${PostalCode}   12345-1234