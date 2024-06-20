import { test, expect } from '@playwright/test';
import { Application  } from '../app';

//does not work with local test run because of chrome sandbox restrictions
test('Safety Page check', async ({ page }) => {
  const app = new Application(page);
  await app.safetyHighlights.open();
  await app.cookiesModal.expectLoaded();
  await app.cookiesModal.acceptCookies();
  await app.safetyHighlights.header.expectLoaded();
});