import {Selector, t} from 'testcafe'

class productsPage {
    constructor() {
        // Sort options
        this.productSortContainer = Selector('[class="product_sort_container"]')
        this.sortLowHighOption = Selector('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(3)')
        // Products buttons
        this.SauceBackpack = Selector('#add-to-cart-sauce-labs-backpack')
        this.SauceBikeLights = Selector('#add-to-cart-sauce-labs-bike-light')
        this.SauceBoldShirt = Selector('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.SauceOnesie = Selector('#add-to-cart-sauce-labs-onesie')
        this.goToCartPage = Selector('[class="shopping_cart_link"]')

    }

    async sortProductsLowHigh(){
        await t
            .click(this.productSortContainer)
            .wait(1000)
            .click(this.sortLowHighOption)
    }

    async validateSortOrder(){
        await t
            .click(this.productSortContainer)
    }

    async addMultipleProducts(){
        await t
            .click(this.SauceBikeLights)
            .click(this.SauceBoldShirt)
            .click(this.SauceBackpack)
            .wait(1000)
            .click(this.goToCartPage)
    }

    async addSpecifyProduct(){
        await t
            .click(this.SauceOnesie)
            .click(this.goToCartPage)
    }

}
export default new productsPage()