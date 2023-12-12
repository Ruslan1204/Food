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
    (let = days), hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
    if (t <= 0) {
      (days = 0), (hours = 0), (minutes = 0), (seconds = 0);
    } else {
      (days = Math.floor(t / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((t / 1000 / 60) % 60)),
        (seconds = Math.floor((t / 1000) % 60));
    }

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

  // Modal

  const openModalBtn = document.querySelectorAll("[data-modal]");
  const modal = document.querySelector(".modal");
  const closeModalBtn = document.querySelector("[data-close]");

  openModalBtn.forEach((btn) => btn.addEventListener("click", openModal));
  closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    modal.classList.toggle("show");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimeId);
  }

  function closeModal() {
    modal.classList.toggle("show");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (evt) => {
    if (evt.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimeId = setTimeout(openModal, 3000);

  window.addEventListener("scroll", () => {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
    }
  });
});
