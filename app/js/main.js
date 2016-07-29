var translation = {
    first: "|&lt; Premier",
    previous: "&lt; Précédent",
    random: "N'importe",
    next: "Prochain &gt;",
    last: "Dernier &gt;|"
};

var t = "assets/";

var n = [
    "le-slogan.png",
    "bd-en-ligne.png",
    "l-austerite.png",
    "la-pub.png",
    "du-boulot.png",
    "charlie.png",
    "un-cafe.png",
    "fiat-luxe.png",
    "c-ta-crere.png",
    "publi-cite.png",
    "time-out.png",
    "de-pis-en-pis.png",
    "toune.png",
    "le-futur-ete.png",
    "c-est-pas-gai.png",
    "le-truc.png",
    "fin-de-partie.png",
    "don-de-soi.png",
    "festival.png",
    "infortunes-du-rire.png",
    "cuisses.png"
];

var prevBtn = document.querySelectorAll(".prev"),
    nextBtn = document.querySelectorAll(".next"),
    firstBtn = document.querySelectorAll(".first"),
    lastBtn = document.querySelectorAll(".last"),
    randomBtn = document.querySelectorAll(".random"),
    preloadFirst = document.querySelector(".preload__first"),
    preloadPrevious = document.querySelector(".preload__previous"),
    preloadRandom = document.querySelector(".preload__random"),
    preloadNext = document.querySelector(".preload__next");
    preloadLast = document.querySelector(".preload__last");
    prevBtn[0].innerHTML = translation.previous, nextBtn[0].innerHTML = translation.next, firstBtn[0].innerHTML = translation.first, lastBtn[0].innerHTML = translation.last, randomBtn[0].innerHTML = translation.random,
    function() {
        var e = n.length - 1,
            r = e,
            o = document.querySelector("#comic"),
            l = function(n, t) {
                for (var e = n.length; e > 0;) e--, n[e].addEventListener("click", t)
            },
            i = function() {
                r -= 1, 0 > r && (r = 0), s()
            },
            a = function() {
                r += 1, r > e && (r = e), s()
            },
            u = function() {
                r = 0, s()
            },
            c = function() {
                r = e, s()
            },
            p = function() {
                r = Math.floor(Math.random() * e), s()
            };
        l(prevBtn, i), l(nextBtn, a), l(firstBtn, u), l(lastBtn, c), l(randomBtn, p);
        var s = function() {
            o.src = t + n[r]
            preload();
        }
        var preload = function() {
            nextComic = r + 1;
            if (nextComic > e) {nextComic = e};
            preloadFirst.src = t + n[0], preloadPrevious.src = t + n[r -1], preloadNext.src = t + n[nextComic], preloadLast.src = t + n[e];
        }
        preload();
    }();
