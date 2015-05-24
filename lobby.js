var inviteBase = new Firebase('https://mathvites.firebaseio-demo.com');

document.write("hello");

inviteBase.on('child_added', function(snapshot) {
        var invite = snapshot.val();
        if(invite.name==getCookie(userName)|invite.name==="open")
        {
            document.getElementById("invites") += "<div>You have been invited to" + invite.value + "</div>";   
        }
});