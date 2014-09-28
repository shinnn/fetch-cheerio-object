      if (options.generator !== false && options.includeRuntime) {
        runtime = runtime || grunt.file.read(regeneratorRuntimePath);
        ast = recast.parse(runtime, {
          sourceFileName: regeneratorRuntimePath
        });

        options.includeRuntime = false;
      } else {
        ast = recast.parse('');
      }
