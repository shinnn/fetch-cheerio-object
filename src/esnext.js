// grunt-esnext
// Copyright (c) 2014 Shinnosuke Watanabe
// Licensed under the MIT license

module.exports = function (grunt) {
  'use strict';
  
  var path = require('path');
  var chalk = require('chalk');
  var compile = require('esnext').compile;
  
  var esNextTask = function() {
    // Merge task-specific and/or target-specific options with these defaults
    var options = this.options({
      'class': true,
      defaultParams: true,
      generator: true,
      rest: true,
      spread: true,
      templates: true,
      includeRuntime: false,
      sourceMap: false
    });
    
    // Iterate over all specified src/dest file groups
    this.files.forEach(function (file) {
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
        code += compile(grunt.file.read(f), options);
      });

      // Write the destination file if 'dest' is specified
      grunt.file.write(file.dest, code);
      // Print a success message
      grunt.log.writeln(`File ${ chalk.cyan(file.dest) } created.`);
    });
  };

  grunt.registerMultiTask(
    'esnext',
    'Merge multiple data into a file or Grint config.',
    esNextTask
  );
};
