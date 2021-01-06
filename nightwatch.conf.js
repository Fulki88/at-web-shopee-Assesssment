const chromedriver = require('chromedriver');
// const geckodriver = require('geckodriver');

module.exports = {
  silent: !process.env.NIGHTWATCH_VERBOSE,
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        port: 4444,
      },
      screenshots: {
        enabled: true,
        path: 'screenshots',
      },
    },
    chromeHeadless: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4444'],
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          args: ['--headless'],
        },
      },
    },
    chrome: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4444'],
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
        },
      },
    },
  },
};
