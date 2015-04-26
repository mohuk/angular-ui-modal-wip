module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Load all of the options from the options folder
    grunt.initConfig({
        connect:{
            server:{
                options: {
                    port: 7030,
                    base: 'src',
                    hostname: 'localhost',
                    keepalive:true,
                    open:true
                }
            }
        }
    });

    grunt.registerTask('serve', [
        'connect'
    ]);
};
