//randomize number 1-6
var firstRandomNumber = Math.floor(Math.random()* 6) +1

//dice images 1-6
const firstDiceOption = `images/dice`+ firstRandomNumber + `.png`

//randomize number 1-6
var secondRandomNumber = Math.floor(Math.random()* 6) +1

//dice images 1-6
const secondDiceOption = "images/dice" + secondRandomNumber + ".png"

document.querySelectorAll("img")[0].setAttribute("src",firstDiceOption)
document.querySelectorAll("img")[1].setAttribute("src",secondDiceOption)

if(firstDiceOption>secondDiceOption){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}

 else if(firstDiceOption<secondDiceOption){
    document.querySelector("h1").innerHTML = "Player 2 wins"
}

else{
    document.querySelector("h1").innerHTML = "A draw!"
}



