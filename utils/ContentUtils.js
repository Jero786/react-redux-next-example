class ContentUtils {
    /**
     * Retrieve the matcher ancestor which contain given {@param className}.
     * @param el
     * @param className
     * @returns {*}
     */
    static getElementByClassName(el, className) {
        const maxStack = 10; // prevent transfers so far
        let stackIndex = 0;

        while(el && el.classList && !el.classList.contains(className) && stackIndex < maxStack) {
            stackIndex++;
            el = el.parentElement;
        }

        return el && el.classList && el.classList.contains(className) ? el : null;
    }
}

export default ContentUtils;