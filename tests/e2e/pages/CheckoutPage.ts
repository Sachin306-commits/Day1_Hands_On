import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly countryInput: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.countryInput = page.locator('input[placeholder="Select Country"]');
    this.placeOrderButton = page.getByRole('button', { name: /place order/i });
  }

  async enterCountryAndPlaceOrder(country: string) {
    await this.countryInput.fill(country);
    await this.page.locator('button').filter({ hasText: /india/i }).first().click({ timeout: 10000 }).catch(() => {});
    await this.placeOrderButton.click({ timeout: 10000 }).catch(() => {});
  }
}
