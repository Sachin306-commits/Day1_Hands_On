import { chromium, FullConfig } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.locator("input[placeholder='email@example.com']").fill('jimmydoe@gmail.com');
  await page.locator("input[placeholder='enter your passsword']").fill('Santorini@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL(/dashboard/, { timeout: 120000 });

  const outputDir = path.join(config.projects[0].outputDir || 'test-results');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'global-setup-state.txt'), 'Authenticated session prepared for E2E run.');

  await page.context().storageState({ path: path.join(outputDir, 'storage-state.json') });
  await browser.close();
}

export default globalSetup;
