import { test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const sharedStatePath = path.join(process.cwd(), 'test-results', 'global-storage-state.json');

test('global setup authenticates and saves browser state', async ({ page }, testInfo) => {
  await page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.locator("input[placeholder='email@example.com']").fill('jimmydoe@gmail.com');
  await page.locator("input[placeholder='enter your passsword']").fill('Santorini@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL(/dashboard/, { timeout: 120000 });

  await page.getByRole('button', { name: /sign out/i }).click();
  await page.waitForURL(/auth\/login/, { timeout: 120000 });

  fs.mkdirSync(path.dirname(sharedStatePath), { recursive: true });
  await page.context().storageState({ path: sharedStatePath });

  await testInfo.attach('saved-storage-state', {
    path: sharedStatePath,
    contentType: 'application/json',
  });
});
