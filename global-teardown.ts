import { FullConfig } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

async function globalTeardown(config: FullConfig) {
  const outputDir = path.join(config.projects[0].outputDir || 'test-results');
  const stateFile = path.join(outputDir, 'global-setup-state.txt');

  if (fs.existsSync(stateFile)) {
    fs.unlinkSync(stateFile);
  }

  const storageState = path.join(outputDir, 'storage-state.json');
  if (fs.existsSync(storageState)) {
    fs.unlinkSync(storageState);
  }
}

export default globalTeardown;
