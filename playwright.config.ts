import { defineConfig } from '@playwright/test';
import * as path from 'path';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 2 * 60 * 1000,
  expect: {
    timeout: 20 * 1000,
  },
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'https://rahulshettyacademy.com/client',
    headless: true,
    viewport: { width: 1440, height: 900 },
    trace: 'on-first-retry',
  },
  retries: 1,
  projects: [
    {
      name: 'setup',
      testMatch: '**/global.setup.spec.ts',
      use: {
        trace: 'on-first-retry',
      },
    },
    {
      name: 'e2e',
      testMatch: '**/*.spec.ts',
      testIgnore: ['**/global.setup.spec.ts', '**/global.teardown.spec.ts'],
      dependencies: ['setup'],
      use: {
        storageState: path.join(process.cwd(), 'test-results', 'global-storage-state.json'),
        trace: 'on-first-retry',
      },
    },
    {
      name: 'teardown',
      testMatch: '**/global.teardown.spec.ts',
      dependencies: ['e2e'],
      use: {
        trace: 'on-first-retry',
      },
    },
  ],
});
