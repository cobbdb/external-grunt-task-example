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
};
