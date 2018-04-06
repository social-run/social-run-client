'use strict'

page('/social-run-client/', ctx => app.Run.fetchAll(app.runView.initIndexPage));

page('/social-run-client/runs/:run_id', ctx => app.Run.fetchOne(ctx, app.runView.initDetailPage));

page('/social-run-client/admin', ctx => app.adminView.initAdminPage(ctx));

page('/social-run-client/about', () => app.aboutView.initAboutPage());

page();