function mainReadMore() {
  const readmoreBtn = document.getElementById("readmoreBtn");
  let readmoreToggle = 1;
  readmoreBtn.addEventListener("click", function readmore() {
    if (readmoreToggle == 1) {
      document
        .querySelector(".definition__text_visible768")
        .classList.add("display");
      document
        .querySelector(".definition__text_visible1120")
        .classList.add("display");
      document
        .querySelector(".definition__text_invisible")
        .classList.add("display");
      readmoreBtn.innerText = "Скрыть";
      readmoreToggle = 0;
      console.log(readmoreToggle);
    } else {
      document
        .querySelector(".definition__text_visible768")
        .classList.remove("display");
      document
        .querySelector(".definition__text_visible1120")
        .classList.remove("display");
      document
        .querySelector(".definition__text_invisible")
        .classList.remove("display");
      readmoreBtn.innerText = "Читать далее";
      readmoreToggle = 1;
    }
  });
}

export { mainReadMore };
