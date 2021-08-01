/*
1. Nút sub menu ẩn hiện
2. Slider bar ảnh của phần beaches
3. Làm nút buy
*/

const activeSubmenu = document.querySelector('.sub-nav__icon')
const exitSubmenu = document.querySelector('.sub-nav__exit')
const subNavContain = document.querySelector('.sub-nav__contain')
const sliderElement = document.querySelectorAll('.slider__element')
const slider = document.querySelector('.img-slider')
const header = document.querySelector('.header')
const navMobile = document.querySelector('.nav-mobile')
const navMobileExit = document.querySelector('.nav-mobile-exit i')

const sliderBackground = ['./assets/imgs/beaches.jpg','./assets/imgs/first-click.jpg','./assets/imgs/third-click.jpg']


console.log(document.body.scrollWidth)
// ẩn, hiện sub menu
console.log(navMobileExit)
if (document.body.scrollWidth <= 1199) {
    activeSubmenu.onclick = function() {
        navMobile.classList.add('active')
    }
}
else (
    activeSubmenu.onclick = function() {
        subNavContain.classList.add('active')
    }
)
navMobileExit.onclick = function() {
    navMobile.classList.remove('active')
}

exitSubmenu.onclick = function() {
    subNavContain.classList.remove('active')
}


//Slider ảnh
Array.from(sliderElement).forEach((element,index) => {
    element.addEventListener('click', () => {
        Array.from(sliderElement).forEach(e => {
            if (e.classList.contains('active')){
                e.classList.remove('active')
            }
        })
      element.classList.add('active')
      slider.style.backgroundImage = `url('${sliderBackground[index]}')`;

    });
  });






