const sliders = document.querySelectorAll(".swiper");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const swiperContainer = entry.target.closest(".swiper-content");
      new Swiper(entry.target, {
        slidesPerView: 3,
        loop: true,
        speed: 800,
        pagination: {
          el: swiperContainer.querySelector(".swiper-pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: swiperContainer.querySelector(".swiper-btn-next"),
          prevEl: swiperContainer.querySelector(".swiper-btn-prev"),
        },
        breakpoints: {
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }
      });
      observer.unobserve(entry.target);
    }
  });
}, options);

sliders.forEach(slider => observer.observe(slider));

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalClose = document.getElementById("modalClose");

    document.querySelectorAll(".swiper-slide__img").forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
