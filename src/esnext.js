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
  grunt.registerMultiTask(
    'esnext',
    'Merge multiple data into a file or Grint config.',
    function() {
      var options = this.options(defaultOptions);
    
      // Iterate over all specified src/dest file groups
      this.files.forEach(function(file) {
        var src = file.src.filter((filepath) => {
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn(`Source file ${ chalk.cyan(filepath) } not found.`);
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
      
        src.forEach((f) => {
          var result = compile(grunt.file.read(f), options);
          code += result.code;
        });

        // Write the destination file if 'dest' is specified
        grunt.file.write(file.dest, code);
        // Print a success message
        grunt.log.writeln(`File ${ chalk.cyan(file.dest) } created.`);
      });
    }
  );
};
