interface IKerdes {
    kerdes: string;
    valasz: string;
}

const kerdesekEsValaszok: {[kerdesneve: string]: IKerdes} = {};

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
const kerdesNev = document.querySelector("input")!;
/**
 * A kérdést megjelenítő elem
 */
const kerdesElem = document.querySelector("p")!;
/**
 * A kérdés címét beküldő gomb
 */
const send = document.querySelector("button")!;

/**
 * A feltett kérdésre beírt válasz
 */
const ansInput = document.querySelector("input")!;
/**
 * A feltett kérdésre beírt választ ellenrőzsére beküldő gomb
 */
const sendAnswer = document.querySelector("button")!;

let kerdes: IKerdes | undefined; 

function removeSpaces(str: string) {
    let newStr;

    for (const char of str) {
        if(char != " ") newStr += char;
    }

    return newStr;
}

sendAnswer.addEventListener("click", () => {
    if(!kerdes) return;

    if(removeSpaces(kerdes.valasz) == removeSpaces(ansInput.value)) {
        //Jó volt a válasz
    }else {
        //Rossz volt a válasz
    }
});

send.addEventListener("click", () => {
    kerdes = kerdesekEsValaszok[kerdesNev.value];
    if(!kerdes) {
        //Visszajelez, hogy nincs ilyen kérdés
        return;
    }

    kerdesElem.innerText = kerdes.kerdes;
    kerdesElem.style.display = "block";
    sendAnswer.style.display = "block";
});