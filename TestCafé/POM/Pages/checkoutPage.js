import {Selector, t} from 'testcafe'

class productsPage {
    constructor() {
        //Checkout inputs and validations
        this.firstNameInput = Selector('#first-name')
        this.lastNameInput = Selector('#last-name')
        this.postalCode = Selector('#postal-code')
        this.confirmationOrder = Selector('[class="complete-header"]').withExactText("THANK YOU FOR YOUR ORDER")
        //checkout buttons
        this.continueButton = Selector('#continue')
        this.finishButton = Selector('#finish')
        this.backHomeButton = Selector('#back-to-products')
    }

    async submitOrder(firstName, lastName){

        if(firstName != ""){
            await t.typeText(this.firstNameInput, firstName, { paste:true })
        }
        if(lastName != ""){
            await t.typeText(this.lastNameInput, lastName, { paste:true })
        }
        if(postalCode != ""){
            await t.typeText(this.postalCodeInput, postalCode, { paste:true })
        }
        await t.click(this.continueButton)
    }

    async finishOrder() {
        await t
            .click(this.finishButton)
            .expect(this.confirmationOrder.exists).ok()
            .click(this.backHomeButton)
    }
}
export default new productsPage()