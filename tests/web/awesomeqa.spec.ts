import { test, expect } from '@playwright/test';

const APP_URL =
    process.env.WEB_APP_URL || 'https://awesomeqa.com/ui/';

test.describe('AwesomeQA End-to-End UI Tests @awesomeqa', () => {

    test('Verify AwesomeQA application loads successfully @awesomeqa', async ({ page }) => {

        await test.step('1) Navigate to AwesomeQA application', async () => {
            const response = await page.goto(APP_URL, {
                waitUntil: 'domcontentloaded',
            });

            expect(response?.status()).toBe(200);
            expect(page.url()).toContain('awesomeqa.com/ui');

            console.log('Application URL:', page.url());
            console.log('Application Title:', await page.title());
        });

        await test.step('2) Verify page is displayed', async () => {
            await expect(page.locator('body')).toBeVisible();
            
        });

        await test.step('3) Verify page contains application content', async () => {
            const bodyText = await page.locator('body').innerText();

            expect(bodyText.trim().length).toBeGreaterThan(0);

            console.log('Page content verified successfully.');
        });

        console.log('✅ AwesomeQA E2E test completed successfully!');
    });
});