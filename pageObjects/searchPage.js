const tdata = require('../utils/testdata.json');

class searchPage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('input[placeholder="Enter keyword / designation / companies"]');
        this.searchBtn = page.locator("//button[contains(@class,'nI-gNb-sb__icon-wrapper')]");
        this.remoteCheckbox = page.locator("//span[text()='Remote']");
        this.hybridCheckbox = page.locator("//span[text()='Hybrid']");
        this.officeCheckbox = page.locator("//span[text()='Temp. WFH']");
    }

    async jobSearch() {
        for (const keyword of tdata.jobKeywords) {
            console.log(`Searching jobs for ${keyword}`);
            await this.page.goto("https://www.naukri.com/mnjuser/homepage");
            await this.searchBox.fill(keyword);
            await this.searchBtn.click();
            // await this.page.waitForTimeout(4000);
        }
    }

    async applyWorkModeFltr() {
        try {
            if(await this.remoteCheckbox.isVisible()) {
                await this.remoteCheckbox.click();
            }
            if(await this.hybridCheckbox.isVisible()) {
                await this.hybridCheckbox.click();
            }
            // if(await this.officeCheckbox.isVisible()) {
            //     await this.officeCheckbox.click();
            // }
        } catch(error) {
            console.log("Work mode filter issue");
        }
    }
}

module.exports = { searchPage };