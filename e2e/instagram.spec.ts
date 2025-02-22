import { test, expect } from '@playwright/test';
import { Signuppage_instagram } from './pages/signuppage_instagram';
test('Instagram', async ({ page }) => {
    await page.goto('https://www.instagram.com/accounts/emailsignup/');
    await page.pause()
    const signuppage_instagram = new Signuppage_instagram(page)
    await signuppage_instagram.filldetails()

  });