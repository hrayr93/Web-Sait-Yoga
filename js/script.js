window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", function (event) {
        let target = event.target;

        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    description(i);
                    break;
                }
            }
        }
    });

//--TIMER
    let deadline = "2020-08-25";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            day = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            "total": t,
            "day": day,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };


    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            divAaction = document.querySelector(".timer-action"),
            day = timer.querySelector(".day"),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return "0" + num;
                } else {
                    return num;
                }
            }

            day.textContent = addZero(t.day) + " день";
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                day.textContent = hours.textContent = minutes.textContent = seconds.textContent = "00";
                divAaction.innerHTML = "Акция законцился!";
            }

        }
    }

    setClock("timer", deadline);

//modal window

    function description(a) {
        let more = document.querySelector(".more"),
            overlay = document.querySelector(".overlay"),
            close = document.querySelector(".popup-close"),
            description = document.querySelectorAll(".description");

        more.addEventListener("click", function () {
            overlay.style.display = "block";
            this.classList.add(".more-splash");
            document.body.style.overflow = "hidden";
        });

        close.addEventListener("click", function () {
            overlay.style.display = "none";
            more.classList.remove(".more-splash");
            document.body.style.overflow = "";
            console.log(this);
        });

        description[a].addEventListener("click", function () {

            overlay.style.display = "block";
            this.classList.add(".more-splash");
            document.body.style.overflow = "hidden";

        });

    }


    description(0);

});







