const preloader=document.getElementById('preloader')

window.addEventListener('load', hidePreloader)

function hidePreloader(){
    preloader.style.display='none'
}

document.addEventListener('DOMContentLoaded', () => {

    const percentBar = document.querySelectorAll('.percentage-bar')

    const observerCallback = (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const bar = entry.target

                const percentage = bar.getAttribute('percentage-for-js')

                bar.style.width = `${percentage}%`
                bar.classList.add('active')

                bar.addEventListener('transitionend', percentageAnimationEnd, { once: true })

                observer.unobserve(bar)
            }
        })
    }

    const observer = new IntersectionObserver(observerCallback, {
        root: null,
        threshold: 0.5
    })

    percentBar.forEach(bar => {
        observer.observe(bar)
    })

})

function percentageAnimationEnd(){

    const percentageText = document.querySelectorAll('.percentage')

    for ( i = 0; i < percentageText.length; i++){
        percentageText[i].style.opacity = '100'
    }
}