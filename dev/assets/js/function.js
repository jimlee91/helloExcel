

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
        if( document.body.style.overflow != 'hidden' ) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        this.closest('.utilbox').classList.toggle('js-active');
    })
});

