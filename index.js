const body = document.body
const rightBtn = document.getElementById('right')
const leftBtn = document.getElementById('left')
const slides = document.querySelectorAll('.slide')


let setActiveSlide = 0

function setBgBody() {
    body.style.backgroundImage = slides[setActiveSlide].style.backgroundImage
}
setBgBody()



function activeSlides() {
    slides.forEach((curr) => {
        curr.classList.remove('active')

        slides[setActiveSlide].classList.add('active')
    })
}


rightBtn.addEventListener('click', () => {
    setActiveSlide++
    if (setActiveSlide > slides.length - 1) {
        setActiveSlide = 0
    }

    setBgBody()
    activeSlides()
})


leftBtn.addEventListener('click', () => {
    setActiveSlide--

    if (setActiveSlide < 0) {
        setActiveSlide = slides.length - 1
    }
    setBgBody()
    activeSlides()
})