module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: ['src/js/*.js'],
              dest: 'dist/js/scriptHWJS_20.main.js'
            }
          },
          concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: ['src/css/*.css'],
              dest: 'dist/css/styleHWJS_20.main.css'
            }
          },
          sass: {
            dist: {
              files: [{
                expand: true,
                cwd: './src/sass',
                src: ['*.scss'],
                dest: './src/css',
                ext: '.css'
              }]
            }
          },
          watch: {
            sass: {
              // We watch and compile sass files as normal but don't live reload here
              files: ['./src/sass/*.scss'],
              tasks: ['sass'],
            }
          } 
         /*  uglify: {
              dist: {
                  src: ['dist/js/scriptHWJS_15_1.main.js'],
                  dest: 'dist/js/scriptHWJS_15_1.main.min.js'
              }
          },
         cssmin: {
           dist: {
             src: ['dist/css/styleHWJS_15_1.main.css'],
             dest: 'dist/css/styleHWJS_15_1.main.min.css'
           }
         } */

    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    /* grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin'); */
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
  
    grunt.registerTask('default', ['concat', 'sass']);
  
  };