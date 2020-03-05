// Polyfill Closest
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;

        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

// 견적서 발신인 수신인 더보기 토글
document.querySelectorAll('.estimate__user-more').forEach((el) => {
    el.addEventListener('click', function(){
        this.closest('.estimate__user').querySelector('.js-innerToggle').classList.toggle('show')
    })
})

document.querySelector('.topHistoryList__toggle').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.topHistoryList').classList.toggle('js-show');
});

// 모바일에서 결제방법 선택 슬라이드
document.querySelectorAll('.payment__item').forEach((el) => {
    el.addEventListener('click', function(){
        // disabled 클래스가 있으면 토글 불가능
        if( !this.classList.contains('disabled') ) {
            this.classList.toggle('js-active');
        }
    })
});


// 변경이력 및 채팅 헤더 클릭시 토글
document.querySelectorAll('.utilbox__header button').forEach((el) => {
    el.addEventListener('click', function(){
        if( window.innerWidth < 769 && document.body.style.overflow != 'hidden' ) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        this.closest('.utilbox').classList.toggle('js-active');
    })
});

// 세금계산서, 비용증빙자료 슬라이드
if( document.querySelectorAll('.estimateInfo').length > 0 ) {
    document.querySelectorAll('.estimateInfo').forEach((el) => {
        el.classList.add('js-active');
    })
}


document.querySelector('.header__menu').addEventListener('click', function(){
    this.classList.toggle('js-active');
    if( window.innerWidth < 769 ) {
        document.querySelector('.mobileGnb').classList.toggle('js-active');
    } else {
        document.querySelector('.mobileGnb').classList.add('js-active');
    }
});
document.querySelectorAll('.mobileGnb .js-close').forEach((el) => {
    el.addEventListener('click', function(){
        this.closest('.mobileGnb').classList.remove('js-active');
        document.querySelector('.header__menu').classList.remove('js-active');
    })
});

function utilboxShow(target) {
    document.querySelector('.mobileGnb').classList.remove('js-active');
    document.querySelector('.header__menu').classList.remove('js-active');
    document.body.style.overflow = 'hidden';
    document.querySelectorAll('.utilbox').forEach((el) => {
        el.classList.remove('js-active');
    })
    document.querySelector(target).classList.add('js-active');
}