/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub section of the app
    * @param categoryName name of the section (e.g. "Login Page")
    */
    async open(categoryName) {
        await $('~ReferenceApp').isExisting();
        await $('~ReferenceApp').click();
        await $('id=com.amazonaws.devicefarm.android.referenceapp:id/navigation_drawer_fragment').isExisting();
        await driver.execute("mobile: scroll", {
            elementId: await $('android=new UiSelector().resourceId("com.amazonaws.devicefarm.android.referenceapp:id/drawerList")').elementId,
            selector: `new UiSelector().text("${categoryName}")`,
            strategy: '-android uiautomator',
            maxSwipes: 3
        });
        await $(`android=new UiSelector().text("${categoryName}")`).click();
        
        driver.setImplicitTimeout(1000);
        const max_wait_time = Date.now() + 30000;
        while (Date.now() < max_wait_time &&
            await $('id=com.amazonaws.devicefarm.android.referenceapp:id/navigation_drawer_fragment').isExisting()) {
            await this.sleep(500);
        }
        await this.sleep(1000);
        driver.setImplicitTimeout(10000);
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
