$(document).keydown(function(event) {
	if(event.ctrlKey && event.keyCode == 69){
        event.preventDefault();

        $( "#ourDiv").contents().unwrap().wrap("<textarea id='ourTextarea'></textarea>");
    }

    if (event.ctrlKey && event.keyCode == 83) {
        event.preventDefault();

        $("#ourTextarea").html($("#ourTextarea").val());
        $("#ourTextarea").contents().unwrap().wrap("<div id='ourDiv'></div>");
    }

    if (event.keyCode == 27) {
        event.preventDefault();
        $("#ourTextarea").contents().unwrap().wrap("<div id='ourDiv'></div>");
    }

 });
