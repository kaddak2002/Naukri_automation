class drpDwnUtil {

    static async selectByText(locator, value) {

        await locator.selectOption({
            label : value
        });
    }
}

module.exports = { drpDwnUtil };