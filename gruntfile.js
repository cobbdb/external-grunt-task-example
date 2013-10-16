module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: [
                    './source/*.js'
                ],
                tasks: [
                    'jshint'
                ]
            }
        }
    });

    grunt.loadTasks('./tasks');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
