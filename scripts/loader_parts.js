init = function () {}
$(document).ready(function() {
  jQuery.ajax({
    url: "pages/parts/header.html",
    dataType: "html",
    success: function (response) {
      try {
        document.getElementsByClassName("header")[0].innerHTML = response;
      } catch (TypeError) {
        console.log(TypeError.stackTraceLimit);
      }
    },
    complete: function () {
      init();
    }
  });
  jQuery.ajax({
    url: "pages/parts/footer.html",
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
    url: "pages/parts/left-menu.html",
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
});
$(function () {
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })
})
$(window).scroll(function () {
  if ($(this).scrollTop() > 200 &&
    ($(document).height() - $('.footer').height() - $(this).scrollTop() > 1300 ||
      $(document).height() - $('.left-menu').height() - $(this).scrollTop() > 1300)) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});
'use strict';
var Toast = function (element, config) {
  var
    _this = this,
    _element = element,
    _config = {
      autohide: true,
      delay: 5000
    };
  for (var prop in config) {
    _config[prop] = config[prop];
  }
  Object.defineProperty(this, 'element', {
    get: function () {
      return _element;
    }
  });
  Object.defineProperty(this, 'config', {
    get: function () {
      return _config;
    }
  });
  _element.addEventListener('click', function (e) {
    if (e.target.classList.contains('toast__close')) {
      _this.hide();
    }
  });
}
Toast.prototype = {
  show: function () {
    var _this = this;
    this.element.classList.add('toast_show');
    if (this.config.autohide) {
      setTimeout(function () {
        _this.hide();
      }, this.config.delay)
    }
  },
  hide: function () {
    var event = new CustomEvent('hidden.toast', {detail: {toast: this.element}});
    this.element.classList.remove('toast_show');
    document.dispatchEvent(event);
  }
};
Toast.create = function (text, color) {
  var
    fragment = document.createDocumentFragment(),
    toast = document.createElement('div'),
    toastClose = document.createElement('button');
  toast.classList.add('toast');
  toast.style.backgroundColor = 'rgba(' + parseInt(color.substr(1, 2), 16) + ',' + parseInt(color.substr(3, 2), 16) + ',' + parseInt(color.substr(5, 2), 16) + ',0.5)';
  toast.textContent = text;
  toastClose.classList.add('toast__close');
  toastClose.setAttribute('type', 'button');
  toastClose.textContent = '×';
  toast.appendChild(toastClose);
  fragment.appendChild(toast);
  return fragment;
};
Toast.add = function (params) {
  var config = {
    header: 'Название заголовка',
    text: 'Текст сообщения...',
    color: '#ffffff',
    autohide: true,
    delay: 5000
  };
  if (params !== undefined) {
    for (var item in params) {
      config[item] = params[item];
    }
  }
  if (!document.querySelector('.toasts')) {
    var container = document.createElement('div');
    container.classList.add('toasts');
    container.style.cssText = 'position: fixed; top: 15px; right: 15px; width: 250px;';
    document.body.appendChild(container);
  }
  document.querySelector('.toasts').appendChild(Toast.create(config.text, config.color));
  var toasts = document.querySelectorAll('.toast');
  var toast = new Toast(toasts[toasts.length - 1], {autohide: config.autohide, delay: config.delay});
  toast.show();
  return toast;
}
document.addEventListener('hidden.toast', function (e) {
  var element = e.detail.toast;
  if (element) {
    element.parentNode.removeChild(element);
  }
});

function send_form() {
  Toast.add({
    text: 'Вы успешно подписаны! Спасибо!',
    color: '#25ff00',
    autohide: true,
    delay: 5000
  });
}
