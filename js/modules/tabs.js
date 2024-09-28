function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsPerentSelector,
  activeClass
) {
  // Tabs

  const ref = {
    tabs: document.querySelectorAll(tabsSelector),
    tabsContent: document.querySelectorAll(tabsContentSelector),
    tabsPerent: document.querySelector(tabsPerentSelector),
  };

  function hidenTabContent() {
    ref.tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    ref.tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    ref.tabsContent[i].classList.add("show", "fade");
    ref.tabsContent[i].classList.remove("hide");

    ref.tabs[i].classList.add(activeClass);
  }

  hidenTabContent();
  showTabContent();

  ref.tabsPerent.addEventListener("click", (evt) => {
    const target = evt.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      ref.tabs.forEach((item, i) => {
        if (target === item) {
          hidenTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

export default tabs;
