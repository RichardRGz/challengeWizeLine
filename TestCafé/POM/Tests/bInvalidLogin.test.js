import { CREDENTIALS, URL } from "../Data/constants"
import loginPage from "../Pages/loginPage"


fixture ('Login with invalid credentials, empty fields and locked user test')
    .page`${URL.LOGIN_PAGE}`
    .beforeEach(async t => {
        await t.maximizeWindow()
        await t.expect(loginPage.logoBotColumn.exists).ok()
    })

test.meta({type: 'LoginRelated'})('As a user, I should not be able to login with invalid username', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_CREDENTIALS.INVALID_USERNAME, CREDENTIALS.VALID_CREDENTIALS.VALID_PASSWORD)
    await t.expect(loginPage.errorLoginMessage.withExactText('Epic sadface: Username and password do not match any user in this service').exists).ok()
})

test.meta({type: 'LoginRelated'})('As a user, I should not be able to login with invalid password', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.VALID_USERNAME, CREDENTIALS.INVALID_CREDENTIALS.INVALID_PASSWORD)
    await t.expect(loginPage.errorLoginMessage.withExactText('Epic sadface: Username and password do not match any user in this service').exists).ok()
})

test.meta({type: 'LoginRelated'})('As a user, I should not be able to login with a locked out user', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_CREDENTIALS.LOCKED_OUT_USERNAME, CREDENTIALS.VALID_CREDENTIALS.VALID_PASSWORD)
    await t.expect(loginPage.errorLoginMessage.withExactText('Epic sadface: Sorry, this user has been locked out.').exists).ok()
})

test.meta({type: 'LoginRelated'})('As a user, I should not be able to login with an empty username', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_CREDENTIALS.EMPTY_FIELD, CREDENTIALS.VALID_CREDENTIALS.VALID_PASSWORD)
    await t.expect(loginPage.errorLoginMessage.withExactText('Epic sadface: Username is required').exists).ok()
})

test.meta({type: 'LoginRelated'})('As a user, I should not be able to login with an empty password', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.VALID_USERNAME, CREDENTIALS.INVALID_CREDENTIALS.EMPTY_FIELD)
    await t.expect(loginPage.errorLoginMessage.withText('Epic sadface: Password is required').exists).ok()
})

test.meta({type: 'LoginRelated'})('As a user, I should not be able to login with an empty username and password', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_CREDENTIALS.EMPTY_FIELD, CREDENTIALS.INVALID_CREDENTIALS.EMPTY_FIELD)
    await t.expect(loginPage.errorLoginMessage.withExactText('Epic sadface: Username is required').exists).ok()
})
