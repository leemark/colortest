module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {   
            dist: {
                src: [
                    'js/libs/*.js', 
                    'js/rgbsliders.js'  
                ],
                dest: 'js/build/production.js',
            }
        },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['js/*.js', 'css/*.scss'],
                tasks: ['concat', 'uglify', 'sass'],
                options: {
                    spawn: false,   
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed' 
                },
                files: {
                    'css/build/styles.css': 'css/styles.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['concat', 'uglify', 'sass']);
};