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
            scrollDom: null
        }, config)
        if (!this.config.scrollDom) {
            this.config.scrollDom = this.rootDom
        }
        this.checkIsScrolled = checkIsScrolled.bind(this)
        this.config.scrollDom.addEventListener('scroll', this.checkIsScrolled, true);


        if (!this.config.up.disable) {
            this.initUpEvent()
        }
    }
    /**
     * 监听下拉刷新事件
     *
     * @memberof AweScroll
     */
    initUpEvent() {
        let self = this
        let ts;
        this.rootDom.addEventListener('touchstart', function (e) {
            ts = e.touches[0].clientY;
        });

        this.rootDom.addEventListener('touchend', function (e) {
            let te = e.changedTouches[0].clientY;
            if (ts > te + 5) {
                self.slidePush();
            } else if (ts < te - 5) {
                self.slidePull();
            }
        });
    }

    slidePull() {
        this.config.down.callback();
    }

    slidePush() {

    }

    destroy() {
        this.config.scrollDom.removeEventListener('scroll', this.checkIsScrolled, true);
    }
}

function checkIsScrolled(event) {
    var element = event.target;
    if (element.scrollHeight - parseInt(element.scrollTop) === element.clientHeight) {
        this.config.up.callback();
    }
}

module.exports = AweScroll