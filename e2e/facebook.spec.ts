import { test, expect } from '@playwright/test';
import { Signuppage } from './pages/signuppage';
test('Facebook', async ({ page }) => {
    await page.goto('https://www.facebook.com/r.php?entry_point=login');
    await page.pause()
    const signuppage = new Signuppage(page)
    await signuppage.filldetails()

  });