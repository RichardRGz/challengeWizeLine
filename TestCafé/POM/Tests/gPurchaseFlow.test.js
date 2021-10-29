import navbar from "../Components/navbar"
import { CREDENTIALS, URL } from "../Data/constants"
import cartPage from "../Pages/cartPage"
import checkoutPage from "../Pages/checkoutPage"
import loginPage from "../Pages/loginPage"
import productsPage from "../Pages/productsPage"


fixture ('Purchase Flow test')
    .page`${URL.LOGIN_PAGE}`
    .beforeEach(async t => {
        await t.maximizeWindow()
        await t.expect(loginPage.logoBotColumn.exists).ok()
    })

    test.meta({type: 'PurchaseFlow'})('As a user, I should be able to create a purchase order', async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.VALID_USERNAME, CREDENTIALS.VALID_CREDENTIALS.VALID_PASSWORD)
        await t.expect(navbar.appLogo.exists).ok()
        await productsPage.addMultipleProducts()
        await cartPage.validateMultipleSelectedProducts()
        await t.click(cartPage.goToCheckoutPage)
        await checkoutPage.submitOrder()
        await checkoutPage.finishOrder()
        await navbar.logOutAction()
        await t.expect(loginPage.logoBotColumn.exists).ok()
    
    })