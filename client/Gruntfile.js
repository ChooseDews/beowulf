module.exports = function(grunt) {


  var javascriptFiles = [

    'bower_components/jquery/dist/jquery.js',


    'bower_components/angular/angular.min.js',

    'bower_components/Materialize/dist/js/materialize.min.js',
    'bower_components/angular-materialize/src/angular-materialize.js',
    


    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-touch/angular-touch.min.js',
    'bower_components/ng-fastclick/dist/index.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    
            'bower_components/ng-file-upload/ng-file-upload-all.min.js',


    'bower_components/ngmap/build/scripts/ng-map.min.js',
    'bower_components/angular-loading-bar/src/loading-bar.js',
    'bower_components/moment/min/moment.min.js',
    'src/root.js', 'src/**/**.js', 'dist/templates.js',
  ];

  var cssFiles = [
    'bower_components/angular-loading-bar/src/loading-bar.css',
    'bower_components/Materialize/dist/css/materialize.min.css',
    'bower_components/SpinKit/css/spinkit.css',
    "src/**/*.css"
  ];




  grunt.initConfig({
    ngtemplates: {
      app: {
        src: '**/**.view.html',
        dest: 'dist/templates.js',
        options: {
          url: function(url) {
            return url.replace('.view.html', '').replace('src/', '');
          },
          htmlmin: {

          }
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: javascriptFiles,
        dest: 'dist/app.js',
      },
    },
    watch: {
      js: {
        files: 'src/**/**.js',
        tasks: ['concat']
      },
      css: {
        files: 'src/**/**.css',
        tasks: ['concat_css']
      },
      view: {
        files: 'src/**/**.view.html',
        tasks: ['ngtemplates', 'concat']
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/app.js': ['dist/app.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/app.css': ['dist/app.css']
        }
      }
    },
    concat_css: {
      options: {
        // Task-specific options go here.
      },
      all: {
        src: cssFiles,
        dest: "dist/app.css"
      },
    }

  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['ngtemplates', 'concat_css', 'concat', 'watch']);
  grunt.registerTask('compile', ['ngtemplates', 'concat_css', 'concat', 'uglify', 'cssmin']);


};