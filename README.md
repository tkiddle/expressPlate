Express Plate
============

An MVC boilerplate for NodeJS and Express projects.


Features
--------
* Run multiple sub-apps under one express http server i.e.localhost/public-site, localhost/admin
* Mapped context paths and app folders
* Environment specific configuration
* Environment specific configuration for individual apps
* Configuration object containing path structures and environment specific config


Coming Soon
-----------

* Asset support
* Jade template support
* Shared directory, allowing you to share code and data from multiple apps
* Individual and shared DB support, prefered choice MongoDB


User Guide
----------

* npm install
* nodemon server.js

App Locals
----------

Each app comes configured with a a paths object within app.locals. This contains
paths to your app/shared resources.

paths: {
	shared: {
		root: '/Users/lazyPixel/Sites/expressPlate/apps/shared/',
		views: '/Users/lazyPixel/Sites/expressPlate/apps/shared/views'
	},
	admin: {
		root: '/Users/lazyPixel/Sites/expressPlate/apps/admin',
		views: '/Users/lazyPixel/Sites/expressPlate/apps/admin/views'
	},
	blog: {
		root: '/Users/lazyPixel/Sites/expressPlate/apps/blog',
		views: '/Users/lazyPixel/Sites/expressPlate/apps/blog/views'
	},
	pws: {
		root: '/Users/lazyPixel/Sites/expressPlate/apps/pws',
		views: '/Users/lazyPixel/Sites/expressPlate/apps/pws/views'
	},
	active: {
		root: '/Users/lazyPixel/Sites/expressPlate/apps/pws',
		views: '/Users/lazyPixel/Sites/expressPlate/apps/pws/views'
	 }
}

---------------------------------------------

**N.B. This is a work in progress!**
