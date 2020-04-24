module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: ['src/js/*.js'],
              dest: 'dist/js/scriptHWJS_15_1.main.js'
            }
          },
          concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: ['src/css/*.css'],
              dest: 'dist/css/styleHWJS_15_1.main.css'
            }
          },
          uglify: {
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
         }

    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
  
  };