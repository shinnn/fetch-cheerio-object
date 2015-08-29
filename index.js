'use strong';

const cheerio = require('cheerio');
const nodeFetch = require('node-fetch');

function fetchResponseToText(fetchResponse) {
  return fetchResponse.text();
}

module.exports = function fetchCheerioObject(url, options) {
  return nodeFetch(url).then(fetchResponseToText).then(function bodyToCheerio(body) {
    return cheerio.load(body, options);
  });
};
