$(document).ready(function(){
  $("#search-field").on("keyup", function() {
    var characters = $(this).val().toLowerCase();
    $("#table-content tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(characters) > -1)
    });
  });
});
