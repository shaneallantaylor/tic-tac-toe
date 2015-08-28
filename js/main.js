var game_board = ["p","p","p","p","p","p","p","p","p"];
var player_1 = [];
var player_2 = [];

var calculatePlayerScores = function(array) {


  for (i = 0; i < array.length; i++) {
    if (array[i] == "x") {
      player_1.push(i);
    }
  }

  for (i = 0; i < array.length; i++) {
    if (array[i] == "o") {
      player_2.push(i);
    }
  }

}

var checkPlayer = function(pl_arr, player_name) {
  // Top Row win Condition
  if ( (jQuery.inArray(0, pl_arr) > -1 ) && ( jQuery.inArray(1, pl_arr) > -1 ) && ( jQuery.inArray(2, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - TOP ROW!!");
  }
  // middle row win condition
  else if ( (jQuery.inArray(3, pl_arr) > -1 ) && ( jQuery.inArray(4, pl_arr) > -1 ) && ( jQuery.inArray(5, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - MIDDLE ROW!!");
  }
  // bottom row win condition
  else if ( (jQuery.inArray(6, pl_arr) > -1) && ( jQuery.inArray(7, pl_arr) > -1 ) && ( jQuery.inArray(8, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - BOTTOM ROW!!");
  }
  // left column win condition
  else if ( (jQuery.inArray(0, pl_arr) > -1) && ( jQuery.inArray(3, pl_arr) > -1 ) && ( jQuery.inArray(6, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - LEFT COLUMN!!");
  }
  // middle column win condition
  else if ( (jQuery.inArray(1, pl_arr) > -1) && ( jQuery.inArray(4, pl_arr) > -1 ) && ( jQuery.inArray(7, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - MIDDLE COLUMN!!");
  }
  // right column win condition
  else if ( (jQuery.inArray(2, pl_arr) > -1) && ( jQuery.inArray(5, pl_arr) > -1 ) && ( jQuery.inArray(8, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - RIGHT COLUMN!!");
  }
  // top left to bottom right win condition
  else if ( (jQuery.inArray(0, pl_arr) > -1) && ( jQuery.inArray(4, pl_arr) > -1 ) && ( jQuery.inArray(8, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - DIAGNOLLLLL (starting top, ending bottom)!!");
  }
  // bottom left to top right win condition
  else if ( (jQuery.inArray(2, pl_arr) > -1) && ( jQuery.inArray(4, pl_arr) > -1 ) && ( jQuery.inArray(6, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - bottom left to top right!!");
  }
  else {
    console.log("PLAYER has not won yet!");
  }
  console.log("This check was done for " + player_name)
}

$('.board').click(function() {
  game_board[2] = "x";
  console.log("you clicked the board!");
})

calculatePlayerScores(game_board);

checkPlayer(player_1, "Xs");
checkPlayer(player_2, "Os");