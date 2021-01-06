/* eslint-disable no-return-await */
/* eslint-disable no-undef */

const { client } = require('nightwatch-api');

const timeOut = 7000;

export const pause = async (time) => await client.pause(time);

// wait until element is visible
export const waitElementVisible = async (xpathQuery) => {
  await client.useXpath();
  await client.waitForElementPresent(xpathQuery, timeOut);
  await client.waitForElementVisible(xpathQuery, timeOut);
};

// wait until element visible
export const waitUntilElementVisible = async (xpathQuery) => {
  await client.waitForElementVisible({
    locateStrategy: 'xpath',
    selector: xpathQuery,
  }, timeOut);
};

// scroll to element
export const scrollToElement = async (xpathQuery) => {
  await waitElementVisible(xpathQuery);
  await client.moveToElement(xpathQuery, 0, 0);
};

// scroll to bottom of page
export const scrollToBottom = async () => {
  client.execute('window.scrollTo(0,document.body.scrollHeight);');
};

// click element wait for visible
export const clickElement = async (xpathQuery) => {
  await pause(500);
  await waitElementVisible(xpathQuery);
  await client.click(xpathQuery);
};

// click element wait for visible
export const doubleClickMouse = async (xpathQuery) => {
  await pause(500);
  await waitElementVisible(xpathQuery);
  await client.moveToElement(xpathQuery, 0, 0);
  await client.doubleClick();
};

// expect to be visible
export const expectVisible = async (xpathQuery) => {
  await waitElementVisible(xpathQuery);
  return client.expect.element(xpathQuery).to.be.visible;
};

// set value to element
export const setValueElement = async (xpathQuery, value) => {
  await waitElementVisible(xpathQuery);
  await clickElement(xpathQuery);
  await client.clearValue(xpathQuery);
  await client.setValue(xpathQuery, value);
};

// get value name
export const expectElementEqualValue = async (xpathQuery, expectedValue) => {
  await waitElementVisible(xpathQuery);
  return client.expect.element(xpathQuery).to.have.value.that.equals(expectedValue);
};

// get string text
export const getStringText = async (xpathQuery) => {
  let text;
  await waitElementVisible(xpathQuery);
  await client.getText(xpathQuery, (result) => {
    text = result.value;
  });
  return text;
};

// check if the given element contains the specific text
export const assertContainsText = async (xpathQuery, expectedText) => {
  await scrollToElement(xpathQuery);
  await client.getText(xpathQuery, (result) => {
    client.assert.ok(result.value.indexOf(expectedText) !== 1, `Testing if element <${xpathQuery}> contains text that matches "${expectedText}"`);
  });
};

export const expectElementNotEqualText = async (xpathQuery, expectedText) => {
  await waitElementVisible(xpathQuery);
  return client.expect.element(xpathQuery).text.to.not.equal(expectedText);
};

export const getElementsByXPath = async (xpath) => {
  const results = [];
  let query;
  await client.execute((xpathQuery) => {
    query = document.evaluate(xpathQuery, document,
      null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; i += 1) {
      results.push(query.snapshotItem(i));
    }
  }, [xpath]);
  return results;
};

export const clickOkAlert = async () => {
  await client.acceptAlert();
};
