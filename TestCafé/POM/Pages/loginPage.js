import {Selector, t} from 'testcafe'

class LoginPage {
    constructor() {
        //Login fields and button
        this.usernameLoginInput = Selector('#user-name')
        this.passwordLoginInput = Selector('#password')
        this.sumbitLoginButton = Selector('#login-button')
        //Warning messages and Validation
        this.errorLoginMessage = Selector('#login_button_container > div > form > div.error-message-container.error > h3')
        this.logoBotColumn = Selector('div[class="bot_column"]')
    }

    async submitLoginForm(username, password){

        if(username != ""){
            await t.typeText(this.usernameLoginInput, username, { paste:true })
        }
        if(password != ""){
            await t.typeText(this.passwordLoginInput, password, { paste:true })
        }
        await t.click(this.sumbitLoginButton)
    }
}
export default new LoginPage()