const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get alertButton () {
        return $("id=com.amazonaws.devicefarm.android.referenceapp:id/notifications_alert_button");
    }
    get alertMessage () {
        return $("id=android:id/message");
    }
    get alertAcceptance () {
        return $("id=android:id/button1");
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        return super.open("Alerts");
    }
}

module.exports = new AlertsPage();