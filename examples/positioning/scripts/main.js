$(document).ready(function(){

    // jQuery, look for id dotA and wait for the user to click it.
    $("#dotA").click(function(){

        // Once the user clicks dotA, look for the element with ID "security-desk" and toggle it!
        $("#security-desk").toggle();
    });

    // jQuery, look for id dotB and wait for the user to click it.
    $("#dotB").click(function(){

        // Once the user clicks dotB, look for the element with ID "waiting-area" and toggle it!
        $("#waiting-area").toggle();
    });

});
