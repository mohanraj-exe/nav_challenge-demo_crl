const navToggle = document.querySelector('.nav-toggle');
// console.log("navToggle:", navToggle);

const nav = document.querySelector('.nav');
// console.log("nav:", nav);


navToggle.addEventListener('click', () => {
    // console.log("Clicked");
    nav.classList.toggle('nav--visible');
})