window.addEventListener("DOMContentLoaded", () => {
  // Tabs

  const ref = {
    tabs: document.querySelectorAll(".tabheader__item"),
    tabsContent: document.querySelectorAll(".tabcontent"),
    tabsPerent: document.querySelector(".tabheader__items"),
  };

  function hidenTabContent() {
    ref.tabsContent.forEach((item) => {
      item.classList.add("hiden");
      item.classList.remove("show", "fade");
    });

    ref.tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    ref.tabsContent[i].classList.add("show", "fade");
    ref.tabsContent[i].classList.remove("hiden");

    ref.tabs[i].classList.add("tabheader__item_active");
  }

  hidenTabContent();
  showTabContent();

  ref.tabsPerent.addEventListener("click", (evt) => {
    const target = evt.target;

    if (target && target.classList.contains("tabheader__item")) {
      ref.tabs.forEach((item, i) => {
        if (target == item) {
          hidenTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Timer

  const deadline = "2023-12-31";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);
});
