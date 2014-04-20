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
      no_options:
        src: ['test/fixtures/*.js']
        dest: 'test/actual/no-options.js'
      
    mochaTest:
      test:
        options:
          reporter: 'spec'
        src: ['test/*.coffee']

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
    #'mochaTest'
  ]
  
  grunt.registerTask 'default', ['test']
