const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('1. login-page', page.url());
  await page.locator("input[placeholder='email@example.com']").fill('jimmydoe@gmail.com');
  await page.locator("input[placeholder='enter your passsword']").fill('Santorini@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL(/dashboard/, { timeout: 120000 });
  console.log('2. dashboard', page.url());
  await page.locator('.card').filter({ hasText: 'ADIDAS ORIGINAL' }).first().getByRole('button', { name: /add to cart/i }).click();
  await page.getByRole('button', { name: /cart/i }).first().click();
  console.log('3. cart', page.url());
  await page.getByRole('button', { name: /checkout/i }).click();
  await page.locator('input[placeholder="Select Country"]').fill('India');
  await page.locator('button').filter({ hasText: /india/i }).first().click({ timeout: 10000 }).catch(() => {});
  await page.getByRole('button', { name: /place order/i }).click({ timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(5000);
  console.log('4. after-order', page.url());
  console.log('body contains order?', (await page.locator('body').textContent()).includes('Order') || (await page.locator('body').textContent()).includes('order'));
  console.log('body snippet', (await page.locator('body').textContent()).slice(0, 4000));
  await page.goto('https://rahulshettyacademy.com/client/#/dashboard/myorders', { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('5. orders', page.url());
  console.log('orders snippet', (await page.locator('body').textContent()).slice(0, 4000));
  await browser.close();
})().catch((err) => { console.error(err); process.exit(1); });
