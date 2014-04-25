// grunt-esnext
// Copyright (c) 2014 Shinnosuke Watanabe
// Licensed under the MIT license

'use strict';

var path = require('path');
var chalk = require('chalk');
var compile = require('esnext').compile;

var defaultOptions = {
  'class': true,
  defaultParams: true,
  generator: true,
  rest: true,
  spread: true,
  templates: true,
  includeRuntime: false,
  sourceMap: false
};

module.exports = function (grunt) {
  grunt.registerMultiTask('esnext', 'Transpile JS.next to JS.today', function() {
    var options = this.options(defaultOptions);
  
    // Iterate over all specified src/dest file groups
    this.files.forEach(f => {
      var src = f.src.filter(filepath => {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn(`Source file "${ filepath }" not found.`);
          return false;
        } else {
          return true;
        }
      });
    
      if (src.length === 0) {
        grunt.log.warn(`Destination ${
          chalk.cyan(f.dest)
        } not written because src files were empty.`);
        return;
      }
    
      var code = '';
      src.forEach(filepath => {
        var result = compile(grunt.file.read(filepath), options);
        code += result.code;
      });
      
      grunt.file.write(f.dest, code);
      grunt.log.writeln(`File ${ chalk.cyan(f.dest) } created.`);
    });
  });
};
