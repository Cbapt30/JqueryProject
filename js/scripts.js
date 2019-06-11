
$(function() {
  $("#homes").submit(function()  {
        event.preventDefault();

    var things = $("input:radio[name=things]:checked").val();
    var result;

    if (things === "Don't have much use for a bunch of things...") {
      result = "Tiny Home";
    } else if (things === "I've got to have the latest and greatest...")  {
      result = "Mansion";
    } else if (things === "I buy what I need when I need it...")  {
      result = "Ranch Style Home"
    } else if (things === "Whatever I need I can make myself...") {
      result = "Log Cabin";
    }
    console.log(result);
    $("#output").text(result);
    // $("#homes").hide();

  });
});
