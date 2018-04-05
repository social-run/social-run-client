'use strict'

page('/', ctx => app.Run.fetchAll(app.runView.initIndexPage));

page('/runs/:run_id', ctx => app.Run.fetchOne(ctx, app.runView.initDetailPage));

page('/admin', ctx => app.adminView.initAdminPage(ctx));

page('/aboutUs', () => app.aboutView.initAboutPage());

page();