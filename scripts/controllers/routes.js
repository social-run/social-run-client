'use strict'

page('/', ctx => app.Run.fetchAll(app.runView.initIndexPage));

page('/runs/:run_id', ctx => app.Run.fetchOne(ctx, app.runView.initDetailPage));

page('/admin', ctx => app.adminView.initAdminPage(ctx));

page('/about', () => app.aboutView.initAboutPage());

page();