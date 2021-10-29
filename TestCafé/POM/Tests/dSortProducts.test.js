import navbar from "../Components/navbar"
import { CREDENTIALS, URL } from "../Data/constants"
import loginPage from "../Pages/loginPage"
import productsPage from "../Pages/productsPage"


fixture ('Sorting Products test')
    .page`${URL.LOGIN_PAGE}`
    .beforeEach(async t => {
        await t.maximizeWindow()
        await t.expect(loginPage.logoBotColumn.exists).ok()
    })

test.meta({type: 'ProductsRelated'})('As a user, I should be able to sort Products from low to high', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.VALID_USERNAME, CREDENTIALS.VALID_CREDENTIALS.VALID_PASSWORD)
    await t.expect(navbar.appLogo.exists).ok()
    await productsPage.sortProductsLowHigh()
})