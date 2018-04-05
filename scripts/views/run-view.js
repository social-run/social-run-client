'use strict';
var app = app || {};

(function(module) {
  $('.icon-menu').on('click', function() {
    $('.nav-menu').slideToggle(350);
  })

  function resetView() {
    $('.container').hide();
    // $('.nav-menu').slideUp(350);
  }

  const runView = {};

  runView.initIndexPage = function() {
    resetView();
    $('.list-view').show();
    $('.run-list').empty();
    module.Run.all.forEach(run => $('.run-list').append(run.toHtml()));
  }

  runView.initDetailPage = function(ctx) {
    let routeIndex=ctx.run_id-1;
    resetView();
    $('.detail-view').show();
    $('.run-detail').empty();
    $('.run-detail').append(app.Run.all[routeIndex].detailHtml());

    console.log(app.Run.all[routeIndex]);
    if(app.Run.all[routeIndex].restaurants){
      console.log(app.Run.all[routeIndex].restaurants);
      let restaurants=app.Run.all[routeIndex].restaurants.split(',');
      console.log(restaurants);
      for(let i=0; i<restaurants.length; i++)
      {
        $('.restaurant-list:last').append(`<li>${restaurants[i]}</li>`)
        console.log($('.restaurant-list:last'));
      }}
    if(app.Run.all[routeIndex].bars){
      console.log(app.Run.all[routeIndex].bars);
      let bars=app.Run.all[routeIndex].bars.split(',');
      console.log(bars);
      for(let i=0; i<bars.length; i++)
      {
        $('.bar-list:last').append(`<li>${bars[i]}</li>`)
        console.log($('.bar-list:last'));

      }} 

    $('#vote-btn').on('click', function(){
      let runID=event.target.getAttribute('data-id');

      $('#vote-btn:last').prop('disabled',true),
      console.log(ENV);
      console.log(runID);
      $.get(`${ENV.apiUrl}/api/v1/runs/${runID}/votes`)
        .then(function(newVotes){console.log(newVotes);
          app.Run.all[routeIndex].votes=newVotes;
          $('#vote-btn').text(`${app.Run.all[routeIndex].votes} likes`)})
        .catch(console.error)
=======

    });
  }
  module.runView = runView;
}
)(app)