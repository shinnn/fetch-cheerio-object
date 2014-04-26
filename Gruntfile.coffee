# grunt-esnext
# Copyright (c) 2014 Shinnosuke Watanabe
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
          generator:
            includeRuntime: true
        src: ['test/fixtures/all_together.js']
        dest: 'test/actual/all_together.js'

    # Unit tests.
    nodeunit:
      tests: ['test/*_test.js']

    release: {}
  
  grunt.registerTask 'compile', ->
    { code } = compile grunt.file.read 'src/esnext.js'
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
