class MobileNavbar{
    constructor(){
        this.burguer = document.querySelector(MobileMenu);
        this.navList = document.querySelector(navLinks);
        this.navLinks = document.querySelectorAll(navList);
        this.active= "active";
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log(" Hey™ "));
    }

    Init(){
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
    
}
