const feedbackCircles = document.getElementsByClassName(
  "feedback-slider__feedback"
);

const initCircleTypes = () => {
  for (const circle of feedbackCircles) {
    new CircleType(circle);
  }
};

const feedbackSlider = new Swiper(".feedback-slider", {
  loop: true,
  slidesPerView: "auto",
  loopedSlides: 3,
  centeredSlides: true,
  spaceBetween: 201,
  navigation: {
    nextEl: ".feedback-slider__button-next",
    prevEl: ".feedback-slider__button-prev",
  },
});

feedbackSlider.on("slideChangeTransitionStart", () => {
  initCircleTypes();
});

const wareSlider = new Swiper(".ware-slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".ware-slider__button-next",
    prevEl: ".ware-slider__button-prev",
  },
});

initCircleTypes();
