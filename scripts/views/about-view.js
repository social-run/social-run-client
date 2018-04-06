'use strict';

var app = app || {};

(function(module) {

  function resetView() {
    $('.container').hide();
    $('.nav-menu').slideUp(350);
  }

  const aboutView = {};

  aboutView.initAboutPage = function() {
    resetView();
    $('.about-view').show();
  }

  module.aboutView = aboutView;
})(app)