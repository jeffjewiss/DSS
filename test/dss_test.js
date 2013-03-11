'use strict';

var grunt = require('grunt');
var fs = require('fs');

exports.DSS = {
    setup: function(test) {
        test.expect(1);

        var expected = grunt.file.exists('docs/index.html');
        test.equal(expected, false, 'should remove the docs directory using clean');

        test.done();
    },

};

