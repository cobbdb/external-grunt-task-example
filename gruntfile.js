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

    grunt.registerTask('custom-lib-pre', []);
    grunt.registerTask('custom-lib-post', []);
    grunt.registerTask('default', [
        'custom-lib-pre',
        'uglify',
        'custom-lib-post'
    ]);

    grunt.loadTasks('./tasks');
};
