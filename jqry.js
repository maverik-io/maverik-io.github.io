

$(document).ready(function () {

  $("#spotify").slideUp();
  $("#record").hide();

  $("#crystalline_curated").click(function () {
    $("#spotify").slideToggle();
    $("#crystalline_curated").toggleClass("open").toggleClass("closed");
    
    
  });
  $("#record_heading").click(function () {
    $("#record").fadeToggle();
    $("#record_heading").toggleClass("open").toggleClass("closed");
  });
});
