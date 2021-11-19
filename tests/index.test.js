/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require('puppeteer');
const {correiosSearch: cs} = require('../util/searchInfo')
describe('testing Correios webPage', () => {
  beforeAll(async () => {
    await page.goto(cs.pageAdd);
  });

  it('the page connects', async () => {
    await expect(page).resolves;
  });

  it(`the CEP input id is ${cs.typeInput}`, async () => {
    await page.type(cs.typeInput, '72593-114');
    await expect(page).resolves;
  });

  it(`the search button id is ${cs.clickInput}`, async () => {
    await page.click(cs.clickInput);
    await expect(page).resolves;
  });

  it('when passing the correct CEP, the page shows a table with the CEP info', async () => {
    await page.goto(cs.pageAdd);
    await page.type(cs.typeInput, '72593-114');
    await page.click(cs.clickInput);
    await page.waitForSelector(cs.waitElem)
    await expect(page).resolves
  })
});
