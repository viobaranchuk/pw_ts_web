import { PageHolder } from "./abstractClasses";
import { CookiesModal } from "./component/cookies.modal";
import { Safety } from "./page/safety.page";

export class Application extends PageHolder {

    public safetyHighlights = new Safety(this.page);
    public cookiesModal = new CookiesModal(this.page);
}