
var translation = {
    first: "|&lt; First",
    previous: "&lt; Previous",
    random: "Random",
    next: "Next &gt;",
    last: "Latest &gt;|"
};

var folder = "assets/";

var strips = [
    "slogan.png",
    "bd-en-ligne.png",
    "l-austerite.png",
    "la-pub.png",
    "du-boulot.png",
    "charlie.png",
    "un-cafe.png",
    "fiat-luxe.png",
    "c-ta-crere.png",
    "time-out.png",
    "je-like-pas.png",
    "de-pis-en-pis.png",
    "toune.png",
    "le-futur-ete.png",
    "c-est_pas_gai.png",
    "le-truc.png",
    "fin-de-partie.png",
    "don-de-soi.png",
    "festival.png",
    "infortunes-du-rire.png",
    "cuisses.png",
    "sante.png",
    "automobilistes.png",
    "but-d-jouet.png",
    "qui-rira-le-dernier.png",
    "cadeau.png",
    "universel.png",
    "exil.png",
    "mise-a-jour.png",
    "presentations.png",
    "pornophiles.png",
    "faux-departs.png",
    "zero-probleme.png",
    "tribut.png",
    "chocolat.png",
    "la-joke.png"
];

var prevBtn = document.querySelectorAll(".prev"),
    nextBtn = document.querySelectorAll(".next"),
    firstBtn = document.querySelectorAll(".first"),
    lastBtn = document.querySelectorAll(".last"),
    randomBtn = document.querySelectorAll(".random"),
    preloadFirst = document.querySelector(".preload__first"),
    preloadPrevious = document.querySelector(".preload__previous"),
    preloadRandom = document.querySelector(".preload__random"),
    preloadNext = document.querySelector(".preload__next"),
    preloadLast = document.querySelector(".preload__last");
    prevBtn[0].innerHTML = translation.previous, nextBtn[0].innerHTML = translation.next, firstBtn[0].innerHTML = translation.first, lastBtn[0].innerHTML = translation.last, randomBtn[0].innerHTML = translation.random,
    function() {
        var initialURL = location.pathname;
        var e = strips.length - 1,
            currentStrip = strips.indexOf(initialURL.slice(1) + '.png'),
            comicEl = document.querySelector("#comic"),
            l = function(strips, folder) {
                for (var e = strips.length; e > 0;) e--, strips[e].addEventListener("click", folder)
            },
            i = function() {
                currentStrip -= 1, 0 > currentStrip && (currentStrip = 0), s()
            },
            a = function() {
                currentStrip += 1, currentStrip > e && (currentStrip = e), s()
            },
            u = function() {
                currentStrip = 0, s()
            },
            c = function() {
                currentStrip = e, s()
            },
            p = function() {
                currentStrip = strips.indexOf(preloadRandom.getAttribute("data-file")), randomComic = preCalcRandom(), s();

            };
            if (currentStrip < 0) {currentStrip = e};
        l(prevBtn, i), l(nextBtn, a), l(firstBtn, u), l(lastBtn, c), l(randomBtn, p);
        var s = function() {
            comicEl.src = folder + strips[currentStrip];
            currentURL = strips[currentStrip].slice(0, -4);
            preload();
            history.pushState(null, null, currentURL);
            // Disable first/last and next/previous if last/first comic
            if (currentStrip === e){disableLast()} else {enableLast()};
            if (currentStrip === 0){disableFirst()} else {enableFirst()};
        }
        var disableLast = function () {
            var isLastDisabled = document.querySelector('.disable--last');
            if (!isLastDisabled){
                document.querySelector('.controls').classList.add("disable--last");
            };
        };
        var enableLast = function () {
            var isLastDisabled = document.querySelector('.disable--last');
            if (isLastDisabled){
                document.querySelector('.controls').classList.remove("disable--last");
            };
        };
        var disableFirst = function () {
            var isFirstDisabled = document.querySelector('.disable--first');
            if (!isFirstDisabled){
                document.querySelector('.controls').classList.add("disable--first");
            };
        };
        var enableFirst = function () {
            var isFirstDisabled = document.querySelector('.disable--first');
            if (isFirstDisabled){
                document.querySelector('.controls').classList.remove("disable--first");
            };
        };
        var preCalcRandom = function () {
            var rndNum = currentStrip;
            while (rndNum == currentStrip){
                rndNum = Math.floor(Math.random() * e);
            }
            return rndNum;
        }
        var preload = function() {
            nextComic = currentStrip + 1;
            if (nextComic > e) {nextComic = e};
            previousComic = currentStrip - 1;
            if (previousComic < 0) {previousComic = 0};
            preloadFirst.src = folder + strips[0], preloadPrevious.src = folder + strips[previousComic], preloadRandom.src = folder + strips[randomComic], preloadRandom.setAttribute("data-file", strips[randomComic]), preloadNext.src = folder + strips[nextComic], preloadLast.src = folder + strips[e];
        }
        if (currentStrip != e){s()};
        var randomComic = preCalcRandom();
        preload();
        window.addEventListener('popstate', function(){
            var currentComic = currentStrip;
            var currentURL = location.pathname;
            if (currentURL.slice(1) == '') {
                currentStrip = e;
            } else {
                currentStrip = strips.indexOf(currentURL.slice(1) + '.png');

            }
            if (currentStrip == currentComic) {
                return;
            };

            comicEl.src = t + strips[currentStrip];
            if (currentStrip === e){disableLast()} else {enableLast()};
            if (currentStrip === 0){disableFirst()} else {enableFirst()};
        });
    }();
