const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const imgs = $$('.js-img')
const next = $('.btn-next')
const prev = $('.btn-prev')
const dots = $$('.dot')

console.log(next)

const list = {
    index: 0,
    imgs: imgs,
    dots: dots,
    //event 
    hangEvents : function() {
        _this= this
 
        //function remove 
        var remove = function() {
            imgs[_this.index].classList.remove('css')
            imgs[_this.index].classList.add('display')
            dots[_this.index].classList.remove('active')
        }

        //function add 
        var add = function() {
            imgs[_this.index].classList.add('css')
            imgs[_this.index].classList.remove('display')
            dots[_this.index].classList.add('active')
        }
        // function next
        var btnNext = function() {
            remove()
            _this.index = _this.index !== (imgs.length - 1) ? _this.index + 1 : 0
            add()
        }

        //next 
        next.onclick = btnNext
        //set time 
        setInterval(btnNext,10000)
        //prev
        prev.onclick = function() {
            remove()
            _this.index = (_this.index === 0) ? imgs.length-1 : _this.index-1
            add()
        }

    },

    // gọi lại xử lí 
    start : function() {
        //event 
        this.hangEvents()
    }
}

list.start()