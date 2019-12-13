const person = {
    firstName: "Blake",
    lastName: "Slochowsky"
  }
  
  const groceryStore = (person) => {
    return `${person.firstName} ${person.lastName} went to the grocery store`
  }

  const takeOutTrash = (person) => {
    return `${person.firstName} ${person.lastName} took out the trash`
  }

  const walkTheDog = (person) => {
    return `${person.firstName} ${person.lastName} walked the dog`
  }
  
  const vacuum = (person) => {
    return `${person.firstName} ${person.lastName} vacuum the floor`
  }
  
  const washTheCar = (person) => {
    return `${person.firstName} ${person.lastName} washed the car`
  }
  
  const cloths = (person) => {
    return `${person.firstName} ${person.lastName} folded the cloths`
  }

  console.log((groceryStore, washTheCar, vacuum, person))