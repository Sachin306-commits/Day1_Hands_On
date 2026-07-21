import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page.locator('.cartSection').filter({ hasText: 'Adidas original' }).first();
    this.checkoutButton = page.locator('button:has-text("Checkout")');
  }

  async verifyCartContainsProduct() {
    await this.cartItem.waitFor({ state: 'visible' });
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
