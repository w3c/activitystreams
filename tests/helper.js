var fs = require('fs');
var $ = require('cheerio');

// cache in memory
var examples = {};
var fixtures = {};
var context;


var doc = $.load(fs.readFileSync('./activitystreams2.html').toString());

var getContext = function(){
  if(!context){
    context = JSON.parse(fs.readFileSync('./activitystreams2-context.jsonld').toString());
  }
  return context;
};

var getExample = function(name) {
  if (!examples[name]) {
    examples[name] = JSON.parse(doc('#' + name + ' pre.example').text());
    // set context
    examples[name]['@context'] = getContext()['@context'];
  }
  return examples[name];
};

var getFixture = function(name) {
  if (!fixtures[name]) {
    fixtures[name] = fs.readFileSync('./tests/turtle/' + name).toString();
  }
  return fixtures[name];
};

module.exports.getContext = getContext;
module.exports.getExample = getExample;
module.exports.getFixture = getFixture;
