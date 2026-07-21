import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly adidasProductCard: Locator;
  readonly addToCartButton: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.adidasProductCard = page.locator('.card').filter({ hasText: 'ADIDAS ORIGINAL' }).first();
    this.addToCartButton = this.adidasProductCard.getByRole('button', { name: /add to cart/i });
    this.cartLink = page.getByRole('button', { name: /cart/i }).first();
  }

  async addSelectedProductToCart() {
    await this.adidasProductCard.scrollIntoViewIfNeeded();
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
