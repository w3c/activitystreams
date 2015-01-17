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

describe('Object', function(){
  it('should match expected RDF', function(done){
    basicCompare('object', done);
  });
});

describe('Activity', function(){
  it('should match expected RDF', function(done){
    basicCompare('activities', done);
  });
});

describe('Collection', function(){
  it('should match expected RDF', function(done){
    basicCompare('collections', done);
  });
});

describe('Potential Action', function(){
  it('should match expected RDF', function(done){
    basicCompare('actions', done);
  });
});
