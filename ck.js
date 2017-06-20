/**
 * Created by carlmccann2 on 19/05/2017.
 */


$(document).ready(function () {
    if(cookieExists('DT340A_WebTech_Final_Cookie')){
        var json = Cookies.getJSON('DT340A_WebTech_Final_Cookie');
        alert("Name:\t\t" + json.name + "\nHigh Score:\t" + json.score);
    }
});