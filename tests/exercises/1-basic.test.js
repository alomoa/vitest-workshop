import { describe, it, expect } from 'vitest'


/****************************

Exercise 1: Add

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

Exercise 2: Capitalise

*****************************/
function capitalise(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}

describe('capitalise', () => {
  it('capitalises every word', () => {
    // Should read "Hello World From Vitest"
    expect(capitalise('hello world from vitest')).toBe('Hello World From Vitest')
  })
})