$(document).ready(function(){
    $("#submit").click(function(){
        $ajax({
            type: "POST",
			url: "process.php",
			data: {'name': file},
			dataType: "json",	
			success: function(data) {state = data.state;instanse = false;}
        })
    });
});