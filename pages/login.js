exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.username_textbox = page.locator('[data-test="username"]')
        this.password_textbox = page.locator('[data-test="password"]')
        this.login_button = page.locator('[data-test="login-button"]')
        //errorPage = page.locator('[data-test="error"]')

    }
    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/')
        console.log('Go to the website')
    }
    async login(username, password) {
        await this.username_textbox.fill(username)
        console.log('Fill the username')
        await this.password_textbox.fill(password)
        console.log('Fill the password')
        await this.login_button.click()
        console.log('Click the login button')
    }
}