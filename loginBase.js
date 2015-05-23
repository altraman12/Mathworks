var fb = new Firebase("https://<your-firebase>.firebaseio.com");
$(document).ready(function(){
    $("#submit").click(function(){
        fb.push({ name: document.getElementById('nameBox').value});
    });
});