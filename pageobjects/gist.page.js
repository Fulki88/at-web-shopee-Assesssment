import * as base from '../common/base-function-xpath';

const element = {
  gistDesc: '//input[@name="gist[description]"]',
  gistCode: '//pre[@class=" CodeMirror-line "]',
  changeTypeGist: '//summary[@class="btn btn-primary BtnGroup-item select-menu-button float-none"]',
  publicGist: '//span[contains(.,"Public gists are visible to everyone.")]/..',
  createButton: '//button[@class="btn btn-primary BtnGroup-item hx_create-pr-button js-sync-select-menu-button"]',
  afterCreateDesc: '//div[@class="repository-content gist-content"]/div[1]/div[@itemprop="about"]',
  afterCreateCode: '//td[@class="blob-code blob-code-inner js-file-line"]',
  profileDropDown: '//summary[@class="Header-link name"]',
  signOutButton: '//button[@class="dropdown-item dropdown-signout"]',
  signOutConfirm: '//input[@class="btn btn-block f4 py-3 mt-5"]',
  myGistButton: '//a[.="Your gists"]',
  firstGist: '//div[@class="gist-snippet"][1]//strong[@class="css-truncate-target"]',
  editGistButton: '//a[contains(.,"Edit")]',
  updateButton: '//button[@class="btn btn-primary"]',
  deleteButton: '//button[@class="btn btn-sm btn-danger"]',
  listGits: '//div[@class="UnderlineNav-body"]/a',
};

let text;

export const verifyPage = async () => {
  await base.waitElementVisible(element.gistText);
};

export const createGist = async () => {
  await base.setValueElement(element.gistDesc, 'Fulki - Create Desc Gist');
  await base.setValueElement(element.gistCode, 'Fulki - Create Code Gist');
  await base.clickElement(element.changeTypeGist);
  await base.clickElement(element.publicGist);
  await base.clickElement(element.createButton);
};

export const verifyCreate = async () => {
  await base.assertContainsText(element.afterCreateDesc, 'Fulki - Create Desc Gist');
  await base.assertContainsText(element.afterCreateCode, 'Fulki - Create Code Gist');
};

export const logout = async () => {
  await base.clickElement(element.profileDropDown);
  await base.clickElement(element.signOutButton);
  await base.clickElement(element.signOutConfirm);
};

export const toMyGist = async () => {
  await base.clickElement(element.profileDropDown);
  await base.clickElement(element.myGistButton);
};

export const chooseFirstGist = async () => {
  text = await base.getStringText(element.firstGist);
  await base.clickElement(element.firstGist);
};

export const editGist = async () => {
  await base.clickElement(element.editGistButton);
  await base.setValueElement(element.gistDesc, 'Fulki - Edit Desc Gist');
  await base.setValueElement(element.gistCode, 'Fulki - Edit Code Gist');
  await base.clickElement(element.updateButton);
};

export const verifyEdit = async () => {
  await base.assertContainsText(element.afterCreateDesc, 'Fulki - Edit Desc Gist');
  await base.assertContainsText(element.afterCreateCode, 'Fulki - Edit Code Gist');
};

export const deleteGist = async () => {
  await base.clickElement(element.deleteButton);
  await base.clickOkAlert();
};

export const verifyDelete = async () => {
  await base.expectElementNotEqualText(element.firstGist, text);
};

export const verifyList = async () => {
  await base.waitElementVisible(element.listGits);
};
