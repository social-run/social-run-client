'use strict';

var app = app || {};

(function (module) {
  const adminView = {};

  adminView.initAdminPage = function (ctx) {
    $('.nav-menu').slideUp(350);
    $('.admin-view').show();
    $('#admin-form').on('submit', function(event) {
      event.preventDefault();
      const submittedName = $('#admin-form input')[0].value;
      console.log(submittedName);
      localStorage.removeItem('stored');
      localStorage.setItem('stored',submittedName);
      console.log(localStorage.stored);
      console.log(ENV);
      console.log(ENV.apiUrl);
      //Adds usersubmittedNames to localstorage.
      
      $.ajax({url:`${ENV.apiUrl}/admin`,
        type:'GET',
        headers:{token:submittedName},
      })
        .then(function(respondToken){
          if(respondToken===submittedName)
          {
            console.log(respondToken);
            console.log(submittedName);
            console.log("access granted");
          }
          else{
            console.log(respondToken);
            console.log(submittedName);
            console.log('rejected.')
          })
        .then(res =>{
          if(res===localStorage.stored)
          {console.log('Access Granted')
            localStorage.submittedName = true;
            page('/');
          }
        })
        .catch(() =>page('/'));
    
      adminView.verify = function(ctx, next) {
        if(!localStorage.submittedName) $('.admin').addClass('admin-only');
        else $('.admin').show();
        next();
      }
    }
    )}
  module.adminView = adminView;
})(app);