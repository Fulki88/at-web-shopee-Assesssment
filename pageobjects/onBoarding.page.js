import * as base from '../common/base-function-xpath';

const element = {
  githubLogo: '//a[@href="https://github.com/"]',
  signInText: '//a[@href="/login"]',
  usernameField: '//input[@id="login_field"]',
  passwordField: '//input[@id="password"]',
  signInButon: '//input[@name="commit"]',
  afterLogin: '//details[@class="details-overlay details-reset js-feature-preview-indicator-container"]//span[@class="dropdown-caret"]',
};

export const verifyPage = async () => {
  await base.waitElementVisible(element.githubLogo);
  await base.waitElementVisible(element.signInText);
};

export const clickSignIn = async () => {
  await base.clickElement(element.signInText);
};

export const signIn = async (email, password) => {
  await base.setValueElement(element.usernameField, email);
  await base.setValueElement(element.passwordField, password);
  await base.clickElement(element.signInButon);
};

export const verifyAfterLogin = async () => {
  await base.waitElementVisible(element.afterLogin);
};
