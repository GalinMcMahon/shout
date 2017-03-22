$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var shoutInput = $("input#shout").val();

    $(".shout").text(shoutInput);

    // $("#caps").show();

    event.preventDefault();
  });
});
