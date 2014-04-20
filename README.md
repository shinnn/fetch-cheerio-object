# grunt-esnext

[![NPM version](https://badge.fury.io/js/grunt-esnext.svg)](http://badge.fury.io/js/grunt-esnext)
[![Build Status](https://travis-ci.org/shinnn/grunt-esnext.svg?branch=master)](https://travis-ci.org/shinnn/grunt-esnext)
[![Dependency Status](https://david-dm.org/shinnn/grunt-esnext.svg)](https://david-dm.org/shinnn/grunt-esnext)
[![devDependency Status](https://david-dm.org/shinnn/grunt-esnext/dev-status.svg)](https://david-dm.org/shinnn/grunt-esnext#info=devDependencies)

Grunt task for compiling JS.next to JS.today with [esnext](https://github.com/square/esnext)

## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-esnext --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-esnext');
```

## The `esnext` task

Run this task with the `grunt esnext` command.

### Options

[All esnext options](https://github.com/square/esnext/blob/master/lib/index.js#L63-L96) are available except for source map.

## Usage Example

```javascript
grunt.initConfig({
  esnext: {
    options: {
      includeRuntime: true
    },
    dist: {
      src: ['src/main/*.js'],
      dest: 'dist/main.js' 
    }
  }
});

grunt.loadNpmTasks('grunt-esnext');
grunt.registerTask('default', ['esnext']);
```

## TODO

* Support source map

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT license](./LICENSE)
