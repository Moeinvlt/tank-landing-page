
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

// *** Countdown Timer *** //
    const countdownDate = new Date("2025-07-22T00:00:00").getTime();
    const RADIUS = 45;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    function setRingProgress(ringId, value, max) {
        const ring = document.getElementById(ringId);
        if (!ring) return;
        const percent = value / max;
        ring.setAttribute('stroke-dasharray', CIRCUMFERENCE);
        ring.setAttribute('stroke-dashoffset', CIRCUMFERENCE * (1 - percent));
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            const timer = document.getElementById("countdown-timer");
            if (timer) timer.innerHTML = "<span class='text-white text-xl'>EXPIRED</span>";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // todo Update values
        document.getElementById("days-value").textContent = String(days).padStart(2, '0');
        document.getElementById("hours-value").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes-value").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds-value").textContent = String(seconds).padStart(2, '0');

        // Days
        const totalDays = Math.ceil((countdownDate - (now - (days * 24 * 60 * 60 * 1000))) / (1000 * 60 * 60 * 24));
        setRingProgress('ring-days', days, totalDays > 0 ? totalDays : 1);
        // Hours
        setRingProgress('ring-hours', hours, 24);
        // Minutes
        setRingProgress('ring-minutes', minutes, 60);
        // Seconds
        setRingProgress('ring-seconds', seconds, 60);
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

// *** The end *** //

// *** owl carousel *** //

$('.owl-carousel').owlCarousel({
    center: false,
    items:2,
    loop:false,
    margin:10,
    responsive:{
        768:{
            items:1
        }
    }
})

// *** The end *** //


// *** Tank 300 change img color *** //

    const tank300ChangePic = document.querySelectorAll(".tank300ChangePic");
    const tank300ImgColors = document.querySelectorAll("img[alt='tank300colorspic']");

    tank300ChangePic.forEach((button, index) => {
        button.addEventListener("click", () => {
            // remove check from all buttons
            tank300ChangePic.forEach(btn => {
                const iconSpan = btn.querySelector("span");
                iconSpan.classList.add("hidden");
            });

            // show check only on the clicked button
            const iconSpan = button.querySelector("span");
            iconSpan.classList.remove("hidden");

            // hide every images 
            tank300ImgColors.forEach(img => {
                img.classList.add("opacity-0", "invisible");
            });

            // show only images that relate to this button
            tank300ImgColors[index].classList.remove("opacity-0", "invisible");
        });
});

// *** The end *** //


// *** Tank 500 change img color *** //

const tank500ChangePic = document.querySelectorAll(".tank500ChangePic");
const tank500ImgColors = document.querySelectorAll("img[alt='tank500colorspic']");

tank500ChangePic.forEach((button, index) => {
    button.addEventListener("click", () => {
        // remove check from all buttons
        tank500ChangePic.forEach(btn => {
            const iconSpan = btn.querySelector("span");
            iconSpan.classList.add("hidden");
        });

        // show check only on the clicked button
        const iconSpan = button.querySelector("span");
        iconSpan.classList.remove("hidden");

        // hide every images 
        tank500ImgColors.forEach(img => {
            img.classList.add("opacity-0", "invisible");
        });

        // show only images that relate to this button
        tank500ImgColors[index].classList.remove("opacity-0", "invisible");
    });
});

// *** The End *** //