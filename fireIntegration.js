var inviteBase = new Firebase('https://mathvites.firebaseio-demo.com');
var messageBase = new Firebase('https://mathsages.firebaseio-demo.com/');

inviteBase.on('child_added', function(snapshot) {
        var invite = snapshot.val();
        if(invite.name==getCookie(userName)|invite.name==="open")
        {
            alert("You have been invited to work on" + invite.text);   
        }
});

messageBase.on('child_added', function(snapshot) {
        var message = snapshot.val();
        if(message.name==getCookie(chatroomName))
        {
            alert("You have just received a message, it says:" + message.text);   
        }
});

function sendMessage(words){
    messageBase.push({name: getCookie(chatroomName), text: '{"user":getCookie(userName) , "message":' + words '}' });
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
