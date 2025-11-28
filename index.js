const preloader=document.getElementById('preloader')

window.addEventListener('load', hidePreloader)

function hidePreloader(){
    preloader.style.display='none'
}