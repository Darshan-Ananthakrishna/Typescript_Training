import { test, expect } from '@playwright/test';
import { Booking } from './pages/booking';
test('Facebook', async ({ page }) => {
    await page.goto('https://www.booking.com/index.en-gb.html?gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHal-NlVc33zEvMXuv06ebmZT0JRGxrP6PAwkdmSEZtem9d8op2GVDSYaAk2LEALw_wcB;label=en-de-booking-desktop-rlPWSbMHB321nhxukayXdwS652796016687%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-334108349%3Alp9043142%3Ali%3Adec%3Adm;aid=2311236;gad_source=1;ws=');
    await page.pause()
    const booking = new Booking(page)
    await booking.filldetails()

  });