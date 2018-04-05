'use strict'

page('/', ctx => app.Run.fetchAll(app.runView.initIndexPage));

page('/runs/:run_id', ctx => app.Run.fetchOne(ctx, app.runView.initDetailPage));

page('/admin', () => app.adminView.initAdminPage());

page('/aboutUs', () => app.aboutView.initAboutPage());

page();