# Day 1 Scrum

## User story
As a registered customer, I want to log in, purchase an item, and review my order so that I can verify the full checkout experience end to end.

## Acceptance criteria
1. The user can open the home page, log in with stored credentials, and reach the products page.
2. The user can select the Adidas original product and add it to the cart.
3. The user can review the cart, proceed to checkout, and place the order.
4. The user can verify the order confirmation page and open the order history page.
5. The user can verify the order summary by matching the order identifier.

## Notes
- User credentials are stored in the utility folder to avoid hardcoding.
- The implementation follows a page-object model so each page has dedicated actions and assertions.
