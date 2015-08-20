module.exports = function(grunt) {
  'use strict';

  var compassConfig, compassTargets, compassTasks, compassFiles;

  function compassInit() {

    var config = {},
        appPaths = grunt.file.readJSON('apps/mounts.json');

    config.targets = {};
    config.tasks = [];
    config.files = [];

    config.targets.clean = {
      options: {
        clean: false
      }
    };

    // Sass and CSS for dynamic apps
    for(var i = 0, len = appPaths.length; i < len; i++) {

      var task = 'compass:' + appPaths[i].directory;
      var file = './apps/' + appPaths[i].directory + '/views/sass/*.scss';

      config.tasks.push(task);
      config.files.push(file);

      config.targets[appPaths[i].directory] = {
        options: {
          sassDir: ['./apps/' + appPaths[i].directory + '/views/sass'],
          cssDir: ['./apps/' + appPaths[i].directory + '/views/assets/css'],
          environment: 'development',
          force: true
        }
      }
    }

    // Sass and CSS for shared assets
    config.tasks.push('compass:shared');
    config.files.push('./apps/shared/views/sass/*.scss');

    config.targets.shared = {
      options: {
        sassDir: ['./apps/shared/views/sass'],
        cssDir: ['./apps/shared/views/assets/css'],
        environment: 'development',
        force: true
      }
    }

    return config;
  }

  compassConfig = compassInit();
  compassTargets = compassConfig.targets;
  compassTasks = compassConfig.tasks;
  compassFiles = compassConfig.files;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: {
      body:  '/*!\n' +
            ' * <%= pkg.name %>\n' +
            ' * <%= pkg.description %>\n' +
            ' * <%= pkg.url %>\n' +
            ' * @version <%= pkg.version %>\n' +
            ' * @author <%= pkg.author %>\n' +
            ' */\n'
    },

    watch: {
      scripts: {
        files: ['./apps/**/views/js/**/*.js', '!./apps/**/views/js/build/*.min.js', '!./apps/**/views/js/vendor/*.js'],
        tasks: ['concat:js'] // Run these tasks on save
      },
      sass: {
        files: compassFiles,
        tasks: compassTasks
      }
    },

    compass: compassTargets,

    concat: {
      js: {
        src: ['./apps/**/views/js/**/*.js', '!./apps/**/views/js/build/*.min.js', '!./apps/**/views/js/vendor/*.js'],
        dest: './apps/**/views/js/build/index.min.js'
      },

      options: {
        stripBanners: false,
        nonull: true,
        banner: '<%= banner.body %>'
      }
    },

    uglify: {
      js: {
        files: {
          './js/build/index.min.js': ['./js/build/index.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', 'watch');
  grunt.registerTask('build', ['concat', 'uglify']);
};
