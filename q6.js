let highScore = 100;
let yourScore = 50;
let diff = highScore-yourScore;

if (yourScore > highScore) {
    console.log("Congratulations!! Your new high score is " + yourScore)
} else {
    console.log("Try Again. You just need " + diff  +  " to win!")
}