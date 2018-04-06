'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://social-run.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Run(rawRunObj) {
    Object.keys(rawRunObj).forEach(key => this[key] = rawRunObj[key]);
  }

  Run.all = [];

  Run.prototype.toHtml = function() {
    let template = Handlebars.compile($('#run-list-template').text());
    return template(this);
  }

  Run.prototype.detailHtml = function () {
    let template = Handlebars.compile($('#run-detail-template').text());
    return template(this);
  }

  Run.loadAll = rows => Run.all = rows.sort((a, b) => a.run_id - b.run_id).map(run => new Run(run));

  Run.fetchAll = callback =>
    $.get(`${ENV.apiUrl}/api/v1/runs`)
      .then(Run.loadAll)
      .then(callback)
      .catch(errorCallback);

  Run.fetchOne = (ctx, callback) =>
    $.get(`${ENV.apiUrl}/api/v1/runs/${ctx.params.run_id}`)
      .then(results => ctx.run = results[0])
      .then(callback)
      .catch(errorCallback);

  module.Run = Run;
})(app)