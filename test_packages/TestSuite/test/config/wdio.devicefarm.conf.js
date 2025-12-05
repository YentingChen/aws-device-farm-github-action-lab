const baseConfig = require('./wdio.base.conf.js');

// have main config file as default but overwrite environment specific information
baseConfig.config.capabilities.push({
    "platformName": "Android"
});

// add an additional reporter
baseConfig.config.reporters.push(
    ['junit', {
        outputDir: process.env.DEVICEFARM_LOG_DIR + '/reports'
    }]
);

exports.config = baseConfig.config;