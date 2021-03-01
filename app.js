const container = document.querySelector('.content')
const before = document.querySelector('.image-container-before')
const after = document.querySelector('.image-container-after')
const slider = document.querySelector('.slider')

container.addEventListener('mousemove', (e)=>{
    let size = container.offsetWidth;
    let position = e.layerX
    before.style.width = position + 'px'
    slider.style.left = position + 'px'

    before.style.transition = 'none'
    slider.style.transition = 'none'
    if (position < 50){
        before.style.width = 0;
        slider.style.left = 0;
        before.style.transition = '0.3s all linear'
        slider.style.transition = '0.3s all linear'
    }
    if (position + 50 > size){
        before.style.width = size + 'px';
        slider.style.left = size + 'px';   
        before.style.transition = '0.3s all linear'
        slider.style.transition = '0.3s all linear'
    }
})