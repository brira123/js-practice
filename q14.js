let userAmount = 10000;
let withdrawAmount = 1500;

if (withdrawAmount < userAmount) {
    console.log("Withdrawal SUCCESS! Your new balance is Rs. " + (userAmount - withdrawAmount));
} else {
    console.log("Withdrawal FAILED! Sorry, you do not have sufficient balance.");
}