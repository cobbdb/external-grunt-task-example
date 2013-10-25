/**
 * This custom task could be located somewhere
 * outside of the main project repo -
 * ~/tasks for example. This way devs can tinker
 * with custom workflows without having to commit
 * to their branch.
 */
module.exports = function (grunt) {
    grunt.config.set('jshint', {
        options: {
            curly: true,
            eqeqeq: false,
            indent: 4,
            noarg: true,
            nonew: false,
            plusplus: true,
            quotmark: false,
            trailing: true
        },
        default: {
            src: ['source/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Override the provided task from the main
    //   project gruntfile.
    grunt.registerTask('custom-lib-pre', [
        'jshint'
    ]);
};
