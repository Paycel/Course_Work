jQuery.ajax({
  url: "../pages/parts/header.html",
  dataType: "html",
  success: function (response) {
    try {
      document.getElementsByClassName("header")[0].innerHTML = response;
    } catch (TypeError) {
      console.log(TypeError.stackTraceLimit);
    }
  }
});
jQuery.ajax({
  url: "../pages/parts/footer.html",
  dataType: "html",
  success: function (response) {
    try {
      document.getElementsByClassName("footer")[0].innerHTML = response;
    } catch (TypeError) {
      console.log(TypeError.stackTraceLimit);
    }
  }
});
jQuery.ajax({
  url: "../pages/parts/left-menu.html",
  dataType: "html",
  success: function (response) {
    try {
      document.getElementsByClassName("left-menu")[0].innerHTML = response;
      authors.forEach((value, key) => {
        $('#left-menu-drop').find('ul').append(
          "<li class=\"list-group-item float-left\"><a href=\"digests.html?name=" + key + "\">"
          + key + " - Сборники</a></li>\n"
        );
      })
    } catch (TypeError) {
      console.log(TypeError.stackTraceLimit);
    }
  }
});
