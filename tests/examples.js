var expect = require('chai').expect;
var helper = require('./helper');
var rdf = require('rdf-interfaces');
require('rdf-ext')(rdf);
var utils = require('rdf-test-utils')(rdf);

function basicCompare(name, done){
  new rdf.TurtleParser().parse(helper.getTurtle(name), function(turtle){
    new rdf.JsonLdParser().parse(helper.getJsonld(name), function(jsonld){
      utils.compareGraph(turtle, jsonld, function(comparison, a, b){
        console.log('turtle /n', a);
        console.log('jsonld /n', b);
        expect(comparison).to.be.true;
        done();
      });
    });
  });
}

describe('Minimal Activity', function(){
  it('JSON-LD and Turtle should match', function(done){
    basicCompare('ex1', done);
  });
});
