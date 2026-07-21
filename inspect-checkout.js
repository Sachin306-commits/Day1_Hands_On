const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator("input[placeholder='email@example.com']").fill('jimmydoe@gmail.com');
  await page.locator("input[placeholder='enter your passsword']").fill('Santorini@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL(/dashboard/);
  await page.locator('.card').filter({ hasText: 'ADIDAS ORIGINAL' }).first().getByRole('button', { name: /add to cart/i }).click();
  await page.getByRole('button', { name: /cart/i }).first().click();
  await page.getByRole('button', { name: /checkout/i }).click();
  await page.waitForTimeout(4000);
  await page.locator('input[placeholder="Select Country"]').fill('India');
  await page.waitForTimeout(3000);
  const html = await page.locator('body').innerHTML();
  fs.writeFileSync('checkout-dom.html', html);
  console.log('Saved checkout-dom.html');
  await browser.close();
})().catch((err) => { console.error(err); process.exit(1); });
