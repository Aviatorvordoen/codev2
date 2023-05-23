// cosnt
const BACK_BUTTON = document.querySelector('.return');



// function
function GOBack(){
    window.location.replace('/index.html')
}


// bind
BACK_BUTTON.addEventListener('click', GOBack)
