var fs = require('fs');
var $ = require('cheerio');
var _ = require('lodash');

var rdf = require('rdf-interfaces');
require('rdf-ext')(rdf);
var utils = require('rdf-test-utils')(rdf);

var expect = require('chai').expect;

// cache in memory
var examples = {
  jsonld: {},
  turtle: {},
  rdfa: {}
};
var context;

var doc = $.load(fs.readFileSync('./activitystreams2.html').toString());

var getContext = function(){
  if(!context){
    context = JSON.parse(fs.readFileSync('./activitystreams2-context.jsonld').toString());
  }
  return context;
};

var getJsonld = function(name) {
  if (!examples.jsonld[name]) {
    examples.jsonld[name] = JSON.parse(doc('#' + name + '-jsonld pre.example').text());
    // set context
    if(examples.jsonld[name]['@context'] == "http://www.w3.org/ns/activitystreams") {
      examples.jsonld[name]['@context'] = getContext()['@context'];
    } else {
      var as =_.find(examples.jsonld[name]['@context'], "http://www.w3.org/ns/activitystreams");
      as = getContext()['@context'];
    }
  }
  return examples.jsonld[name];
};

var getTurtle = function(name) {
  if (!examples.turtle[name]) {
    examples.turtle[name] = doc('#' + name + '-turtle pre.example').text();
  }
  return examples.turtle[name];
};

var compareTurtle = function(name, done){
  new rdf.TurtleParser().parse(getTurtle(name), function(turtle){
    new rdf.JsonLdParser().parse(getJsonld(name), function(jsonld){
      utils.compareGraph(turtle, jsonld, function(comparison, a, b){
        expect(comparison).to.be.true;
        done();
      });
    });
  });
};


module.exports = {
  compareTurtle: compareTurtle
};
