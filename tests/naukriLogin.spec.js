
const { test } = require('@playwright/test');
const tdata = require('../utils/testdata.json');
const { beforeEach } = require('node:test');
const { pomanager} = require('../pageObjects/pomanager')
const {customtest} = require('../fixtures/test-base')
// const { searchPage } = require('../pageObjects/searchPage')
// const {jobsPage } = require('../pageObjects/jobsPage')
// const {updateProfilePage}=require('../pageObjects/updateProfilePage')


test.beforeEach("login", async ({ page}) =>{

    const PO=new pomanager (page);
    const login= PO.getLoginPage();
    // const login= pomanager.getLoginPage();
    //const login = new naukri LoginPage(page);
    await login.hitURL();
    await login.validLogin();
})

// test('Title validation', async ({ page }) => {

//     console.log(await page.title());
// })


// test('Updating the Resume Headlines', async ({page})=> {
//     const PO=new pomanager (page);
//     const updProfilePage= PO.getupdProfilePage();
//     //const updProfilePage = new updateProfilePage (page);
//     await updProfilePage.updateResumeheadline();
// })

 test('Search a job', async ({page, context}) => {
     const PO=new pomanager (page, context);
     const search= PO.getSearchPage();
//     // const search=new searchPage (page);
     const job= PO.getJobsPage()
//     // const job=new jobsPage (page, context);
     await search.jobSearch();
    console.log("the old count of jobs--"+await page.locator(".styles_count-string_DlPaZ").innerText())
    // await search.applyLocationFltr Noida();
    //await search.applyLocationFltrKolkata();
    await search.applyWorkModeFltr()
    console.log("the new count of jobs"+await page.locator(".styles_count-string_DlPaZ").innerText())
    await job.jobOpening();
    console.log("job opened in new tab")
    // await page.waitForTimeout(5000);
})

