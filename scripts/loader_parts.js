jQuery.ajax({
  url: "../pages/parts/header.html",
  dataType: "html",
  success: function (response) {
    document.getElementsByClassName("header")[0].innerHTML = response;
  }
});
jQuery.ajax({
  url: "../pages/parts/footer.html",
  dataType: "html",
  success: function (response) {
    document.getElementsByClassName("footer")[0].innerHTML = response;
  }
});
jQuery.ajax({
  url: "../pages/parts/left-menu.html",
  dataType: "html",
  success: function (response) {
    document.getElementsByClassName("left-menu")[0].innerHTML = response;
  }
});
