# grunt-esnext
# Copyright (c) 2014 Shinnosuke Watanabe
# Licensed under the MIT license.

module.exports = (grunt) ->
  'use strict'
  
  path = require 'path'
  
  { compile } = require 'esnext'
  
  require('time-grunt') grunt
  require('load-grunt-tasks') grunt
    
  grunt.initConfig
    jshint:
      options:
        jshintrc: '.jshintrc'
        reporter: require 'jshint-stylish'
      all: ['{src,test}/*.js']

    clean:
      all: ['test/actual/*', 'tmp']

    esnext:
      no_src:
        src: 'foo/*.js'
        dest: 'bar'
      test:
        src: ['test/test.js']
        dest: 'tmp/test.js'
      without_classes:
        options:
          'class': false
        src: ['test/fixtures/class.js']
        dest: 'test/actual/without_class.js'
      without_arrow_function:
        options:
          arrowFunction: false
          # TODO: es6-default-params also compiles arrow functions
          defaultParams: false
        src: ['test/fixtures/arrow_function.js']
        dest: 'test/actual/without_arrow_function.js'
      without_default_params:
        options:
          defaultParams: false
        src: ['test/fixtures/default_params.js']
        dest: 'test/actual/without_default_params.js'
      without_templates:
        options:
          templates: false
        src: ['test/fixtures/templates.js']
        dest: 'test/actual/without_templates.js'
      without_rest:
        options:
          rest: false
        src: ['test/fixtures/rest.js']
        dest: 'test/actual/without_rest.js'
      without_spread:
        options:
          spread: false
        src: ['test/fixtures/spread.js']
        dest: 'test/actual/without_spread.js'
      without_generator:
        options:
          generator: false
        src: ['test/fixtures/generator.js']
        dest: 'test/actual/without_generator.js'
      all_together_without_runtime:
        src: ['test/fixtures/all_together.js']
        dest: 'test/actual/all_together_without_runtime.js'
      all_together:
        options:
          includeRuntime: true
        src: ['test/fixtures/all_together.js']
        dest: 'test/actual/all_together.js'
      multiple_files_with_runtime:
        options:
          includeRuntime: true
        src: ['test/fixtures/all_together.js', 'test/fixtures/empty.js']
        dest: 'test/actual/multiple_files_with_runtime.js'
      source_map:
        options:
          includeRuntime: true
          sourceMap: true
        src: ['test/fixtures/generator.js']
        dest: 'test/actual/source_map.js'
      source_map_name:
        options:
          sourceMapName: 'test/actual/foo/bar/source_map_name.js.map'
        src: ['test/fixtures/class.js', 'test/fixtures/rest.js']
        dest: 'test/actual/source_map_name.js'
      absolute_map_name:
        options:
          sourceMapName: path.resolve 'test/actual/absolute_source_map_name.js.map'
        src: ['test/fixtures/spread.js']
        dest: 'test/actual/absolute_source_map_name.js'
      inline_source_map:
        options:
          sourceMap: 'inline'
        src: ['test/fixtures/arrow_function.js']
        dest: 'test/actual/inline_source_map.js'

    # Unit tests.
    nodeunit:
      test: ['<%= esnext.test.dest %>']

  grunt.registerTask 'compile', ->
    # Actually load this plugin's task
    grunt.loadTasks 'tasks'
    grunt.task.run ['esnext']

  grunt.registerTask 'test', [
    'clean'
    'jshint'
    'compile'
    'nodeunit'
  ]

  grunt.registerTask 'default', ['test']
