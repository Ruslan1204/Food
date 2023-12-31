function tabs() {
  // Tabs

  const ref = {
    tabs: document.querySelectorAll(".tabheader__item"),
    tabsContent: document.querySelectorAll(".tabcontent"),
    tabsPerent: document.querySelector(".tabheader__items"),
  };

  function hidenTabContent() {
    ref.tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    ref.tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    ref.tabsContent[i].classList.add("show", "fade");
    ref.tabsContent[i].classList.remove("hide");

    ref.tabs[i].classList.add("tabheader__item_active");
  }

  hidenTabContent();
  showTabContent();

  ref.tabsPerent.addEventListener("click", (evt) => {
    const target = evt.target;

    if (target && target.classList.contains("tabheader__item")) {
      ref.tabs.forEach((item, i) => {
        if (target === item) {
          hidenTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

module.exports = tabs;