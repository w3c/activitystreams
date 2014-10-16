var helper = require('./helper');
var JSONLD = require('jsonld');
var promises = JSONLD.promises();
var expect = require('chai').expect;

describe('Minimal Activity', function(){
  it('should match expected RDF', function(done){
    var example = helper.getExample('example-1');
    var expected = helper.getFixture('example-1');

    promises.toRDF(example, {format: 'application/nquads'})
      .then(function(nquads){
        expect(nquads).to.equal(expected);
        done();
      })
      .catch(function(err){
        console.log(err);
        done();
      });
  });
});

describe('Basic Activity', function(){
  it('should match expected RDF', function(done){
    var example = helper.getExample('example-2');
    var expected = helper.getFixture('example-2');

    promises.toRDF(example, {format: 'application/nquads'})
      .then(function(nquads){
        expect(nquads).to.equal(expected);
        done();
      })
      .catch(function(err){
        console.log(err);
        done();
      });
  });
});

describe('Extended Activity', function(){
  it('should match expected RDF', function(done){
    var example = helper.getExample('example-3');
    var expected = helper.getFixture('example-3');

    promises.toRDF(example, {format: 'application/nquads'})
      .then(function(nquads){
        expect(nquads).to.equal(expected);
        done();
      })
      .catch(function(err){
        console.log(err);
        done();
      });
  });
});
