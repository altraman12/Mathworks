
var text1 = "`x = (-b +- sqrt(b^2-4ac))/(2a) .`";
var text2 = "`x = (-b +- sqrt(b^2-4ac))/(2a) .`";
var text3 = "`x = (-b +- sqrt(b^2-4ac))/(2a) .`";

function clearTextbox() {
    "use strict";
    document.getElementById("inputBox").value = "";
}

function send() {
    "use strict";
    //document.getElementById("messages").innerHTML += "<br>" + document.getElementById("inputBox").value;
    var space1 = document.getElementById("1");
    var space2 = document.getElementById("2");
    var space3 = document.getElementById("3");
    
    var math1 = MathJax.Hub.getAllJax("messages")[0];
    var math2 = MathJax.Hub.getAllJax("messages")[1];
    var math3 = MathJax.Hub.getAllJax("messages")[2];
    
    text1 = text2;
    text2 = text3;
    text3 = document.getElementById("inputBox").value;
    console.log(text3);
    
    MathJax.Hub.Queue(["Text", math1, text1]);
    MathJax.Hub.Queue(["Text", math2, text2]);
    MathJax.Hub.Queue(["Text", math3, text3]);
    //MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    clearTextbox();
    fireBaseInt();
}




function fireBaseInt(){
    
     
    var text = document.getElementById('inputBox');
    var name = getCookie("chatroomName");
    inviteBaseLobby.push({name: name, text: text}); 
    
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
var menuOpen = false;

var main = function () {
    "use strict";
    $('.open').click(function () {
        if (!menuOpen) {
            $('.menu').animate({
                left: '0px'
            }, 200);

            $('body').animate({
                left: '200px'
            }, 200);
            menuOpen = true;
        } else {
            $('.menu').animate({
                left: '-200px'
            }, 200);

            $('body').animate({
                left: '0px'
            }, 200);
            menuOpen = false;
        }
    });
};

$(document).ready(main);