import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to xterm-svelte' })).toBeVisible();
});

test('Xterm component is visible', async ({ page }) => {
	await page.goto('/');
	const xtermComponent = page.locator('.xterm');
	await expect(xtermComponent).toBeVisible();
});
