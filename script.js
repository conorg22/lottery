/*
This is incomplete. It does not work. There are pieces that work but they are not yet set up to work together.






*/
//everything should go in this function in the end
function play() {


}




//this function will generate random numbers for the lottery
function comNumGen() {
    var comNum1 =
        Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    var comNum2 =
        Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    var comNum3 =
        Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    var comNum4 =
        Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    return [comNum1, comNum2, comNum3, comNum4];
}



//this function will get the player numbers
function getPlayerNums() {



    var playerNums = [];

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;

    playerNums.push(num1, num2, num3, num4);
    vCheck(playerNums);

}
//this function will check to see if the players numbers are valid
function vCheck(playerNums) {

    for (var i = 0; i < playerNums.length; i++) {
        if (playerNums[i] <= 0 || playerNums[i] > 10 || playerNums[i] == undefined || same) {
            document.getElementById("invalidNum").innerHTML = "If you cant follow simple instructions then you probably shouldnt be gambling.";
        }

    }
}
//I am trying to get the following two functions to check and see if any of the players numbers are duplicates
function dblCheck(playerNums, iterator) {
    var same;
    for (var q = 0; q < playerNums.length; q++) {
        if (playerNums[q] !== iterator) {
            playerNums[q] == true;
        }
        if (playerNums[] == iterator) {
            playerNums[] == false;
            same = playerNums[];
        }

    }
}

function chkNums(playerNums) {
    for (var j = 0; j < playerNums.length; j++) {
        var iterator = playerNums[j];
    }
}


//this tracks the amount of money the player has
function playerPurse() {
    var player = 10;
    if ()
}

console.log();
//this will run the play function when the button is pushed
document.getElementById("lets_play").onclick = play;