const {
  setDefaultTimeout, After, AfterAll, Before, BeforeAll,
} = require('cucumber');

const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
} = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver({ env: process.env.NIGHTWATCH_ENV || 'chromeHeadless' });
});

Before(async () => {
  await createSession();
});

AfterAll(async () => {
  await stopWebDriver();
});

After(async () => {
  await closeSession();
});
