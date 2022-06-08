const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
      park = new Park('Jurrasic Park', 12.50, [])

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket;
    assert.strictEqual(actual, 12.50);
  });

``
  it('should have a collection of dinosaurs',  function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaurToPark('T-Rex', 'Carnivore', 100);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaurToPark('T-Rex', 'Carnivore', 100);
    park.addDinosaurToPark('Velociraptor', 'Carnivore', 150);
    park.removeDinosaurBySpecies('Velociraptor');
    const expected = ['T-Rex'];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  }); 

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDinosaurToPark('T-Rex', 'Carnivore', 100);
    park.addDinosaurToPark('Velociraptor', 'Carnivore', 150);
    park.addDinosaurToPark('Triceratops', 'Omnivore', 75);
    const actual = park.findMostPopularDinosaur();
    
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
