

const hamburgerIcona = document.querySelector(".header-right > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const chiudiIcona = document.querySelector(".hamburger-menu > a ");


hamburgerIcona.addEventListener("click", function()
    {
        
        hamburgerMenu.classList.toggle("active")

    }
    
);


chiudiIcona.addEventListener("click", function()
    {

        hamburgerMenu.classList.toggle("active")
    }

);

