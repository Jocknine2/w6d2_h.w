const Park = function (name, ticket){
    this.name = name;
    this.ticket = ticket;
    this.dinosaurs = [];
};


Park.prototype.numberOfDinosaurs = function (){
    return this.dinosaurs.length;
}

Park.prototype.addDinosaurToPark = function (dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurBySpecies = function (dinosaur){
    const indexOfDinosaurs = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaurs, 1);
}

Park.prototype.mostPopularDinosaur = function (){
    let popularDinosaur = 
}

module.exports = Park