const baseConfig = require('./wdio.base.conf.js')

// have main config file as default but overwrite environment specific information
baseConfig.config.capabilities.push(
    {
        "platformName": "Android",
        "appium:deviceName": "My local Android device",
        "appium:automationName": "UiAutomator2",
        // Fill in the following three capabilities based on your local device:
        // "appium:app": "/path/to/my/local/app.apk",
        // "appium:udid": "my-device-udid",
        // "appium:platformVersion": "14"
    }
)

// add an additional reporter
baseConfig.config.reporters.push(
    ['junit', {
        outputDir: `${__dirname}/../../reports`
        }
    ]
)

exports.config = baseConfig.config