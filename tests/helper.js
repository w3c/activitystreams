var fs = require('fs');
var $ = require('cheerio');
var _ = require('lodash');
var jsdom = require('jsdom');

var jsonld = require('jsonld');
var RDFa = require('../node_modules/rdf-ext/node_modules/jsonld/js/rdfa');

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

var getRdfa = function(name) {
  if (!examples.rdfa[name]) {
    examples.rdfa[name] = doc('#' + name + '-rdfa pre.example').text();
  }
  return examples.rdfa[name];
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

var noise = {
  '@id': 'http://localhost/',
  'http://www.w3.org/ns/rdfa#usesVocabulary': [
    {
      '@id': 'http://www.w3.org/ns/activitystreams#'
    }
  ]
};

var compareRdfa = function(name, done){
  var data = getRdfa(name);
  jsdom.env({
    url: 'http://localhost/',
    html: data,
    done: function(errors, window) {
      if(errors && errors.length > 0) {
        return callback({
          message: 'DOM Errors:',
          errors: errors,
          url: 'http://localhost/'
        });
      }

      try {
        // extract JSON-LD from RDFa
        RDFa.attach(window.document);
        jsonld.fromRDF(window.document.data, {format: 'rdfa-api'}, function(err, doc) {
          _.remove(doc, noise);
          new rdf.JsonLdParser().parse(doc, function(rdfa){
            new rdf.JsonLdParser().parse(getJsonld(name), function(jsonld){
              utils.compareGraph(rdfa, jsonld, function(comparison, a, b){
                expect(comparison).to.be.true;
                done();
              });
            });
          });
        });
      } catch(ex) {
        // FIXME: expose RDFa/jsonld ex?
        callback({
          message: 'RDFa extraction error.',
          url: 'http://localhost/'
        });
      }
    }
  });
};


module.exports = {
  compareTurtle: compareTurtle,
  compareRdfa: compareRdfa
};
