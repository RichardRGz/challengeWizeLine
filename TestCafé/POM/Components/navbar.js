import {Selector, t} from 'testcafe'

class Navbar{
    constructor (){
        this.appLogo = Selector('[class="app_logo"]')
        this.burgerMenu = Selector('#react-burger-menu-btn')
        this.signOutOption = Selector('#logout_sidebar_link')

    }
    
    async logOutAction (){
        await t
            .click(this.burgerMenu)
            .click(this.signOutOption)
    }
    
}
export default new Navbar()