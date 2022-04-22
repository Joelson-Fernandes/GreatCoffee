class MobileMenu {
    constructor(btnMenu, navList, navLinks, nav){
        this.btnMenu = document.querySelector(btnMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.nav = document.querySelector(nav);
        this.activeClass = "active"

        this.clickEvent = this.clickEvent.bind(this);
    }

    linkAnimation() {
      
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? link.style.animation = ""
            : link.style.animation = `linkAnimation 2s ease forwards ${index / 7 + 0.3}s`;
        });
    }

    clickEvent(){
        this.nav.classList.toggle(this.activeClass);
        this.navList.classList.toggle(this.activeClass);
        this.btnMenu.classList.toggle(this.activeClass);
        this.linkAnimation();
    }

    addClickEvent() {
        this.btnMenu.addEventListener("click", this.clickEvent);
    }

    init(){
        if(this.btnMenu){
            this.addClickEvent();
        }
    
        return this;
    }

}

const mobileMenu = new MobileMenu(
    "#btnToggle",
    ".navList",
    ".navList li a",
    ".nav"  
    );

mobileMenu.init();




