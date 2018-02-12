// .ready runs immediately, even before the full document finishes loading.
$(document).ready(function(){

// This first function finds the search-field ID from the HTML
// and runs jQuery's equivalent of JavaScript's onKeyUp event handler,
// then starts a new function (nested) to react as the user types characters.
  $("#search-field").on("keyup", function() {
  
  // This second function creates a variable named "characters"
  // and assigns it to a method that negates any text's case,
  // i.e. handling all characters in a case insensitive way.
    var characters = $(this).val().toLowerCase();
    
    // Now jQuery looks for the table-content ID from the HTML table,
    // waits to grab each full row (tr),
    // and runs the filter() function.
    // The filter() function takes an argument,
    // which'll be another nested function.
    $("#table-content tr").filter(function() {
    
    // This third function toggles text (i.e either shows or hides it).
    // The text is again made case insensitive
    // and the .indexOf(characters) > -1 line means
    // jQuery will search through the entire object, which
    // in this case is the table body, and return the full table row (tr)
    // where any character matches what the user has typed.
      $(this).toggle($(this).text().toLowerCase().indexOf(characters) > -1)
    });
  });
});
