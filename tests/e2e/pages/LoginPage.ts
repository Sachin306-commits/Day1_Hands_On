import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("input[placeholder='email@example.com']");
    this.passwordInput = page.locator("input[placeholder='enter your passsword']");
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('.toast-container');
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(email: string, password: string) {
    const currentUrl = this.page.url();
    if (currentUrl.includes('/dashboard')) {
      return;
    }

    await this.emailInput.waitFor({ state: 'visible', timeout: 60000 });
    await this.emailInput.fill(email);
    await this.passwordInput.waitFor({ state: 'visible', timeout: 60000 });
    await this.passwordInput.fill(password);
    await this.loginButton.click({ timeout: 60000 });
  }
}
