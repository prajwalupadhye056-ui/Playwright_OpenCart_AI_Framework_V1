import { test, expect } from '@playwright/test';

const APP_URL =
    process.env.WEB_APP_URL || 'https://awesomeqa.com/ui/';

test.describe('AwesomeQA E-Commerce End-to-End Tests @awesomeqa', () => {

    test('Complete product purchase journey @awesomeqa', async ({ page }) => {

        await test.step('1) Launch e-commerce application', async () => {
            const response = await page.goto(APP_URL, {
                waitUntil: 'domcontentloaded',
            });

            expect(response).not.toBeNull();
            expect(response!.status()).toBeLessThan(400);

            await expect(page).toHaveTitle(/Your Store/i);

            console.log('Application URL:', page.url());
            console.log('Application Title:', await page.title());
        });

        await test.step('2) Search for Canon EOS 5D', async () => {
            const searchBox = page.locator('input[name="search"]');

            await expect(searchBox).toBeVisible();

            await searchBox.fill('Canon EOS 5D');
            await searchBox.press('Enter');

            await expect(page.locator('h1')).toContainText('Search');

            const productLink = page.getByRole('link', { name: 'Canon EOS 5D' }) .first();

            await expect(productLink).toBeVisible();

            console.log('Product search completed successfully.');
        });

        await test.step('3) Open Canon EOS 5D product details', async () => {

            const productLink = page.getByRole('link', { name: 'Canon EOS 5D' }).first();

            await productLink.click();

            await expect(page.locator('h1')).toHaveText('Canon EOS 5D');

            await expect(
                page.getByText('Availability:', { exact: false })).toBeVisible();

            console.log('Product details page verified.');
        });

        await test.step('4) Verify product availability and price', async () => {

            await expect(page.getByText('Availability: 2-3 Days', {exact: false})).toBeVisible();

            await expect(
                page.locator('#content').getByText('$98.00', {exact: true})).toBeVisible();

            console.log('Product availability and price verified.');
        });

        await test.step('5) Inspect product options and Add to Cart response', async () => {

            // Inspect available select elements
            const selects = page.locator('select');

            console.log('Number of select elements:',await selects.count()
            );

            for (let i = 0; i < await selects.count(); i++) {

                const select = selects.nth(i);

                console.log(`Select ${i}:`);
                console.log( 'Name:',await select.getAttribute('name'));
                console.log( 'ID:',await select.getAttribute('id'));
                console.log('Value:',await select.inputValue());

                console.log('Options:',await select.locator('option').allTextContents());
            }

            // Capture Add to Cart request
            const cartResponsePromise = page.waitForResponse(
                response =>
                    response.url().includes(
                        'route=checkout/cart/add'
                    ) &&
                    response.request().method() === 'POST'
            );

            const addToCartButton = page.getByRole('button', {name: 'Add to Cart',});

            await expect(addToCartButton).toBeVisible();
            await expect(addToCartButton).toBeEnabled();

            console.log('Add to Cart button visible and enabled.');

            await addToCartButton.click();

            console.log('Add to Cart button clicked.');

            const cartResponse = await cartResponsePromise;

            console.log('Add to Cart HTTP status:',cartResponse.status()
            );

            console.log('Add to Cart response URL:',cartResponse.url()
            );

            const responseBody = await cartResponse.text();

            console.log('Add to Cart response body:');
            console.log(responseBody);

            await page.waitForTimeout(1000);

            console.log('Cart counter:', await page.locator('#cart-total').innerText());
        });

    });
})