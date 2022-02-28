class AweCalendar {
    constructor(dom,config){
        this.rootDom = dom
        this.config = Object.assign({
            weeks: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        },config)

        this.fragment = document.createDocumentFragment();
        this.initCard()
        this.rootDom.appendChild(this.fragment)
    }

    initHeader(){

    }

    initWeekBar(){
        this.weekBarDom = document.createElement('div')
        this.weekBarDom.classList.add('awe-week-bar')
    }


    initCard(){
        let containerDom = document.createElement('div')
        for (let i = 0; i < 5; i++) {
            let row = document.createElement('div')
            row.classList.add('flex-rows')
            for (let j = 0; j < 7; j++) {
                let selectable = document.createElement('div')
                selectable.classList.add('selectable')
                row.appendChild(selectable)
            }
            containerDom.appendChild(row)
        }
        this.fragment.appendChild(containerDom)
    }
}

module.exports = AweCalendar