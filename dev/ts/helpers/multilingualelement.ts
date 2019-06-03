import Translator from "./translator";

export default abstract class MultilingualElement {
    $element: HTMLElement;

    protected constructor() {
        window.addEventListener('translator:languageChange', () => this.renderProperties());
    }

    protected renderProperties(): void {
        [...this.$element.querySelectorAll('[data-ml]')].forEach(($childElement) => {
            let dataML = $childElement.getAttribute('data-ml');
            let translateString = Translator.i().t($childElement.getAttribute('data-ml-key'));

            if (dataML === "") {
                $childElement.innerHTML = translateString;
            } else {
                $childElement.setAttribute(dataML, translateString);
            }
        });
    }
}
