'use strict';

var app = app || {};

(function (module) {
  const adminView = {};

  adminView.initAdminPage = function (ctx) {
    console.log('admin init')
    $('.nav-menu').slideUp(350);
    $('.admin-view').show();
    $('#admin-form').on('submit', function(event) {
      event.preventDefault();
      const submittedName = $('#admin-form input')[0].value;
      //Adds usersubmittedNames to localstorage.
      localStorage.removeItem('username');
      console.log(ENV.apiUrl);
      $.ajax({url:`${ENV.apiUrl}/admin`,
        type:'GET',
        headers:{token:submittedName}
      }).then(function(respondToken){
        console.log('respondToken');
        if(respondToken===submittedName)
        {
          localStorage.username=submittedName;
          console.log('Access Granted');
          localStorage.submittedName = true;
        }
        else{
          console.log(respondToken);
          console.log(submittedName);
          console.log('rejected.');
        }})
        .catch(console.error);
    });

    adminView.verify = function(ctx, next) {
      if(!localStorage.submittedName) $('.admin').addClass('admin-only');
      else $('.admin').show();
      next();
    }
  }
  module.adminView = adminView;}
)(app);