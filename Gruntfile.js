module.exports = function(grunt) {

    grunt.initConfig({
        "browserify": {
          dist: {
            files: {
              './dist/build.js': ['./src/**/*.js'],
            },
            options: {
              transform: ['babelify']
            }
          }
        },
        watch: {
            scripts: {
                files: 'src/*.js',
                tasks: ["babel"]
            }            
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["browserify"]);
};