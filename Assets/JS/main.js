function toss() {
    return Math.floor(Math.random() * (7 - 1)) + 1;
}
function displayDice(num) {
    console.log(num);
    switch (num) { 
        case 1:
            document.getElementById("mat").innerHTML += "<div class='die one'></div>";
            break;
        case 2:
            document.getElementById("mat").innerHTML += "<div class='die two'></div>";
            break;
        case 3:
            document.getElementById("mat").innerHTML += "<div class='die three'></div>";
            break;
        case 4:
            document.getElementById("mat").innerHTML += "<div class='die four'></div>";
            break;
        case 5:
            document.getElementById("mat").innerHTML += "<div class='die five'></div>";
            break;
        case 6:
            document.getElementById("mat").innerHTML += "<div class='die six'></div>";
            break;
    }
}

function roll(){
    var dice = document.getElementById("dice").value;
    if (dice){
        document.getElementById("mat").innerHTML= "";
        for (var i = 0; i < Number(dice); i++) {
            displayDice(toss());
        }
        
    } else {
        document.getElementById("mat").innerHTML = "error, not dice";
    }
}