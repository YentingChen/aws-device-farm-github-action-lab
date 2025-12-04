const assert = require('assert');
const Page = require('./page');

const WEB_CONTEXT_REGEX = "^WEB.*$";
const WEB_CHROME_CONTEXT = "WEBVIEW_chrome";
const NATIVE_CONTEXT_REGEX = "NATIVE_APP";
const SWITCH_CONTEXT_SLEEP_MILLIS = 3000;
const SWITCH_CONTEXT_RETRIES = 3;
const SLEEP_DELAY = 1000;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WebViewPage extends Page {

    /**
     * overwrite specific options to adapt it to page object
     */
    async open() {
        return super.open("Web");
    }

    async switchContext(regex) {
        let context;
        for (let retries = 0; context === undefined && retries < SWITCH_CONTEXT_RETRIES; retries++) {
            await this.sleep(SWITCH_CONTEXT_SLEEP_MILLIS);
            const contexts = await driver.getContexts();
            context = contexts.find(context => new RegExp(regex).test(context) && context != WEB_CHROME_CONTEXT);
        }
        assert(context !== undefined);
        await driver.switchContext(context);
        await this.sleep(SLEEP_DELAY);
    }

    async switchToWebContext() {
        await this.switchContext(WEB_CONTEXT_REGEX);
    }

    async switchToNativeContext() {
        await this.switchContext(NATIVE_CONTEXT_REGEX);
    }

    async launchUrl(url) {
        await this.switchToWebContext();
        await driver.url(url)
    }
}

module.exports = new WebViewPage();