const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset")


let wagonTrain = (Math.floor(Math.random() * 10) + 1);
console.log(wagonTrain);

let cpCode = Math.floor(Math.random()*90000) + 10000;
console.log(cpCode);


btn.addEventListener("click", function() {

    document.querySelector(".nameOnTiket").innerHTML = "";
    document.querySelector(".offerta").innerText = "";
    document.querySelector(".carrozza").innerHTML = "";
    document.querySelector(".codiceCp").innerHTML = "";
    document.querySelector(".priceTikets").innerHTML = "";


    let name = document.getElementById("name").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;
    let priceVoyage = km * 0.21;

    if ( name == "" || km == "" || age == "test") {
        alert("non hai inserito correttamente i dati, riprovare");
        location.reload();
    } else {
        document.querySelector(".nameOnTiket").append(name);
        document.querySelector(".carrozza").append(wagonTrain);
        document.querySelector(".codiceCp").append(cpCode);
        if ( age < 18 ) {
            priceVoyage -= priceVoyage / 100 * 20;
            document.querySelector(".offerta").innerHTML = "Promo Giovani";

        } else if ( age >= 65 ) {
            priceVoyage -= priceVoyage / 100 * 60;
            document.querySelector(".offerta").innerHTML = "Promo Over 65";
        } else {
            document.querySelector(".offerta").innerHTML = "No promo";
        }
        document.querySelector(".priceTikets").append(priceVoyage.toFixed(2) + " €");
    }
})

reset.addEventListener("click", function(){
        location.reload();
    })
    
