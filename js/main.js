// scroll

const header = document.querySelector(".header");

function scroll() {
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
}

scroll();

// anchors

let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      anchorId = this.getAttribute("href");
      document.querySelector(anchorId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

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

// Burger

const burgerItem = document.querySelector(".burger");
const menu = document.querySelector(".header-nav");
const menuCloseItem = document.querySelector(".header-nav__close");

function burger() {
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header-nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header-nav_active");
  });
}

burger();

// wow

new WOW().init();
