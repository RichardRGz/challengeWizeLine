import navbar from "../Components/navbar"
import { CREDENTIALS, URL } from "../Data/constants"
import loginPage from "../Pages/loginPage"


fixture ('Login test')
    .page`${URL.LOGIN_PAGE}`
    .beforeEach(async t => {
        await t.maximizeWindow()
        t.expect(loginPage.logoBotColumn.exists).ok
    })

test.meta({type: 'LoginRelated'})('As a user, I should be able to login', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.VALID_USERNAME, CREDENTIALS.VALID_CREDENTIALS.VALID_PASSWORD)
    t.expect(navbar.appLogo.exists).ok
})