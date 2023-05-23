window.onload = () => {
    let body_html = document.querySelector('body');
    body_html.classList.add('body_content_center');
}

setTimeout(() => {
    window.location.replace('pages/signIN.html');
}, 5000);