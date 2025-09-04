// 이미지 슬라이드
const slide = document.querySelector('.slide');
const slideWidth = 1000;
let isAnimating = false;

function slideLeft() {
    if (isAnimating) return;
    isAnimating = true;

    slide.style.transition = 'left 0.5s ease';
    slide.style.left = -slideWidth + 'px';

    slide.addEventListener('transitionend', function handler() {
        slide.style.transition = 'none';
        slide.appendChild(slide.firstElementChild);
        slide.style.left = '0px';
        isAnimating = false;
        slide.removeEventListener('transitionend', handler);
    });
}

setInterval(slideLeft, 3000);

// 메뉴 서브 슬라이드
document.querySelectorAll('.menu > li').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        const subMenu = this.querySelector('.sub');
        if (subMenu) {
        subMenu.style.display = 'block';
        const height = subMenu.scrollHeight + 'px';
        subMenu.style.maxHeight = height;
        }
    });
    item.addEventListener('mouseout', function() {
        const subMenu = this.querySelector('.sub');
        if (subMenu) {
        subMenu.style.maxHeight = '0';
        setTimeout(() => {
            subMenu.style.display = 'none';
        }, 500);
        }
    });
});
