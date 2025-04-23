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
    200: { slidesPerView: 1, spaceBetween: 0 },         
    320: { slidesPerView: 1, spaceBetween: 0 },  
    500: { slidesPerView: 2, spaceBetween: 5 },  
    768: { slidesPerView: 2, spaceBetween: 10 }, 
    1024: { slidesPerView: 3, spaceBetween: 0 }, 
}
    });

    console.log("Swiper инициализирован:", swiper);
});
