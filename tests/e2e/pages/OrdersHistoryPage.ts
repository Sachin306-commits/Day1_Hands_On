import { Page, Locator } from '@playwright/test';

export class OrdersHistoryPage {
  readonly page: Page;
  readonly orderRow: Locator;
  readonly viewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.orderRow = page.locator('tbody tr').first();
    this.viewButton = page.getByRole('button', { name: /view/i }).first();
  }

  async openOrderDetail(orderId: string) {
    const row = this.page.locator('tbody tr').filter({ hasText: orderId }).first();
    await row.waitFor({ state: 'visible' });
    await this.viewButton.click();
  }
}
