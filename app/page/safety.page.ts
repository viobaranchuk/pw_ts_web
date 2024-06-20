import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { Header } from "../component/header.component";

export class Safety extends AppPage {
    public pagePath = 'safety/highlights';
    
    public header = new Header(this.page);
    private readonly pageTitle = 'Safety - Highlights | Volvo Cars'

    async expectLoaded(message = 'Expected Safety page to be opened') {
        await expect(this.page, message).toHaveTitle(this.pageTitle);
    }

}