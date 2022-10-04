function construction(worker) {
  let object = {
    weight: worker.weight,
    experience: worker.experience,
    levelOfHydrated: worker.levelOfHydrated,
    dizziness: worker.dizziness,
  };
  if(object.dizziness===true){
    let waterToGive = object.experience*0.1*object.weight;
    object.levelOfHydrated+=waterToGive;
    object.dizziness=false;
  }
  console.log(object);
}

//let input = { weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true };
let input = { weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  

construction(input);
