class waitUtil {

    static async hardWait(page, time) {
        await page.waitForTimeout(time);
    }
}

module.exports = { waitUtil };