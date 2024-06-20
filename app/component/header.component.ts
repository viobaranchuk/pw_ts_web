import { expect } from "@playwright/test";
import { AppPage, Component } from "../abstractClasses";

export class Header extends Component{

    private aboutUsBth = this.page.getByRole("button", {name: 'About us'});

    async expectLoaded(message = "Header menu is not displayed") {
        await expect(this.aboutUsBth, message).toBeVisible();
    }
}