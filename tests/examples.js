var expect = require('chai').expect;
var helper = require('./helper');
var rdf = require('rdf-interfaces');
require('rdf-ext')(rdf);
var utils = require('rdf-test-utils')(rdf);

function basicCompare(name, done){
  new rdf.TurtleParser().parse(helper.getFixture(name), function(expected){
    new rdf.JsonLdParser().parse(helper.getExample(name), function(example){
      utils.compareGraph(expected, example, function(comparison, a, b){
        expect(comparison).to.be.true;
        done();
      });
    });
  });
}

describe('Minimal Activity', function(){
  it('should match expected RDF', function(done){
    basicCompare('example-1', done);
  });
});

describe('Basic Activity', function(){
  it('should match expected RDF', function(done){
    basicCompare('example-2', done);
  });
});

describe('Extended Activity', function(){
  it('should match expected RDF', function(done){
    basicCompare('example-3', done);
  });
});
