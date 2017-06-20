/**
 * Created by carlmccann2 on 19/05/2017.
 */

var startTime = 0;
var firstClick = true;
var timeUpdater;

function timer(){
    if(firstClick){
        startTime = new Date;
        firstClick = false;
        timeUpdater = setInterval(updateTimer, 1000);

    }
}

function updateTimer(){
    var timerLabel = document.getElementById('timerLabel');
    var newTime = Math.round((new Date() - startTime) / 1000);


    timerLabel.innerHTML = 'Timer: ' + newTime;
    if(newTime == 60){
        var scoreLabel = document.getElementById("scoreLabel");
        var score = parseInt(scoreLabel.innerHTML.split(' ')[1]);
        clearInterval(timeUpdater);
        alert("Game Over! You scored " + score + " points!")


        if(cookieExists('DT340A_WebTech_Final_Cookie')){
            var json = Cookies.getJSON('DT340A_WebTech_Final_Cookie');
            if(score > parseInt(json.score)){
                var name = prompt("You have broken the high score! Please enter your name: ", json.name);
                if(name){
                    var date = new Date();
                    date.setDate(date.getDate() + 60);
                    createCookie('DT340A_WebTech_Final_Cookie', JSON.stringify(new Record(name, score)), date);
                }
            }
            else{
                alert("You did not beat the high score :(")
            }
        }
        else{
            var name = prompt("First high score! Please enter your name: ", 'name');
            if(name){
                var date = new Date();
                date.setDate(date.getDate() + 60);
                createCookie('DT340A_WebTech_Final_Cookie', JSON.stringify(new Record(name, score)), date);
            }
        }


        $("#timerDiv").hide(3000);
        $("#scoreDiv").hide(3000);
        $("#colourButtonDiv").hide(3000);
        $("#gridSpan").hide(3000);

    }
}