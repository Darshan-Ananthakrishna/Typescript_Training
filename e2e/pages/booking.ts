import { Locator, Page } from "@playwright/test";

export class Booking {
    page: Page
    destination: Locator
    checkindate: Locator
    checkoutdate: Locator
    passengers: Locator
    flights: Locator
    search: Locator
    constructor(page){
        this.page = page
        this.destination = this.page.locator('[role= "combobox"]')
        this.checkindate = this.page.locator('[data-testid="date-display-field-start"]')
        this.checkoutdate = this.page.locator('[data-testid="date-display-field-end"]')
        this.passengers = this.page.locator('[data-testid="occupancy-popup"]')
        this.flights = this.page.locator('[type="submit"]')
        

    }

    public async filldetails(){
        await this.destination.fill('Berlin')
        await this.checkindate.fill('Sat 1 Mar')
        await this.checkoutdate.fill('Sun 10 Mar')
        await this.passengers.selectOption('1')
        await this.year.selectOption('2012')
        await this.gender.click()
        await this.page.pause()
    }
}