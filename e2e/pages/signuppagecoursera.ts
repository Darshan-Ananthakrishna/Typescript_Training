import { Locator, Page } from "@playwright/test";

export class Signuppagecoursera {
    page: Page
    fullName: Locator
    email: Locator
    password: Locator
    
    constructor(page){
        this.page = page
        this.fullName = this.page.locator('[name="name"]')
        this.email = this.page.locator('[name="email"]')
        this.password = this.page.locator('[name="password"]')
            
    }

    public async filldetails(){
        await this.fullName.fill('Darshan')
        await this.email.fill('Ananthakrishna')
        await this.password.fill('Hello')
    }
}