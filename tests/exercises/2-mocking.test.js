import { describe, expect, it, vi } from 'vitest'
import { getUser } from '../../src/exercises/api'

/**
 * Exercise 1: Basic
 * Solve the exercises below by adjusting the tests
 * npm run test-exercise-2
 */

describe('getUser()', () => {
  it('returns parsed json', async () => {
    const fakeUser = { id: '123', name: 'Ada' }

    const user = await getUser('123')

    expect(user).toEqual(fakeUser)
  })

  it('returns nothing', async () => {
    const result = await getUser("123")

    expect(result).toEqual(null)
  })

  it("should cleanup the mock", () => {
    expect(getUser()).toBeUndefined()
    expect(getUser).toHaveBeenCalledTimes(0)
  })
})