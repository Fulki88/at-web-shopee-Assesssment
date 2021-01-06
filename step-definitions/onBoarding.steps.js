import { Given, When } from 'cucumber';
import { client } from 'nightwatch-api';
import * as onBoardingPage from '../pageobjects/onBoarding.page';

Given(/^a web browser is on the github.com page$/, async () => {
  await client.url('http://github.com');
  await onBoardingPage.verifyPage();
});

When(/^the user login with "([^"]*)" as username and "([^"]*)" as password$/, async (username, password) => {
  await onBoardingPage.clickSignIn();
  await onBoardingPage.signIn(username, password);
  await onBoardingPage.verifyAfterLogin();
});
