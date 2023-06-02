// get elements
const form = document.querySelector('.freset');


// untitled function
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const ResetTokenInputField = document.querySelector('.TokenReset_input').value;
    localStorage.setItem('NT', ResetTokenInputField);
    console.log('value is record')
    if (localStorage.getItem('NT'))
    {
        setTimeout(() => {
            window.location.replace('./signIN.html')
            
        }, 3000);
    }
})