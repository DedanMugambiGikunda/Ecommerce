const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEvenyListener('click',() => {
        nav.classList.add('active');
    })   
}

if (close) {
    close.addEvenyListener('click', () => {
        nav.classList.remove('active');
    })   
}