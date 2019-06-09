$(function() {
  $("form#homes").submit(function(event)  {
    event.preventDefault();

    var things = $("input:radio[name=things]:checked").val();

    if (things === "Don't have much use for a bunch of things...") {
      home = "Tiny Home";
    } else if (things === "I've got to have the latest and greatest...")  {
      home = "Mansion";
    } else if (things === "I buy what I need when I need it...")  {
      home = "Ranch Style Home"
    } else if (things === "Whatever I need I can make myself...") {
      home = "Log Cabin";
    }

    $("#result").show();


  });
});
