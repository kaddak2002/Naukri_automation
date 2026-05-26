const tdata = require('../utils/testdata.json');

class naukriLoginPage {
    constructor(page) {
        this.page = page;
        this.loginBtn = page.locator("//a[text()='Login']");
        this.username = page.locator("input[placeholder='Enter your active Email ID / Username']");
        this.password = page.locator("input[placeholder='Enter your password']");
        this.submitBtn = page.locator("button[type='submit']");
    }

    async hitURL() {
        await this.page.goto(tdata.url);
    }

    async validLogin() {
        await this.loginBtn.click();
        await this.username.fill(tdata.username);
        await this.password.fill(tdata.password);
        await this.submitBtn.click();
        await this.page.waitForTimeout(5000);
    }
}

module.exports = { naukriLoginPage };