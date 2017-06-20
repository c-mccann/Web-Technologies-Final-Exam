/**
 * Created by carlmccann2 on 19/05/2017.
 */

var COLUMNS = 8;
var ROWS = 2;
var BLUE = 'blue';
var RED = 'red';
var GREEN = 'green';
var ORANGE = 'orange';
var GRAY = 'gray';
var COLOURS = [BLUE, RED, GREEN, ORANGE, GRAY];
var CHOSEN =  [false, false, false, false, false]; // This and previous array, i will use to decide if a colour has not
        // been chosen yet. this would be better in a key, value data structure but this will work for now
var everyColour = false;

function loadGrid() {

    for(var i = 0; i < ROWS; i++){
        newRow = document.createElement('div');

        for(var j = 0; j < COLUMNS; j++ ){
            var random = Math.floor(Math.random() * (5 - 0)) + 0;   // random assignment

            if(i == ROWS - 1){    // in last row
                if(j == COLUMNS - 4) { // in last four colour tiles. Here we will enforce colours that arent picked yet
                       for(var i = 0; i < CHOSEN.length; i++){  // this will run for each of the last four tiles
                           if(CHOSEN[i] == false){              // even if every colour has been chosen already. needs tidying
                               random = i;
                               break;
                           }

                       }
                }
            }

            var newColour = document.createElement('div');
            newColour.setAttribute("style", "width: 40px; height: 40px; float: left; background-color: "
                + COLOURS[random] + ";");
            CHOSEN[random] = true;

            newColour.innerHTML = j;
            newColour.onclick = function () {
                if(this.style.backgroundColor == document.getElementById('colourButton').getAttribute('value')){
                    incrementScore();
                    loadColorButtonValue();
                    wipeBorders();
                }
            }

            newRow.appendChild(newColour);
        }
        newRow.appendChild(document.createElement('br'));
        newRow.appendChild(document.createElement('br'));
        newRow.appendChild(document.createElement('br'));
        document.getElementById("gridSpan").appendChild(newRow);
    }


}

function hideStartButton(){
    document.getElementById('startButton').style.display = 'none';
}

function loadColorButtonValue(){
    var random = Math.floor(Math.random() * (5 - 0)) + 0;
    var colorButton = document.getElementById("colourButton");
    while(colorButton.getAttribute('value') == COLOURS[random]){
        random = Math.floor(Math.random() * (5 - 0)) + 0;
    }
    colorButton.setAttribute("value", COLOURS[random]);
}

function incrementScore(){
    var scoreLabel = document.getElementById('scoreLabel');
    scoreLabel.innerHTML = "Score: " + (parseInt(scoreLabel.innerHTML.split(' ')[1]) + 1);
}