import { test, expect } from '@playwright/test';
import { Signuppagecoursera } from './pages/signuppagecoursera';
test('Facebook', async ({ page }) => {
    await page.goto('https://www.coursera.org/courseraplus?adgroupid=351685084750&assetgroupid=&authMode=signup&campaignid=21836581617&creativeid=1449957450627&device=c&devicemodel=&extensionid=&gad_source=1&gclid=CjwKCAiAn9a9BhBtEiwAbKg6frdEOVnOwymidYwK6ZoHRNUu9i0uIwkIkib7eEDc65F-qfLweP4fZRoCuasQAvD_BwE&keyword=coursera&matchtype=e&network=g&placement=&targetid=kwd-36262515261&utm_campaign=b2c_emea_x_coursera_ftcof_courseraplus_cx_dr_bau_gg_sem_bd-ex_s1_en_m_hyb_24-10_x&utm_medium=sem&utm_source=gg');
    await page.pause()
    const signuppagecoursera = new Signuppagecoursera(page)
    await signuppagecoursera.filldetails()

  });