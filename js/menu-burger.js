"use strict";

(() => {

  const page = document.querySelector(`.page`);
  const mainNav = document.querySelector(`.main-nav`);
  const mainNavList = mainNav.querySelector(`ul`);
  const burgerBtn = mainNav.querySelector(`.burger`);

  if (page !== null && mainNav !== null && mainNavList !== null && burgerBtn !== null) {
    burgerBtn.classList.add(`burger--closed`);
    mainNav.classList.add(`main-nav--closed`);

    const onOpenMenuClick = () => {
      closeMenu();
    };

    const onEscPress = (evt) => {
      if (evt.key === `Escape`) {
        evt.preventDefault();
        closeMenu();
      }
    };

    const openMenu = () => {
      page.classList.add(`page--scroll`);
      burgerBtn.classList.remove(`burger--closed`);
      burgerBtn.classList.add(`burger--opened`);
      mainNav.classList.remove(`main-nav--closed`);
      mainNav.classList.add(`main-nav--opened`);
      mainNavList.addEventListener(`click`, onOpenMenuClick);
      document.addEventListener(`keydown`, onEscPress);
    };

    const closeMenu = () => {
      page.classList.remove(`page--scroll`);
      burgerBtn.classList.remove(`burger--opened`);
      burgerBtn.classList.add(`burger--closed`);
      mainNav.classList.remove(`main-nav--opened`);
      mainNav.classList.add(`main-nav--closed`);
      mainNavList.removeEventListener(`click`, onOpenMenuClick);
      document.removeEventListener(`keydown`, onEscPress);
    };

    burgerBtn.addEventListener(`click`, () => {
      if (mainNav.classList.contains(`main-nav--opened`)) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
})();
