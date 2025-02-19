const lightSrc = `./../_asset/img/Pixel & Pen.png`;
const darkSrc = `./../_asset/img/Pixel & Pen(B&W).png`;
const logo = document.querySelectorAll('.logo')
const main_logo = document.querySelector('.main-logo')

// Function to apply dark mode based on localStorage or system preference
const applyTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        document.documentElement.classList.add('dark');
        logo.forEach(element => {
            element.src = darkSrc
        });
        main_logo.src = `./../_asset/img/Pixel & Pen(Main-B&W).png`
    } else {
        document.documentElement.classList.remove('dark'); // Apply light theme
        logo.forEach(element => {
            element.src = lightSrc;
        });
        main_logo.src = `./../_asset/img/Pixel & Pen(Main).png`
    }
};

// Apply theme on page load
applyTheme();

const login = document.querySelector('.login');
const sign = document.querySelector('.signup');
const logo_box = document.querySelector('.logo-box');
const slidebtn = document.querySelector('.slide-btn');

let isLoginVisible = true; 


slidebtn.addEventListener('click', function () {
    if (isLoginVisible) {
        logo_box.classList.add('ani');
        
        login.style.transform = 'translateX(100%)';
        logo_box.style.transform = 'translateX(-110%)';
        
        sign.style.transform = 'translateX(0)';
        
        
        setTimeout(() => {
            login.classList.add('hidden');
            sign.classList.remove('hidden');
            logo_box.classList.remove('ani');
            logo_box.style.transform = 'translateX(0)';
        }, 3000);

        isLoginVisible = false;
    } else {
        logo_box.classList.add('ani');
        
        sign.style.transform = 'translateX(-100%)';
        logo_box.style.transform = 'translateX(110%)';
        login.style.transform = 'translateX(0)';
        setTimeout(() => {
            login.classList.remove('hidden');
            sign.classList.add('hidden');
            logo_box.classList.remove('ani');
            logo_box.style.transform = 'translateX(0)';
        }, 3000);
        
        isLoginVisible = true;
    }
});