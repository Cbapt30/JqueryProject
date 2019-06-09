$(function() {
  var result;
  $("form#homes").submit(function(event)  {
    event.preventDefault();

    var things = $("input:radio[name=things]:checked").val();

    if (things === "Don't have much use for a bunch of things..") {
      home = "Tiny Home";
    }
  }
}
