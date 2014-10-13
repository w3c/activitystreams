var fs = require('fs');
var $ = require('cheerio');

// cache in memory
var examples = {};
var fixtures = {};

var CONTEXT_URI = 'http://asjsonld.mybluemix.net/';

var doc = $.load(fs.readFileSync('./activitystreams2.html').toString());

var getExample = function(name) {
  if (!examples[name]) {
    examples[name] = JSON.parse(doc('#' + name + ' pre.example').text());
    examples[name]['@context'] = CONTEXT_URI;
  }
  return examples[name];
};

var getFixture = function(name) {
  if (!fixtures[name]) {
    fixtures[name] = fs.readFileSync('./tests/nquads/' + name).toString();
  }
  return fixtures[name];
};

module.exports.getExample = getExample;
module.exports.getFixture = getFixture;
