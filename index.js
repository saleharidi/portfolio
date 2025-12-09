const preloader = document.getElementById('preloader')

window.addEventListener('load', hidePreloader)

function hidePreloader() {
    preloader.style.display = 'none'
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

function percentageAnimationEnd() {

    const percentageText = document.querySelectorAll('.percentage')

    for (i = 0; i < percentageText.length; i++) {
        percentageText[i].style.opacity = '100'
    }

}


document.addEventListener('DOMContentLoaded', textEntry)

function textEntry() {

    const heroP = document.getElementsByClassName('hero-p')

    for (i = 0; i < heroP.length; i++) {
        heroP[i].style.transform = 'translateY(0)'
    }

    const heroh2 = document.getElementsByClassName('hero-h2')

    for (i = 0 ; i < heroh2.length; i++){
        heroh2[i].style.transform = 'translateY(0)'
        heroh2[i].style.opacity = '100'
    }

    const h1DelayDuration = 700

    setTimeout(() => {
       const heroh1 = document.getElementsByClassName('hero-h1')

       for (i=0; i< heroh1.length; i++){

        heroh1[i].style.transform = 'translateX(0)'
       }
   }, h1DelayDuration)

     const contactIconDelayDuration = 900

    setTimeout(() => {
       const contactIcon = document.getElementsByClassName('contact-icon')

       for (i=0; i< contactIcon.length; i++){

        contactIcon[i].style.transform = 'translateX(0)'
       }
   }, contactIconDelayDuration)

     const githubDelayDuration = 1000

    setTimeout(() => {
       const githubIcon = document.getElementsByClassName('github-icon')

       for (i=0; i< githubIcon.length; i++){

        githubIcon[i].style.transform = 'translateX(0)'
       }
   }, githubDelayDuration)

     const instaIconDelayDuration = 1100

    setTimeout(() => {
       const instaIcon = document.getElementsByClassName('instagram-icon')

       for (i=0; i< instaIcon.length; i++){

       instaIcon[i].style.transform = 'translateX(0)'
       }
   }, instaIconDelayDuration)

}
