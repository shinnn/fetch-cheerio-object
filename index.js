'use strict';

const cheerio = require('cheerio');
const nodeFetch = require('node-fetch');

function fetchResponseToText(fetchResponse) {
  return fetchResponse.text();
}

module.exports = function fetchCheerioObject(url, options) {
  return nodeFetch(url, options).then(fetchResponseToText).then(body => cheerio.load(body, options));
};
