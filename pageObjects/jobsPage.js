class jobsPage {

    constructor(page, context) {
        this.page = page;
        this.context = context;
    }

    async jobOpening() {
        const jobs = this.page.locator("//a[contains(@class,'title')]");
        const count = await jobs.count();
        console.log("Total jobs found = " + count);
        for(let i=0; i<count; i++) {
            const [newPage] = await Promise.all([
                this.context.waitForEvent('page'),
                jobs.nth(i).click()
            ]);
            await newPage.waitForLoadState();
            try {
                // const applyBtn = newPage.locator("//button[contains(text(),'Apply')]");
                // const alreadyApplied = newPage.locator("//*[contains(text(),'Already Applied')]");
                if(await alreadyApplied.count() > 0) {
                    console.log("Already Applied - Skipping");
                    await newPage.close();
                    continue;
                }
                if(await applyBtn.count() > 0) {
                    await applyBtn.click();
                    console.log("Applied Successfully");
                }
                else {
                    console.log("External company portal detected");
                    console.log("Apply manually");
                    await newPage.pause();
                }
            }
            catch(error) {
                console.log("Unable to apply");
            }
            await newPage.waitForTimeout(3000);
            await newPage.close();
        }
    }
}

module.exports = { jobsPage };