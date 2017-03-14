# fetch-cheerio-object

[![NPM version](https://img.shields.io/npm/v/fetch-cheerio-object.svg)](https://www.npmjs.com/package/fetch-cheerio-object)
[![Build Status](https://travis-ci.org/shinnn/fetch-cheerio-object.svg?branch=master)](https://travis-ci.org/shinnn/fetch-cheerio-object)
[![Build status](https://ci.appveyor.com/api/projects/status/lpw1typ8fwp3ffh6?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/fetch-cheerio-object)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/fetch-cheerio-object.svg)](https://coveralls.io/github/shinnn/fetch-cheerio-object?branch=master)

[Fetch](https://fetch.spec.whatwg.org/) a HTML and parse it as a [cheerio](https://cheeriojs.github.io/cheerio/) object

```javascript
const fetchCheerioObject = require('fetch-cheerio-object');

fetchCheerioObject('https://example.com/')
.then($ => console.log($('title').text())) //=> 'Example Domain'
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install fetch-cheerio-object
```

## API

```javascript
const fetchCheerioObject = require('fetch-cheerio-object');
```

### fetchCheerioObject(*url* [, *options*])

*url*: `String`  
*options*: `Object` (directly passed to [`cheerio.load`](https://github.com/cheeriojs/cheerio#loading))  
Return: `Object` ([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise))

The API is quite similar to the [node-fetch](https://github.com/bitinn/node-fetch)'s. The only difference between them is that *fetch-cheerio-object* parses fetched contents as a [cheerio](https://github.com/cheeriojs/cheerio) object and will be [fulfilled](https://promisesaplus.com/#point-26) with the parsed contents as its first argument.

```javascript
const fetchCheerioObject = require('fetch-cheerio-object');

const onFulfilled = $ => console.log($('body').html());
const onRejected = err => console.error('Cannot fetch the contents.');

fetchCheerioObject('https://www.npmjs.com/').then(onFulfilled, onRejected);
```

## License

Copyright (c) 2015 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
