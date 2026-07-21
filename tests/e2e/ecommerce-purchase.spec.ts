import { test, expect } from '@playwright/test';
import * as path from 'path';
import credentials from '../../utilities/user-credentials.json';
import { LoginPage } from './pages/LoginPage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { OrdersHistoryPage } from './pages/OrdersHistoryPage';

test('end-to-end purchase flow using page object model', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: path.join(process.cwd(), 'test-results', 'global-storage-state.json'),
  });
  const page = await context.newPage();
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const orderConfirmationPage = new OrderConfirmationPage(page);
  const ordersHistoryPage = new OrdersHistoryPage(page);

  await loginPage.goto();
  await loginPage.login(credentials.email, credentials.password);

  await expect(page).toHaveURL(/dashboard/);

  await productsPage.addSelectedProductToCart();
  await productsPage.openCart();

  await cartPage.verifyCartContainsProduct();
  await cartPage.checkout();

  await checkoutPage.enterCountryAndPlaceOrder('India');

  const orderId = await orderConfirmationPage.getOrderId();
  expect(orderId).toBeTruthy();

  await orderConfirmationPage.openOrdersHistory();
  await expect(page).toHaveURL(/myorders/);
  expect(orderId).toBeTruthy();

  await context.close();
});
