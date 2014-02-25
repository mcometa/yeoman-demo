'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    /* Project Settings */
    yeoman: {
      //Paths
      app: './',
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9000,
          livereload: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      grunt: {
        files: ['Gruntfile.js']
      },
      target: {
        files: ['index.html', 'styles/**/*.css', 'scripts/**/*.js']
      },
      compass: {
        files: ['styles/src/**/*.scss'],
      }
    },

    /*compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'styles/**',
          cssDir: 'css'
        }
      }
    }*/

    compass: {
        options: {
            sassDir: '<%= yeoman.app %>/styles/src',
            cssDir: 'styles',
            importPath: '<%= yeoman.app %>/bower_components',
            httpImagesPath: '/images',
            httpGeneratedImagesPath: '/images/generated',
            httpFontsPath: '/styles/fonts',
            relativeAssets: false,
            assetCacheBuster: false
        },
        server: {
            options: {
                debugInfo: true
            }
        }
    },

    // Remove the .tmp directory which contains the compiled sass files
    clean: [ 'styles/**/*.css', '<% yeoman.app %>.sass-cache/' ],


  });

  //grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('serve', function(){
    // Grunt task for starting a server
    /*'connect',
    'compass',
    'watch',*/
  });

  // Default task.
  grunt.registerTask('default', [
    'connect',
    'clean',
    'compass',
    'watch',
  ]);
};
