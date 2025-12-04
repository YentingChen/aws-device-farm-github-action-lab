const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("~Username Input Field");
    }

    get inputPassword () {
        return $("~Password Input Field");
    }

    get btnSubmit () {
        return $("~Login Button");
    }

    get message () {
        return $("~Alt Message");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        return super.open("Login Page");
    }
}

module.exports = new LoginPage();
