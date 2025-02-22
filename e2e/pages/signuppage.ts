import { Locator, Page } from "@playwright/test";

export class Signuppage {
    page: Page
    firstName: Locator
    lastName: Locator
    month: Locator
    day: Locator
    year: Locator
    gender: Locator
    mobile: Locator
    email: Locator
    constructor(page){
        this.page = page
        this.firstName = this.page.locator('[name="firstname"]')
        this.lastName = this.page.locator('[name="lastname"]')
        this.month = this.page.locator('[name="birthday_month"]')
        this.day = this.page.locator('[name="birthday_day"]')
        this.year = this.page.locator('[name="birthday_year"]')
        this.gender = this.page.locator('[type="radio"]').nth(1)

    }

    public async filldetails(){
        await this.firstName.fill('Darshan')
        await this.lastName.fill('Ananthakrishna')
        await this.month.selectOption('1')
        await this.day.selectOption('1')
        await this.year.selectOption('2012')
        await this.gender.click()
        await this.page.pause()
    }
}