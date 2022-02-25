/**
 * 滚动刷新
 *
 * @class AweScroll
 */
class AweScroll {
    /**
     * Creates an instance of AweScroll.
     * @param {*} dom
     * @memberof AweScroll
     */
    constructor(dom, config) {
        this.rootDom = dom instanceof HTMLElement ? dom : document.getElementById(dom)
        if (!this.rootDom) {
            throw 'root dom is undefine!';
        }
        this.config = Object.assign({
            up: {
                callback: () => { },
                disable: false,
            },
            down: {
                callback: () => { },
                disable: false,
            },
            isFixedHeight: true,
            scrollDom: null
        },config)
        if (!this.config.scrollDom) {
            this.config.scrollDom = this.rootDom
        }
        this.checkIsScrolled = checkIsScrolled.bind(this)
        this.config.scrollDom.addEventListener('scroll', this.checkIsScrolled, true);
    }

    destroy() {
        this.config.scrollDom.removeEventListener('scroll',this.checkIsScrolled,true);
    }
}

function checkIsScrolled(event) {
    var element = event.target;
    if (element.scrollHeight - parseInt(element.scrollTop) === element.clientHeight) {
        this.config.up.callback();
    }
}

module.exports = AweScroll