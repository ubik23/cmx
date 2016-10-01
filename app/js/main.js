// @source: http://quebeccite.com/js/source.js
/*
@licstart  The following is the entire license notice for the
JavaScript code in this page.

    Copyright (C) 2016  Frederic Guimont

    The JavaScript code in this page is free software: you can
    redistribute it and/or modify it under the terms of the GNU
    Affero General Public License (GNU AGPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version.  The code is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

    As additional permission under GNU AGPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    that code without the copy of the GNU AGPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.

@licend  The above is the entire license notice
for the JavaScript code in this page.
*/

var translation = {
    first: "|&lt; Premier",
    previous: "&lt; Précédent",
    random: "N'importe",
    next: "Prochain &gt;",
    last: "Dernier &gt;|"
};

var t = "assets/";

var n = [
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
    "presentations.png"
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
        var e = n.length - 1,
            r = n.indexOf(initialURL.slice(1) + '.png'),
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
                r = n.indexOf(preloadRandom.getAttribute("data-file")), randomComic = preCalcRandom(), s();

            };
            if (r < 0) {r = e};
        l(prevBtn, i), l(nextBtn, a), l(firstBtn, u), l(lastBtn, c), l(randomBtn, p);
        var s = function() {
            o.src = t + n[r];
            currentURL = n[r].slice(0, -4);
            preload();
            history.pushState(null, null, currentURL);
            // Disable first/last and next/previous if last/first comic
            if (r === e){disableLast()} else {enableLast()};
            if (r === 0){disableFirst()} else {enableFirst()};
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
            var rndNum = r;
            while (rndNum == r){
                rndNum = Math.floor(Math.random() * e);
            }
            return rndNum;
        }
        var preload = function() {
            nextComic = r + 1;
            if (nextComic > e) {nextComic = e};
            previousComic = r - 1;
            if (previousComic < 0) {previousComic = 0};
            preloadFirst.src = t + n[0], preloadPrevious.src = t + n[previousComic], preloadRandom.src = t + n[randomComic], preloadRandom.setAttribute("data-file", n[randomComic]), preloadNext.src = t + n[nextComic], preloadLast.src = t + n[e];
        }
        if (r != e){s()};
        var randomComic = preCalcRandom();
        preload();
        window.addEventListener('popstate', function(){
            var currentComic = r;
            var currentURL = location.pathname;
            if (currentURL.slice(1) == '') {
                r = e;
            } else {
                r = n.indexOf(currentURL.slice(1) + '.png');

            }
            if (r == currentComic) {
                return;
            };

            o.src = t + n[r];
            if (r === e){disableLast()} else {enableLast()};
            if (r === 0){disableFirst()} else {enableFirst()};
        });
    }();
