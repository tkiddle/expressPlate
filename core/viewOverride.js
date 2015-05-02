var fs = require('fs'),
    path = require('path');

module.exports = function(app, config) {

  // Split this code up in to two functions
  // Return one function

  app.use( function(request, response, next) {

    var _render = response.render,
        appViewsPath = app.settings.views,
        sharedViewsPath = path.join(config.paths.apps.root, 'shared/views/'),
        stats, viewTplPath, viewPath;

    response.render = function( view, options, fn ) {

      viewTplPath = path.join(appViewsPath, view + '.jade');

      try {

        fs.statSync(viewTplPath).isFile();
        viewPath = view;

      }
      catch(e) {

        viewPath = path.join(sharedViewsPath, view + '.jade');

      }
      _render.call( this, viewPath, options, fn );
    }

    next();
  });

}


