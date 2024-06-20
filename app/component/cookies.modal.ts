import { expect } from "@playwright/test";
import { Component } from "../abstractClasses";

export class CookiesModal extends Component{

    private readonly cookiesBunner = this.page.locator('#onetrust-banner-sdk');
    private readonly acceptCookiesBtn = this.page.locator('#onetrust-accept-btn-handler');
    private readonly cookieSettingsBtn = this.page.locator('#onetrust-pc-btn-handler');
    private readonly rejectAllBtn = this.page.locator('onetrust-reject-all-handler');

    async expectLoaded(message = 'Cookies modal window is not displayed') {
        await expect(this.cookiesBunner, message).toBeVisible();
    }

    async acceptCookies() {
        await this.acceptCookiesBtn.click();
    }

}