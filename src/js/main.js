
// *** Open and close mobile menu *** //

    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const sidebarMobile = document.getElementById("sidebarMobile");

    openMenuBtn.addEventListener("click", () => {
        openMenuBtn.classList.add("hidden")
        closeMenuBtn.classList.remove("hidden")
        closeMenuBtn.classList.add("block")

        sidebarMobile.classList.remove("right-[-100%]")
        sidebarMobile.classList.add("right-0")
    });

    closeMenuBtn.addEventListener("click", () => {
        closeMenuBtn.classList.add("hidden")
        openMenuBtn.classList.remove("hidden")
        openMenuBtn.classList.add("block")

        sidebarMobile.classList.remove("right-0")
        sidebarMobile.classList.add("right-[-100%]")
    });

// *** The end *** //

// *** Hide and show nav on scroll *** //

    const navOnScroll = document.getElementById("navOnScroll");
    let lasScrollTop = 0;
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop

        if(scrollTop > lasScrollTop) {
            navOnScroll.classList.add("top-0")
            navOnScroll.classList.remove("top-[-100%]")
        }else{
            navOnScroll.classList.add("top-[-100%]")
            navOnScroll.classList.remove("top-0")
        }
        lasScrollTop = scrollTop;
    });

// *** The end *** //