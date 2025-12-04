# WebdriverIO Sample Tests for AWS Device Farm Android App
This is a collection of example Appium NodeJS tests written for the AWS Device Farm Android sample app using WebdriverIO. Please use these tests as a reference for your own AWS Device Farm NodeJS tests.
These tests were tested with AWS Device Farm Android sample app on Device Farm with Appium 1.22.2.

### To build the tests for AWS Device Farm Testing
1. Install [Node (version 16.7 or greater)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Run ```npm install``` to download the dependencies based on package.json
3. Run ```npm install -g npm-bundle``` to get npm-bundle package
4. Run ```npm-bundle```
5. Run ```zip MySampleAndroidTests.zip *.tgz```
6. Navigate to the Device Farm console, and schedule an automation run using these tests. Select "Appium NodeJS as your test type, and upload your zip file (MyTests.zip)
7. Use custom environment option and replace `- node YOUR_TEST_FILENAME.js` with `- npm install && npm run wdio-device-farm` in yaml file, as well as change the `nvm` version to use 16 (e.g. `nvm install 16`). 

### To run tests locally with AWS Device Farm Android sample app
1. Install [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Run ```npm install -g appium``` to get Appium and you can specify version like this ```npm install -g appium@1.22.2```
3. Run ```npm install``` to download the dependencies based on package.json
4. Launch Android emulator
5. Launch Appium server locally with ```appium --log-timestamp --allow-insecure chromedriver_autodownload --pre-launch --app-activity .Activities.MainActivity --platform-name Android --app (Path to AWS Device Farm Android App) --relaxed-security```
6. If you want to use harness devices for testing, use the following command to start the appium server. Here we are assuming that we use port 8200 in harness open stf.
```appium --log-timestamp --allow-insecure chromedriver_autodownload --pre-launch --app-activity .Activities.MainActivity --platform-name Android --app (Path to the app file) --relaxed-security --default-capabilities '{"systemPort": 8200}'```
7. Now you can run tests from your IDE