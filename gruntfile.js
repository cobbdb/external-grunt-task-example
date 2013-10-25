/**
 * This file represents a main gruntfile for
 * a large project. By allowing for external
 * grunt tasks, devs can tinker without having
 * to commit to their branch.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            default: {
                src: ['source/*.js'],
                dest: 'build/release.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // These two empty tasks can be used by
    //   custom tasks to integrate easily into
    //   a larger project.
    grunt.registerTask('custom-lib-pre', []);
    grunt.registerTask('custom-lib-post', []);
    grunt.registerTask('default', [
        'custom-lib-pre',
        'uglify',
        'custom-lib-post'
    ]);

    // By loading last, all custom tasks can
    //   override project-specific tasks.
    grunt.loadTasks('tasks');
};
