import { Page, Locator } from '@playwright/test';

export class OrderConfirmationPage {
  readonly page: Page;
  readonly orderIdText: Locator;
  readonly ordersHistoryLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.orderIdText = page.locator('body');
    this.ordersHistoryLink = page.getByRole('button', { name: /orders/i }).first();
  }

  async getOrderId() {
    const currentUrl = this.page.url();
    const decodedUrl = decodeURIComponent(currentUrl);
    const match = decodedUrl.match(/([a-fA-F0-9]{8,})/);
    if (match) {
      return match[1];
    }

    const text = await this.orderIdText.textContent({ timeout: 20000 });
    return text?.match(/[a-fA-F0-9]{8,}/)?.[0] ?? '';
  }

  async openOrdersHistory() {
    await this.page.goto('https://rahulshettyacademy.com/client/#/dashboard/myorders', { waitUntil: 'domcontentloaded', timeout: 60000 });
  }
}
