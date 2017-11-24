# fetch-cheerio-object

[![npm version](https://img.shields.io/npm/v/fetch-cheerio-object.svg)](https://www.npmjs.com/package/fetch-cheerio-object)
[![Build Status](https://travis-ci.org/shinnn/fetch-cheerio-object.svg?branch=master)](https://travis-ci.org/shinnn/fetch-cheerio-object)
[![Build status](https://ci.appveyor.com/api/projects/status/lpw1typ8fwp3ffh6?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/fetch-cheerio-object)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/fetch-cheerio-object.svg)](https://coveralls.io/github/shinnn/fetch-cheerio-object?branch=master)

[Fetch](https://fetch.spec.whatwg.org/) an HTML and parse it as a [cheerio](https://cheeriojs.github.io/cheerio/) object

```javascript
const fetchCheerioObject = require('fetch-cheerio-object');

(async () => {
  const $ = await fetchCheerioObject('https://example.org/');
  $('title').text(); //=> 'Example Domain'
})();
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install fetch-cheerio-object
```

## API

```javascript
const fetchCheerioObject = require('fetch-cheerio-object');
```

### fetchCheerioObject(*url* [, *options*])

*url*: `string`  
*options*: `Object` (directly passed to [`cheerio.load`](https://github.com/cheeriojs/cheerio#loading))  
Return: `Object` ([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise))

The API is quite similar to the [node-fetch](https://github.com/bitinn/node-fetch)'s. The only difference between them is that *fetch-cheerio-object* parses fetched contents as a [cheerio](https://github.com/cheeriojs/cheerio) object and will be [fulfilled](https://promisesaplus.com/#point-26) with the parsed contents as its first argument.

## License

[ISC License](./LICENSE) © 2017 Shinnosuke Watanabe
