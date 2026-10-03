"use strict";

// Scroll to the element ID when clicking in the navbar
$(".btn-menu").click(function(event) {
  var id = event.target.id;
  $("html,body").animate(
    {
      scrollTop: $("#" + id + ":not(.btn-menu)").offset().top
    },
    "slow"
  );
});

$(document).ready(function() {
  $(".readmore").click(function(e) {
    var element = $(e.target);
    element.siblings("#hide").toggle();
  });
});

function change(el) {
  if (el.value === "Lees Meer") el.value = "Lees Minder";
  else el.value = "Lees Meer";
}

$(document).ready(function() {
  $(".reviewformbutton").click(function() {
    $(".reviewform").toggle();
  });
});
