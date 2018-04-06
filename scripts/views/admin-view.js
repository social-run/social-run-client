'use strict';

var app = app || {};

(function (module) {
  const adminView = {};

  adminView.initAdminPage = function (ctx, next) {
    $('.admin-view').show();

    $('#admin-form').on('submit', function(event) {
      event.preventDefault();
      let token = event.target.passphrase.value;


      //Adds userTokens to localstorage.  
      /*$.get(`${ENV.apiURL})/admin`, {token})
        .then(res =>{
          localStorage.token = true;
          page('/');
        })
        .catch(() =>page('/'));*/
    })
  };

  adminView.verify = function(ctx, next) {
    if(!localStorage.token) $('.admin').addClass('admin-only');
    else $('.admin').show();
    next();
  }

  module.adminView = adminView;
})(app)