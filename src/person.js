import * as DbHelper from "./utils/db"

//To do: create a mock for all of these
export function savePerson(person){
  DbHelper.savePerson(person)
}

export function getPerson(person){
  return DbHelper.getPerson(person)
}

export function deletePerson(person){
  return DbHelper.deletePerson(person)
}

export function doesPersonExist(person){
  const people = DbHelper.allPeople();

  const foundPerson = people.find(x => x === person);

  if(foundPerson){
    return true
  }

  return false
}