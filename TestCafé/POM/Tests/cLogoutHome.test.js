import navbar from "../Components/navbar"
import { CREDENTIALS, URL } from "../Data/constants"
import loginPage from "../Pages/loginPage"


fixture ('Logout test')
    .page`${URL.LOGIN_PAGE}`
    .beforeEach(async t => {
        await t.maximizeWindow()
        await t.expect(loginPage.logoBotColumn.exists).ok()
    })

test.meta({type: 'LoginRelated'})('As a user, I should be able to logout', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.VALID_USERNAME, CREDENTIALS.VALID_CREDENTIALS.VALID_PASSWORD)
    await t.expect(navbar.appLogo.exists).ok()
    await navbar.logOutAction()
    await t.expect(loginPage.logoBotColumn.exists).ok()

})