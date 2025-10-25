
export function getPerson(person){
  const storage = JSON.parse(localStorage.getItem("people"))
  return storage.find(x => x === person)
}

export function savePerson(person){
  const storage = JSON.parse(localStorage.getItem("people"))
  storage.push(person);
  localStorage.setItem("people", JSON.stringify(storage))
}

export function allPeople(){
  return JSON.parse(localStorage.getItem("people"));
}

export function deletePerson(person){
  const storage = JSON.parse(localStorage.getItem("people"))
  const index = storage.findIndex(x => x === person);

  if(index > -1){
    storage.splice(index, 1)
  }

  localStorage.setItem("people", JSON.stringify(storage))
}