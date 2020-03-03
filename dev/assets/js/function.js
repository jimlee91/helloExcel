

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