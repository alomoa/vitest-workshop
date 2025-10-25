import { describe, it, expect } from 'vitest'

/**
 * Exercise 1: Basic
 * Solve the exercises below by adjusting the tests
 * npm run test-exercise-1
 */

/****************************

Exercise 1a: Add

*****************************/
function add(a, b) {
  return a - b
}

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-4, 10)).toBe(6)
  })
})



/****************************

Exercise 1b: Create User

*****************************/

let id = 0
function createUser(name, age) {
  const user = { name, age, id: id };
  id++;
  return user;
}

describe('createUser', () => {
  it('creates a user with correct properties', () => {
    const user = createUser('Alice', 25)
    
    expect(user).toBe({ name: 'Alice', age: 25, id: 0 })
  })
  
  it('creates users with different IDs', () => {
    const user1 = createUser('Bob', 30)
    const user2 = createUser('Bob', 30)
    
    expect(user1.id).toBe(user2.id)
  })
})