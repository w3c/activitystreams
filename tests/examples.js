var expect = require('chai').expect;
var helper = require('./helper');
var rdf = require('rdf-interfaces');
require('rdf-ext')(rdf);
var utils = require('rdf-test-utils')(rdf);

describe('Minimal Activity', function(){
  it('should match expected RDF', function(done){
    new rdf.TurtleParser().parse(helper.getFixture('example-1'), function(expected){
      new rdf.JsonLdParser().parse(helper.getExample('example-1'), function(example){
        utils.compareGraph(expected, example, function(comparison, a, b){
          expect(comparison).to.be.true;
          done();
        });
      });
    });
  });
});

describe('Basic Activity', function(){
  it('should match expected RDF', function(done){
    new rdf.TurtleParser().parse(helper.getFixture('example-2'), function(expected){
      new rdf.JsonLdParser().parse(helper.getExample('example-2'), function(example){
        utils.compareGraph(expected, example, function(comparison, a, b){
          expect(comparison).to.be.true;
          done();
        });
      });
    });
  });
});

describe('Extended Activity', function(){
  it('should match expected RDF', function(done){
    new rdf.TurtleParser().parse(helper.getFixture('example-3'), function(expected){
      new rdf.JsonLdParser().parse(helper.getExample('example-3'), function(example){
        utils.compareGraph(expected, example, function(comparison, a, b){
          expect(comparison).to.be.true;
          done();
        });
      });
    });
  });
});
