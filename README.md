# AI Fridge MVP

AI Fridge is a simple app that acts as a digital twin of a user's fridge. It helps people track what food they already have, see what will expire soon, and get a basic suggestion for what to eat or cook first.

## Target Users

- Young adults
- Office workers
- Grocery delivery users

## Main User Pains

- It is hard to know what to buy.
- Food gets wasted because people forget what is in the fridge.
- It is hard to quickly decide what to cook from the products already at home.
- After shopping, users have to remember fridge contents manually.

## MVP Scope

The first version should prove the core value of the product with a small, testable workflow:

- A "My Fridge" screen that shows products with name, category, quantity, expiration date, and status
- Manual product creation through a simple form
- Expiration-based sorting so overdue and soon-to-expire items are easiest to notice
- A basic "What should I cook?" suggestion based on current products
- A clear empty state with guidance and an "Add Product" action

## Explicitly Out Of Scope

The MVP should not include:

- Real receipt recognition
- Delivery service integrations
- Complex AI recipe generation
- Diet plans or paid meal plans
- Push notifications
- Barcode scanning
- Family sharing
- Admin panels
- App Store or Google Play releases

## Recommended First Development Milestone

Build a clickable MVP v0.1 where a user can open the app, view the fridge screen, add a product manually, see that product in the list with an expiration status, and receive a simple cooking recommendation.

## Iterative Development Approach

Develop the project in small, reviewable steps:

1. Start with mocked product data and the main fridge screen.
2. Add manual product creation with the required form fields.
3. Add product status and expiration-based sorting.
4. Add the basic meal suggestion flow with simple logic or mocked AI output.
5. Add persistence only after the core user flow is easy to test and review.

This keeps the project inside MVP scope and prioritizes a working prototype over premature architecture.
