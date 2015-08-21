module.exports = function(grunt) {
  'use strict';

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
        files: ['./assets/js/**/*.js', '!./assets/js/build/*.min.js', '!./assets/js/vendor/*.js'],
        tasks: ['concat:js'] // Run these tasks on save
      },
      sass: {
        files: './sass/**/*.scss',
        tasks: ['compass:dev']
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'assets/css'
        }
      }
    },

    concat: {
      js: {
        src: ['./assets/js/**/*.js', '!./assets/js/build/*.min.js', '!./assets/js/vendor/*.js'],
        dest: './assets/js/build/index.min.js'
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
          './assets/js/build/index.min.js': ['./assets/js/build/index.min.js']
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
