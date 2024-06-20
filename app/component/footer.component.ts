import { expect } from "@playwright/test";
import { Component } from "../abstractClasses";

export class Footer extends Component{

    private readonly internationalBtn = this.page.getByTestId('footer:marketSitesCta');
    private readonly changeLocationHeader = this.page.getByText("Change Location");
    private readonly closeModalBtn = this.page.getByRole('button', { name: 'Close' });
    private readonly backToTopBtn = this.page.getByRole("button", { name: 'Back to top'});


    async expectSocialLinks() {
        await expect.soft(this.page.getByLabel('Facebook')).toHaveAttribute('href', 'https://www.facebook.com/Volvo');
        await expect.soft(this.page.getByLabel('Instagram')).toHaveAttribute('href', 'http://instagram.com/volvocars');
        await expect.soft(this.page.getByLabel('Twitter')).toHaveAttribute('href', 'https://twitter.com/volvocars');
        await expect.soft(this.page.getByLabel('YouTube')).toHaveAttribute('href', 'https://www.youtube.com/user/VolvoCarsNews');
    }

    async expectkFooterLinks() {
        await expect.soft(this.page.getByRole('link', { name: 'Cookies' })).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/cookies');
        await expect.soft(this.page.getByRole('link', { name: 'Legal'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/legal');
        await expect.soft(this.page.getByRole('link', { name: 'Privacy'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/legal?path=privacy/privacy-customer-privacy-policy');
        await expect.soft(this.page.getByRole('link', { name: 'Social Media'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/social-media');
        await expect.soft(this.page.getByRole('link', { name: 'Tell Us'})).toHaveAttribute('href', 'https://www.volvocars.com/intl/v/legal/tell-us-reporting-line');
    }
    
    async expectLoaded(message = 'Back to top button is not dysplayed'): Promise<void> {
        await expect(this.backToTopBtn, message).toBeVisible();
    }

}