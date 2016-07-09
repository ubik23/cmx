(function() {
    var inv = ["le-slogan.png", "bd-en-ligne.png", "l-austerite.png", "la-pub.png", "du-boulot.png", "charlie.png", "un-cafe.png", "fiat-luxe.png", "c-ta-crere.png", "publi-cite.png", "time-out.png", "de-pis-en-pis.png", "toune.png", "le-futur-ete.png", "c-est-pas-gai.png", "le-truc.png", "fin-de-partie.png", "don-de-soi.png"];
    var folder = "assets/";
    var maxIndex = inv.length - 1;
    var currentIndex = maxIndex;
    var prevBtn = document.querySelectorAll(".prev");
    var nextBtn = document.querySelectorAll(".next");
    var firstBtn = document.querySelectorAll(".first");
    var lastBtn = document.querySelectorAll(".last");
    var randomBtn = document.querySelectorAll(".random");
    var comic = document.querySelector("#comic");
    var AddEventToArray = function(array, func) {
        var i = array.length
        while (i > 0) {
            i--;
            array[i].addEventListener('click', func);
        }
    }
    var prev = function() {
        currentIndex -= 1;
        if (currentIndex < 0) {currentIndex = 0;};
        updateComic();
    };
    var next = function() {
        currentIndex += 1;
        if (currentIndex > maxIndex) {currentIndex = maxIndex;};
        updateComic();
    };
    var first = function() {
        currentIndex = 0;
        updateComic();
    };
    var last = function() {
        currentIndex = maxIndex;
        updateComic();
    };
    var random = function() {
        currentIndex = Math.floor(Math.random()*maxIndex);
        updateComic();
    };
    AddEventToArray(prevBtn, prev);
    AddEventToArray(nextBtn, next);
    AddEventToArray(firstBtn, first);
    AddEventToArray(lastBtn, last);
    AddEventToArray(randomBtn, random);
    var updateComic = function() {
        comic.src = folder + inv[currentIndex];
    };
})()
