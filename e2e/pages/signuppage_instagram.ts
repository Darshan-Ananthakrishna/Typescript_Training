import { Locator, Page } from "@playwright/test";

export class Signuppage_instagram {
    page: Page
    email: Locator
    password: Locator
    fullName: Locator
    userName: Locator
    constructor(page){
        this.page = page
        this.email = this.page.locator('[name="emailOrPhone"]')
        this.password = this.page.locator('[name="password"]')
        this.fullName = this.page.locator('[name="fullName"]')
        this.userName = this.page.locator('[name="username"]')
    }

    public async filldetails(){
        await this.email.fill('darshan.ananthakrishnagmailcom')
        await this.password.fill('Testing123')
        await this.fullName.fill('Darshan H A')
        await this.userName.fill('darshan.ananthakrishna')
        await this.page.pause()
    }
}