/* to show and hide the mobile menu */
const mobileNav=document.querySelector(".mobile-nav");
const mobileMenu =document.querySelector(".mobile-menu");


 mobileNav.addEventListener("click",()=>{
    mobileMenu.classList.toggle("active");
 });