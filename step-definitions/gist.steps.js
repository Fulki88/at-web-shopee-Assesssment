import { When, Then } from 'cucumber';
import { client } from 'nightwatch-api';
import * as gistPage from '../pageobjects/gist.page';

When(/^the user go to gist website and create public gist$/, async () => {
  await client.url('http://gits.github.com');
  await gistPage.createGist();
});

Then(/^the user verify the created gist$/, async () => {
  await gistPage.verifyCreate();
});

Then(/^the user logout$/, async () => {
  await gistPage.logout();
});

When(/^the user go to gist website and edit first gist$/, async () => {
  await client.url('http://gits.github.com');
  await gistPage.toMyGist();
  await gistPage.chooseFirstGist();
  await gistPage.editGist();
});

Then(/^the user verify the edited gist$/, async () => {
  await gistPage.verifyEdit();
});

When(/^the user go to gist website and delete first gist$/, async () => {
  await client.url('http://gits.github.com');
  await gistPage.toMyGist();
  await gistPage.chooseFirstGist();
  await gistPage.deleteGist();
});

Then(/^the user verify the deleted gist$/, async () => {
  await gistPage.verifyDelete();
});

When(/^the user go to gist website and see my gist list$/, async () => {
  await client.url('http://gits.github.com');
  await gistPage.toMyGist();
});

Then(/^the user verify my gist list$/, async () => {
  await gistPage.verifyList();
});
