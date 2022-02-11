import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
const sliders = document.querySelectorAll(".swiper");
const mySwipers = [];

function heightGrow() {
  const brendToogle = document.getElementById("brendToogle");
  let toogle = true;
  brendToogle.addEventListener("click", function () {
    if (toogle) {
      document.querySelector(".swiper-wrapper").classList.add("opened");
      brendToogle.innerText = "Скрыть";
      toogle = false;
    } else {
      document.querySelector(".swiper-wrapper").classList.remove("opened");
      brendToogle.innerText = "Показать всё";
      toogle = true;
    }
  });
}

function heightGrowTwo() {
  const brendToogleTwo = document.getElementById("brendToogleTwo");
  let toogle = true;
  brendToogleTwo.addEventListener("click", function () {
    if (toogle) {
      document.querySelector(".swiper-wrapper_high").classList.add("opened");
      brendToogleTwo.innerText = "Скрыть";
      toogle = false;
    } else {
      document.querySelector(".swiper-wrapper_high").classList.remove("opened");
      brendToogleTwo.innerText = "Показать всё";
      toogle = true;
    }
  });
}

(function () {
  var throttle = function (type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle("resize", "optimizedResize");
})();

function sliderinit() {
  // Создаем все слайдеры
  sliders.forEach((slider, index) => {
    console.log(slider);
    if (!slider.swiper) {
      mySwipers[index] = new Swiper(slider, {
        spaceBetween: 32,
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },
          400: {
            slidesPerView: 1.7,
            spaceBetween: 15,
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is <= 640px
          640: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
        },
        watchOverflow: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
    }
  });
}

function sliderDestroy() {
  // удаляем все слайдеры

  sliders.forEach((slider, index) => {
    if (slider.swiper) mySwipers[index].destroy(true, true);
  });
}
function checker() {
  // >768 удаялем, в другом случа инициализируем, если до этого не инициализировали
  if (window.matchMedia("(min-width: 768px)").matches) {
    // >768 удаляем слайдеры если такие есть
    sliderDestroy();
  } else {
    sliderinit();
  }
}

window.addEventListener("optimizedResize", () => {
  checker();
});

export { checker, heightGrow, heightGrowTwo, sliderDestroy, sliderinit };
