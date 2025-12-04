const LoginPage = require('../pageobjects/login.page')
const AlertsPage = require('../pageobjects/alerts.page')
const FixturesPage = require('../pageobjects/fixtures.page')
const NativeComponentsPage = require('../pageobjects/nativecomponents.page')

describe('Login tests', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('admin', 'password')

        await expect(LoginPage.message).toHaveText('You are logged on as admin')
    });

    it('shouldnt login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('admin', 'passwrod')

        await expect(LoginPage.message).toHaveText('You gave me the wrong username and password')
    });

});

describe('Alerts tests', () => {
    it('should prompt with alert message', async () => {
        await AlertsPage.open()

        await AlertsPage.alertButton.click()

        await expect(AlertsPage.alertMessage).toHaveText("This is the alert message")

        await AlertsPage.alertAcceptance.click()
    });
});

describe('Fixtures tests', () => {
    it('should have fixtures with proper values', async () => {
        await FixturesPage.open()
        const possible_toggle_values = ['true', 'false'];
        for await (const element of 
            [FixturesPage.bluetoothToggle, FixturesPage.gpsToggle,
            FixturesPage.nfcToggle, FixturesPage.wifiToggle]) {
            expect(possible_toggle_values).toContain(await element.getText())
        }
    });
});

describe('Native Components tests', () => {
    it('should show the proper camera component', async () => {
        await NativeComponentsPage.open()
        await NativeComponentsPage.swipeToCameraElement()
        await expect(NativeComponentsPage.cameraElement).toBeDisplayed()

    });
});