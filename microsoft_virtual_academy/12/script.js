var batwing = {
  status: "Ready",
  rescueBatman: function () {
    document.write("Locating his transponder...initiating launch...");
  }
}

//Example 1
// if(batwing.status === "Ready") {
//   batwing.rescueBatman();
// }

var utilities = {
  printAllMembers: function(targetObject) {
    for (i in targetObject) {
      document.write("<br />" + targetObject[i]);
    }
  }
}

//Example 2
// utilities.printAllMembers(batwing);
// utilities.printAllMembers(i_am_empty);

var planet = {
  id:34,
  name: "Imtempsta Nox",
  faction: {
    factionId: 2,
    name: "Nex",
    notification: function(){
      document.write("Nex alliance ... unite!");
    }
  },
  cities: [
    {locationID: 15, name: "Gladius"},
    {locationID: 16, name: "Chalybs"},
    {locationID: 17, name: "Ensis"}
  ]
};

//Example 3 - accessing elements of a variable
// planet.faction.notification();
// document.write(planet.cities[1].name);

//Example 4 - changing an element after definition
// document.write("<br />" + planet.name);
// planet.name = "Vulcan";
// document.write("<br />" + planet.name);

//Example 5 - assigning our variable to another variable
// var z = planet;
// document.write(z.name);

//Example 6 - adding additional info after definition
// if (typeof planet.defense == 'undefined') {
//   planet.defense = "Ion cannon";
// }
// document.write(planet.defense);

//Example 7
// for(member in planet){
//   document.write("<br />" + member + " ==> " + planet[member])
// }


//Example 8 - constructor functions
function car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}
var myCar = new car("Volks", "Passat", 1999);
var myOtherCar = new car("Toyota", "Camry", 2010);
alert(myCar.make);
alert(myOtherCar.make);
