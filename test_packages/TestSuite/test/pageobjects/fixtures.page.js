const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FixturesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get bluetoothToggle () {
        return $("id=com.amazonaws.devicefarm.android.referenceapp:id/bluetooth");
    }
    get gpsToggle () {
        return $("id=com.amazonaws.devicefarm.android.referenceapp:id/gps");
    }
    get nfcToggle () {
        return $("id=com.amazonaws.devicefarm.android.referenceapp:id/nfc");
    }
    get wifiToggle () {
        return $("id=com.amazonaws.devicefarm.android.referenceapp:id/wifi");
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        return super.open("Fixtures");
    }
}

module.exports = new FixturesPage();