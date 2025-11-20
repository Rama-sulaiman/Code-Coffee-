/* to show and hide the mobile menu */
const mobileNav=document.querySelector(".mobile-nav");
const mobileMenu =document.querySelector(".mobile-menu"); 

      function showSection(sectionId) {
        document
          .querySelectorAll(".menu-section")
          .forEach((s) => s.classList.add("hidden"));
        document.getElementById(sectionId).classList.remove("hidden");

        document
          .querySelectorAll(".tab")
          .forEach((t) => t.classList.remove("active"));
        event.target.classList.add("active");
      }

 mobileNav.addEventListener("click",()=>{
    mobileMenu.classList.toggle("active");
 });
