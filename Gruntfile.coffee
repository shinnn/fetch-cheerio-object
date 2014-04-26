# grunt-merge-data
# Copyright (c) 2013 - 2014 Shinnosuke Watanabe
# Licensed under the MIT license.

module.exports = (grunt) ->
  'use strict'
  
  { compile } = require 'esnext'
  
  require('time-grunt') grunt
  require('load-grunt-tasks') grunt
    
  grunt.initConfig
    jshint:
      options:
        jshintrc: '.jshintrc'
        reporter: require 'jshint-stylish'
      all: ['tasks/*.js']

    clean:
      all: ['test/actual/*', 'tasks']

    esnext:
      without_classes:
        options:
          'class': false
        files:
          'test/actual/without_class.js': ['test/fixtures/class.js']
      without_arrow_function:
        options:
          arrowFunction: false,
          # TODO: es6-default-params also compiles arrow functions
          defaultParams: false
        files:
          'test/actual/without_arrow_function.js': ['test/fixtures/arrow_function.js']
      without_default_params:
        options:
          defaultParams: false
        files:
          'test/actual/without_default_params.js': ['test/fixtures/default_params.js']
      without_templates:
        options:
          templates: false
        files:
          'test/actual/without_templates.js': ['test/fixtures/templates.js']
      without_rest:
        options:
          rest: false
        files:
          'test/actual/without_rest.js': ['test/fixtures/rest.js']
      without_spread:
        options:
          spread: false
        files:
          'test/actual/without_spread.js': ['test/fixtures/spread.js']
      without_generator:
        options:
          generator: false
        files:
          'test/actual/without_generator.js': ['test/fixtures/generator.js']
      all_together_without_runtime:
        files:
          'test/actual/all_together_without_runtime.js': ['test/fixtures/all_together.js']
      all_together:
        options:
          generator:
            includeRuntime: true
        files:
          'test/actual/all_together.js': ['test/fixtures/all_together.js']

    # Unit tests.
    nodeunit:
      tests: ['test/*_test.js'],

    release:
      options: {}
  
  grunt.registerTask 'esnext', ->
  
  grunt.registerTask 'compile', ->
    { code } = compile grunt.file.read('src/esnext.js')
    grunt.file.write 'tasks/esnext.js', code
    
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
