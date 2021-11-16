const puppeteer = require('puppeteer');

const correiosSearch = {
  pageAdd: 'https://buscacepinter.correios.com.br/app/endereco/index.php',
  typeInput: '#endereco',
  clickInput: '#btn_pesquisar',
  waitElem: 'td',
  pgRoutePrint: '#resultado-DNEC tbody tr td'
}

const ceps = [
'72593-114', '91370-110', '64017-280', '28994-816', '67133-745', 
'68447-000,', '59076-050', '65065-730', '21765-250', '72910-990'
]

async function getAdresses(page, selector) {
  const adress = await page.$$eval(selector, adds => adds.map(add => add.innerText))
  console.log(adress)
  return adress
}

async function cepFinder(pageData, cep) {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(pageData.pageAdd);
  await page.type(pageData.typeInput, cep)
  await page.click(pageData.clickInput)
  await page.waitForSelector(pageData.waitElem)
  await getAdresses(page, pageData.pgRoutePrint)
  await browser.close();
}

ceps.forEach(e => {
  cepFinder(correiosSearch, e)
});
