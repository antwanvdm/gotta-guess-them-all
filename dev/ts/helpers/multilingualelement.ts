import Translator from "./translator";
import Utils from "./utils";

export default abstract class MultilingualElement {
    $element: HTMLElement;

    protected constructor() {
        window.addEventListener('translator:languageChange', () => this.renderProperties());
    }

    protected renderProperties() {
        [...this.$element.querySelectorAll('[data-ml]')].forEach(($childElement) => {
            let dataML = $childElement.getAttribute('data-ml');
            let translateString = Translator.i().t[$childElement.getAttribute('data-ml-key')];

            if (dataML === "") {
                $childElement.innerHTML = Utils.htmlEntityDecode(translateString);
            } else {
                $childElement.setAttribute(dataML, Utils.htmlEntityDecode(translateString));
            }
        })
    }
}
