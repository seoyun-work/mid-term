$(document).ready(function () {
  console.log("working");
  $(document).on("mousemove", function (event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    var imgHalfWidth = $(".knife").width() / 2;
    var imgHalfHeight = $(".knife").height() / 2;

    $(".knife").css("top", mouseY - imgHalfHeight);
    $(".knife").css("left", mouseX - imgHalfWidth);
  });
});
