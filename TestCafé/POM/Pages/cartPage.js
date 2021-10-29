import {Selector, t} from 'testcafe'

class productsPage {
    constructor() {
        //Products validation and checkout button
        this.SauceBikeLightsText = Selector('[class="inventory_item_name"]').withExactText("Sauce Labs Bike Light")
        this.SauceBoldShirtText = Selector('[class="inventory_item_name"]').withExactText("Sauce Labs Bolt T-Shirt")
        this.SauceBackpackText = Selector('[class="inventory_item_name"]').withExactText("Sauce Labs Backpack")
        this.SauceOnesieText = Selector('[class="inventory_item_name"]').withExactText("Sauce Labs Onesie")
        this.goToCheckoutPage = Selector('#checkout')
    }

    async validateMultipleSelectedProducts(){
        await t
            .expect(this.SauceBikeLightsText.exists).ok()
            .expect(this.SauceBoldShirtText.exists).ok()
            .expect(this.SauceBackpackText.exists).ok()
    }

    async validateSpecificProduct(){
        await t
            .expect(this.SauceOnesieText.exists).ok()
    }
}
export default new productsPage()