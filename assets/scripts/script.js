let offset = 0; //смещение
const sliderLine = document.querySelector('.slider__line')

document.querySelector('.slider__next').addEventListener('click', function (){
    offset = offset + 256; // offset += 256
    if(offset > 768) { // 256 * 3 = 768
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
});

document.querySelector('.slider__prev').addEventListener('click', function (){
    offset = offset - 256; // offset -= 256
    if(offset < 0) {
        offset = 768
    }
    sliderLine.style.left = -offset + 'px'
});