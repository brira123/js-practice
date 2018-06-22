let noOfApples = 2;
let noOfMangoes = 4;
let noOfBananas = 8;

let costPerApple = 10;
let costPerMango = 15;
let costPerBanana = 8;
let aliCash = 100;


let totalCost = noOfApples * costPerApple + noOfMangoes * costPerMango + noOfBananas * costPerBanana;

if (totalCost <= aliCash) {
    console.log ("Shopping SUCCESS!!");
} else {
    console.log ("Shopping FAILED! Not enough money");    
}