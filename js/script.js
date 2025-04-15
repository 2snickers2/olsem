document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 3, 
        spaceBetween: 0, 
        loop: true,
        lazy: true,
        speed: 800, 

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },


        breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 0 },  // Mobile
    768: { slidesPerView: 2, spaceBetween: 10 }, // Tablets
    1024: { slidesPerView: 3, spaceBetween: 0 }, // Desktops
}
    });

    console.log("Swiper инициализирован:", swiper);
});
