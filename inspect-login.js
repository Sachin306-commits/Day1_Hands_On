const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('URL', page.url());
  console.log('input count', await page.locator('input').count());
  console.log('placeholder inputs', await page.locator('input').evaluateAll((els) => els.map((el) => ({
    placeholder: el.getAttribute('placeholder'),
    name: el.getAttribute('name'),
    id: el.getAttribute('id'),
    type: el.getAttribute('type')
  }))));
  console.log('body text snippet', (await page.locator('body').textContent()).slice(0, 6000));
  await browser.close();
})().catch((err) => { console.error(err); process.exit(1); });
