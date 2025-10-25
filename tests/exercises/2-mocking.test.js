import { describe, expect, it, vi } from 'vitest'
import { getUser } from '../../src/exercises/api'

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
})