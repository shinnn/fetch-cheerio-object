# fetch-cheerio-object

[![npm version](https://img.shields.io/npm/v/fetch-cheerio-object.svg)](https://www.npmjs.com/package/fetch-cheerio-object)
[![Build Status](https://travis-ci.com/shinnn/fetch-cheerio-object.svg?branch=master)](https://travis-ci.com/shinnn/fetch-cheerio-object)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/fetch-cheerio-object.svg)](https://coveralls.io/github/shinnn/fetch-cheerio-object?branch=master)

A [Node.js](https://nodejs.org/) module to [fetch](https://fetch.spec.whatwg.org/) an HTML and parse it as a [cheerio](https://cheerio.js.org/) object

```javascript
const fetchCheerioObject = require('fetch-cheerio-object');

(async () => {
  const $ = await fetchCheerioObject('https://example.org/');
  $('title').text(); //=> 'Example Domain'
})();
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install fetch-cheerio-object
```

## API

```javascript
const fetchCheerioObject = require('fetch-cheerio-object');
```

### fetchCheerioObject(*url* [, *options*])

*url*: `string`  
*options*: `Object` (directly passed to [`cheerio.load()`](https://github.com/cheeriojs/cheerio#loading))  
Return: `Promise<Object>`

The API is quite similar to the [node-fetch](https://github.com/bitinn/node-fetch)'s. The only difference between them is that *fetch-cheerio-object* parses fetched contents as a [cheerio](https://github.com/cheeriojs/cheerio) object and returns a `Promise` for it.

## License

[ISC License](./LICENSE) © 2017 - 2018 Shinnosuke Watanabe
