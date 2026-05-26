const tdata = require('../utils/testdata.json');

class updateProfilePage {

    constructor(page) {
        this.page = page;
        this.viewProfile = page.getByRole('link', { name: 'View profile' });
        this.resumeHeadlineEdit = page.locator('#lazyResumeHead').getByText('editOneTheme');
        this.resumeHeadlineTextbox = page.getByRole('textbox', { name: 'Minimum 5 words. Sample' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });
    }

    async updateResumeheadline() {
        await this.viewProfile.click();
        await this.resumeHeadlineEdit.click();
        await this.resumeHeadlineTextbox.clear();
        await this.resumeHeadlineTextbox.fill(tdata.resumeHeadline);
        await this.saveBtn.click();
        console.log("Resume headline updated successfully");
    }
}

module.exports = { updateProfilePage }