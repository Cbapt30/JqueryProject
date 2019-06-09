
$(function() {
  $("#homes form").submit(function()  {
    event.preventDefault();

    var things = $("input:radio[name=things]:checked").val();


    if (things === "Don't have much use for a bunch of things...") {
      result = "Tiny Home";
    } else if (things === "I've got to have the latest and greatest...")  {
      result = "Mansion";
    } else if (things === "I buy what I need when I need it...")  {
      home = "Ranch Style Home"
    } else if (things === "Whatever I need I can make myself...") {
      home = "Log Cabin";
    }
    $("#home form").show(result);
  });
});
