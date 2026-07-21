import { test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const sharedStatePath = path.join(process.cwd(), 'test-results', 'global-storage-state.json');

test('global teardown removes temporary browser state', async ({}, testInfo) => {
  if (fs.existsSync(sharedStatePath)) {
    fs.unlinkSync(sharedStatePath);
  }

  await testInfo.attach('global-teardown-cleanup', {
    body: 'Removed temporary browser state after the E2E run.',
    contentType: 'text/plain',
  });
});
