var kerdesekEsValaszok = {};
kerdesekEsValaszok["Pedig az enyém"] = {
    kerdes: "A tiéd, mégis mások használják.",
    valasz: "A nevem"
};
kerdesekEsValaszok["Puzzle 2"] = {
    kerdes: "Ma egy vagyok, holnap több. Nehéz tárolni, ám nem foglalok helyet. Nem láthatsz, de láttál. Mi vagyok?",
    valasz: "Emlék"
};
kerdesekEsValaszok["Puzzle 3"] = {
    kerdes: "Egynek értéktelen, kéttőnek felbecsülhetetlen.",
    valasz: "Szerelem"
};
kerdesekEsValaszok["Puzzle 4"] = {
    kerdes: "Ha táncra perdülök partneremmel, hamu marad csupán.",
    valasz: "Tűz"
};
kerdesekEsValaszok["Puzzle 5"] = {
    kerdes: "Láncoddal magadhoz kötsz, s talpad alatt járok.",
    valasz: "Árnyék"
};
kerdesekEsValaszok["Puzzle 6"] = {
    kerdes: "Mi az, minek a gyökere lappang, a fáknál magasabb, fel-fel az égre tör és mégis sose nő?",
    valasz: "Hegy"
};
kerdesekEsValaszok["Puzzle 7"] = {
    kerdes: "Fog nélkül kirág. Szárnyatlan, lebeg. Hang nélkül kiált. Szájatlan, hebeg.",
    valasz: "Szél"
};
kerdesekEsValaszok["Puzzle 8"] = {
    kerdes: "Piros dombon 32 fehér ló.  Abrakolnak, dabrakolnak, míg végül rajtuk a békjó.",
    valasz: "Fogak"
};
kerdesekEsValaszok["Puzzle 9"] = {
    kerdes: "Pánt, kulcs, fedél nélküli doboz, de a kincse benn arany-os.",
    valasz: "Tojás"
};
kerdesekEsValaszok["Puzzle 10"] = {
    kerdes: "Mindent befal, pofája tátott.\nSzárnyast, szárnyatlant, fát, virágot,\nVasat csócsál, acélt ropogtat,\nfogával követ is kikoptat.\nVárost dönt, elveszejt királyt,\nsok magas hegyet földbe vájt.",
    valasz: "Idő"
};
/**
 * A keresendő kérdés neve
 */
var kerdesNev = document.querySelector("input");
/**
 * A kérdést megjelenítő elem
 */
var kerdesElem = document.querySelector("p");
/**
 * A kérdés címét beküldő gomb
 */
var send = document.querySelector("button");
/**
 * A feltett kérdésre beírt válasz
 */
var ansInput = document.querySelector("input");
/**
 * A feltett kérdésre beírt választ ellenrőzsére beküldő gomb
 */
var sendAnswer = document.querySelector("button");
var kerdes;
function removeSpaces(str) {
    var newStr;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char != " ")
            newStr += char;
    }
    return newStr;
}
sendAnswer.addEventListener("click", function () {
    if (!kerdes)
        return;
    if (removeSpaces(kerdes.valasz) == removeSpaces(ansInput.value)) {
        //Jó volt a válasz
    }
    else {
        //Rossz volt a válasz
    }
});
send.addEventListener("click", function () {
    kerdes = kerdesekEsValaszok[kerdesNev.value];
    if (!kerdes) {
        //Visszajelez, hogy nincs ilyen kérdés
        return;
    }
    kerdesElem.innerText = kerdes.kerdes;
    kerdesElem.style.display = "block";
    sendAnswer.style.display = "block";
});
