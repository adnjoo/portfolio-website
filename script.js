window.onload = function () {
  console.log("test");

  scrollSpy("#main-menu", {
    sectionClass: ".scrollspy",
    menuActiveTarget: ".menu-item",
    offset: 100,
    scrollContainer: ".scroll-container",
  });
};
