const { naukriLoginPage } = require('./naukriLoginPage');
const { updateProfilePage } = require('./updateProfilePage');
const { searchPage } = require('./searchPage');
const { jobsPage } = require('./jobsPage');

class pomanager {
    constructor(page, context) {
        this.page = page;
        this.context = context;
    }

    getLoginPage() {
        return new naukriLoginPage(this.page);
    }

    getupdProfilePage() {
        return new updateProfilePage(this.page);
    }

    getSearchPage() {
        return new searchPage(this.page);
    }

    getJobsPage() {
        return new jobsPage(this.page, this.context);
    }
}

module.exports = { pomanager }