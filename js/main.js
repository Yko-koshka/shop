// Tabs

document.querySelectorAll(".discounts-inner__item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");

    document
      .querySelectorAll(".discounts-inner__item")
      .forEach((child) =>
        child.classList.remove("discounts-inner__item-active")
      );
    document
      .querySelectorAll(".discounts-inner__tab")
      .forEach((child) =>
        child.classList.remove("discounts-inner__tab-active")
      );
    item.classList.add("discounts-inner__item-active");
    document.getElementById(id).classList.add("discounts-inner__tab-active");
  })
);

document.querySelector(".discounts-inner__item").click();
