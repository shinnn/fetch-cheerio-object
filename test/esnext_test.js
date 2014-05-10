/* jshint camelcase: false */

'use strict';

var grunt = require('grunt');
var esprima = require('esprima');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function testFilesAreEqual(test, actual, expected) {
  test.expect(1);
  test.equal(
    grunt.file.read(actual),
    grunt.file.read(expected), 'should be equal');
  test.done();
}

exports.esnext = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  without_classes: function(test) {
    testFilesAreEqual(test, 'test/actual/without_class.js', 'test/fixtures/class.js');
  },
  without_arrow_function: function(test) {
    testFilesAreEqual(test, 'test/actual/without_arrow_function.js', 'test/fixtures/arrow_function.js');
  },
  without_default_params: function(test) {
    testFilesAreEqual(test, 'test/actual/without_default_params.js', 'test/fixtures/default_params.js');
  },
  without_templates: function(test) {
    testFilesAreEqual(test, 'test/actual/without_templates.js', 'test/fixtures/templates.js');
  },
  without_rest: function(test) {
    testFilesAreEqual(test, 'test/actual/without_rest.js', 'test/fixtures/rest.js');
  },
  without_spread: function(test) {
    testFilesAreEqual(test, 'test/actual/without_spread.js', 'test/fixtures/spread.js');
  },
  without_generator: function(test) {
    testFilesAreEqual(test, 'test/actual/without_generator.js', 'test/fixtures/generator.js');
  },
  all_together: function(test) {
    // Run the compiled output through esprima
    // and see if it produces valid ES5 output
    test.expect(1);
    test.doesNotThrow(function() {
      esprima.parse(grunt.file.read('test/actual/all_together.js'));
    });
    test.done();
  },
  all_together_without_runtime: function(test) {
    test.expect(1);
    // TODO: Not sure what the best way to test this is
    test.notEqual(
      grunt.file.read('test/actual/all_together_without_runtime.js'),
      grunt.file.read('test/actual/all_together.js'), 'should not be equal');
    test.done();
  }
};
