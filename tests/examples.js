var helper = require('./helper');


describe('Minimal Activity', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex1', done);
  });
  it('JSON-LD and RDFa should match', function(done){
    helper.compareRdfa('ex1', done);
  });
});

describe('Basic activity with some additional detail', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex2', done);
  });
});

describe('An extended activity', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex3', done);
  });
});

describe('Object', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex4', done);
  });
});

describe('Object subclass', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex5', done);
  });
});

describe('Object with multiple types', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex6', done);
  });
});

describe('displayName', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex7', done);
  });
});

describe('displayNameMap', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex8', done);
  });
});

describe('default @language', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex9', done);
  });
});

describe('specify @language in value object', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex10', done);
  });
});

describe('Excluding a natural language property from the language context', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex11', done);
  });
});

describe('single image', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex12', done);
  });
});

describe('Link with mediaType', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex13', done);
  });
});

describe('string and Link in array', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex14', done);
  });
});

describe('Link rel=canonical', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex15', done);
  });
});

describe('An Activity with a Person actor', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex16', done);
  });
});

describe('An Activity with a Person actor extended with VCard properties', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex17', done);
  });
});

describe('An Actor that is both a Person and a vcard:Individual', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex18', done);
  });
});

describe('simple Activity', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex19', done);
  });
});

describe('An Activity that is both a Like and a http://schema.org/LikeAction', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex20', done);
  });
});

describe('unordered collection with paging', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex21', done);
  });
});

describe('simple ordered collection with paging', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex22', done);
  });
});

describe('GeoJSON Point Coordinates', function(){
});

describe('The Equivalent Place alternative', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex23', done);
  });
});

describe('GeoJSON Polygon Coordinates', function(){
});


describe('The Equivalent GeoSparql Well-Known-Text alternative', function(){
  it('JSON-LD and Turtle should match', function(done){
    helper.compareTurtle('ex24', done);
  });
});

describe('Handling of JSON-ID Compact IRIs', function(){
});
