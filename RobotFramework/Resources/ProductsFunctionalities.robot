*** Settings ***
Library  SeleniumLibrary
Library  Collections
Resource  ./Variables.robot
Resource  ./CommonFunctionalities.robot


*** Keywords ***
Sort Products from low to high
    Click element    class:product_sort_container
    Sleep  1
    Select from list by value  class:product_sort_container  lohi
    

Validate if the products are sorted correctly
    Element should contain    id:inventory_container   ${Onesie}
    Capture page screenshot  EMBED

Add the products to your cart
    Click button    id:add-to-cart-sauce-labs-backpack
    Click button    id:add-to-cart-sauce-labs-fleece-jacket
    Click button    id:add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)
    Sleep  1
    

Validate if your products are in your cart
    Click element    class:shopping_cart_link
    Sleep    1
    Page should contain  ${Backpack}
    Page should contain  ${Jacket}
    Page should contain  ${Tshirt}
    Capture page screenshot  EMBED

Add the expected product to the cart    
    Click button    id:add-to-cart-sauce-labs-onesie
    Sleep  1

Validate if your selected product is in your cart
    Click element    class:shopping_cart_link
    Page should contain  ${Onesie}
    Capture page screenshot  EMBED

Checkout your buy order
    Click button    id:checkout
    Sleep    1
    Input text    id:first-name   ${FirstName}
    Input text    id:last-name    ${LastName}
    Input text    id:postal-code    ${PostalCode}
    Capture page screenshot  EMBED
    Click button    id:continue

Confirm order and purchase it
    Sleep    1
    Capture page screenshot  EMBED
    Click button    id:finish
    Page should contain    THANK YOU FOR YOUR ORDER
    Element should be enabled   class:pony_express
    Capture page screenshot  EMBED
    Click button    id:back-to-products

