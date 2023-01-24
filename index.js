// Write your solution here!
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastCat(){
    return cats.push("Ralph")
}

function destructivelyRemoveFirstCat(){
    return cats.unshift("Bob")
}

cats.pop()
 
cats.shift()

const Newcats = cats.slice()

Newcats.push("Broom")

cats.slice(0,2)

cats.slice(1)