/* jshint node: true */

var os = require('os');
var ifaces = os.networkInterfaces();

var addresses = [];
for (var dev in ifaces) {
    ifaces[dev].forEach(function (details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
            addresses.push(details.address);
        }
    });
}


module.exports = function (environment) {
    var platform = 'android';
    var ENV = {
        modulePrefix: 'ember-cordova-test',
        environment: environment,
        baseURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },

        cordova: {
            rebuildOnChange: true,
            emulate: true,
            platform: platform,
            emberUrl: 'http://' + addresses[0] + ':4200',
            liveReload: {
                enabled: true,
                platform: platform
            }
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'auto';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};
