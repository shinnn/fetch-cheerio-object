/* jshint camelcase: false */

'use strict';

var path = require('path');

var grunt = require('grunt');
var esprima = require('esprima-fb');

function testFilesAreEqual(test, actual, expected) {
  test.expect(1);
  test.equal(
    grunt.file.read(actual) + '\n',
    grunt.file.read(expected), 'should be equal');
  test.done();
}

exports.esnext = {
  without_classes: test => {
    testFilesAreEqual(test, 'test/actual/without_class.js', 'test/fixtures/class.js');
  },
  without_arrow_function: test => {
    testFilesAreEqual(test, 'test/actual/without_arrow_function.js', 'test/fixtures/arrow_function.js');
  },
  without_default_params: test => {
    testFilesAreEqual(test, 'test/actual/without_default_params.js', 'test/fixtures/default_params.js');
  },
  without_templates: test => {
    testFilesAreEqual(test, 'test/actual/without_templates.js', 'test/fixtures/templates.js');
  },
  without_rest: test => {
    testFilesAreEqual(test, 'test/actual/without_rest.js', 'test/fixtures/rest.js');
  },
  without_spread: test => {
    testFilesAreEqual(test, 'test/actual/without_spread.js', 'test/fixtures/spread.js');
  },
  without_generator: test => {
    testFilesAreEqual(test, 'test/actual/without_generator.js', 'test/fixtures/generator.js');
  },
  all_together: test => {
    // Run the compiled output through esprima
    // and see if it produces valid ES5 output
    test.expect(1);
    test.doesNotThrow(() => {
      esprima.parse(grunt.file.read('test/actual/all_together.js'));
    });
    test.done();
  },
  all_together_without_runtime: test => {
    test.expect(1);
    // TODO: Not sure what the best way to test this is
    test.notEqual(
      grunt.file.read('test/actual/all_together_without_runtime.js'),
      grunt.file.read('test/actual/all_together.js'), 'should not be equal');
    test.done();
  },
  multiple_files_with_runtime: test => {
    test.expect(1);
    test.equal(
      grunt.file.read('test/actual/multiple_files_with_runtime.js').length,
      grunt.file.read('test/actual/all_together.js').length
    );
    test.done();
  },
  source_map: test => {
    test.expect(2);
    test.ok(
      grunt.file.exists('test/actual/source_map.js.map')
    );
    test.ok(
      /\/\/# sourceMappingURL/.test(grunt.file.read('test/actual/source_map.js'))
    );
    test.done();
  },
  source_map_name: test => {
    test.expect(2);
    test.ok(
      grunt.file.exists('test/actual/foo/bar/source_map_name.js.map')
    );
    test.ok(
      /\/\/# sourceMappingURL/.test(grunt.file.read('test/actual/source_map_name.js'))
    );
    test.done();
  },
  absolute_source_map_name: test => {
    test.expect(2);
    test.ok(
      grunt.file.exists('test/actual/absolute_source_map_name.js.map')
    );
    test.ok(
      new RegExp(path.resolve('test/actual/absolute_source_map_name.js.map'))
        .test(grunt.file.read('test/actual/absolute_source_map_name.js'))
    );
    test.done();
  }
};
