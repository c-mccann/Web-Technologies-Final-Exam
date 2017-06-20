/**
 * Created by carlmccann2 on 19/05/2017.
 */
function hint(){
    var colourButton = document.getElementById('colourButton');

    var grid = document.getElementById('gridSpan');
    var gridChildren = grid.childNodes;
    for(var i = 0; i < gridChildren.length; i++){

        var rowChildren = gridChildren[i].childNodes;
        for(var j = 0; j < rowChildren.length; j++) {
            if (colourButton.getAttribute('value') == rowChildren[j].style.backgroundColor) {
                rowChildren[j].style.border = "2px solid yellow"
            }
        }
    }
}

function wipeBorders(){
    var grid = document.getElementById('gridSpan');
    var gridChildren = grid.childNodes;
    for(var i = 0; i < gridChildren.length; i++){

        var rowChildren = gridChildren[i].childNodes;
        for(var j = 0; j < rowChildren.length; j++) {
            rowChildren[j].style.border = "0px";

        }
    }
}