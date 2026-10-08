
import { test, expect } from '@playwright/test';

const APP_URL =
    process.env.WEB_APP_URL || 'https://awesomeqa.com/ui/';

test.describe('AwesomeQA E-Commerce Web Tests @awesomeqa', () => {

    test('Search and add Canon EOS 5D to cart @awesomeqa', async ({ page }) => {

        // 1. Launch application
        await test.step('Launch application', async () => {
            await page.goto(APP_URL);

            await expect(page).toHaveTitle(/Your Store/i);
        });

        // 2. Search product
        await test.step('Search for Canon EOS 5D', async () => {
            const searchBox = page.locator('input[name="search"]');

            await expect(searchBox).toBeVisible();

            await searchBox.fill('Canon EOS 5D');
            await searchBox.press('Enter');

            await expect(page.locator('h1')).toContainText('Search');

            await expect(page.getByRole('link', { name: 'Canon EOS 5D' }).first()).toBeVisible();
        });

        // 3. Open product
        await test.step('Open Canon EOS 5D', async () => {
            await page.getByRole('link', { name: 'Canon EOS 5D' }).first().click();

            await expect(page.locator('h1')).toHaveText('Canon EOS 5D');
        });

        // 4. Verify product details
        await test.step('Verify product details', async () => {

            await expect(page.getByText('Availability:', { exact: false })).toBeVisible();

            await expect(page.getByText('Availability: 2-3 Days', { exact: false })).toBeVisible();

            await expect(page.locator('#content').getByText('$98.00', { exact: true })).toBeVisible();
        });

        // 5. Add product to cart
        await test.step('Add product to cart', async () => {

            const addToCartButton = page.getByRole('button', {name: 'Add to Cart'});

            await expect(addToCartButton).toBeVisible();
            await expect(addToCartButton).toBeEnabled();

            await addToCartButton.click();

            await page.waitForTimeout(1000);
        });

    });
});
