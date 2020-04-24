module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            options: {
              sourceMap: true,
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "esmodules": true
                    }
                  }
                ]
              ]
            },
            dist: {
              files: [{
                  expand: true,
                  cwd: './js/src',
                  src: ['*.js'],
                  dest: './js/dist',
                  ext: '.js',
                  extDot: 'first'
              }]
            }
          },
        concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: ['./js/src/*.js'],
              dest: './js/dist/scriptHWJS_24_2.main.js'
            }
          },
        watch: {
            babel: {
                files: './js/src/*.js',
                tasks: ['babel']
            }
        } 

    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
  
    grunt.registerTask('default', ['babel']);
  
};