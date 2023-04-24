class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOFVamps = 0;
    let currentVamp = this;

    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numOFVamps++;
    }
    return numOFVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let diff = this.numberOfVampiresFromOriginal - vampire.numberOfVampiresFromOriginal;
    if (diff < 0) {
      return true;
    }
    return false;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    //console.log(this);
    if (this.name === name) {
      return this;
    }
    for (let childnode of this.offspring) {
      const foundVamp = childnode.vampireWithName(name);
      if (foundVamp !== null) {
        return foundVamp;
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

const ada = new Vampire("Ada", 1960);
const craig = new Vampire("Craig", 1965);
const paul = new Vampire("Paul", 1966);
const donna = new Vampire("Donna", 1970);
const maria = new Vampire("Maria", 1965);

ada.addOffspring(craig);
ada.addOffspring(paul);
craig.addOffspring(donna);
paul.addOffspring(maria);


console.log(ada.vampireWithName("Maria"));

module.exports = Vampire;

