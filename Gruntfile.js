/*
 * DSS
 * https://github.com/darcyclarke/DSS
 *
 * Copyright (c) 2013 darcyclarke
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		DSS: {
			options: {
				location: __dirname + '/example/'
			}
		},

                // Before generating any files, remove the docs folder
                clean: {
                        tests: ['docs']
                },

                // Unit tests.
                nodeunit: {
                        tests: ['test/*_test.js']
                },
	});

	grunt.loadTasks('tasks');

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-nodeunit');
        grunt.loadNpmTasks('grunt-contrib-clean');

        // Whenever the "test" task is run, first clean the "docs" dir, then run the
        // DSS task(s), then test the result.
        grunt.registerTask('test', ['clean', 'DSS', 'nodeunit']);

	grunt.registerTask('default', ['DSS']);

};
