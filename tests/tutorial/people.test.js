import { afterEach, describe, expect, it, vi } from "vitest";
import { doesPersonExist, savePerson } from "../../src/person";
import * as MockDb from "../../src/utils/db";

/*
 Examples:
 Basic mocking
 Spying
*/

vi.mock("../../src/utils/db.js")

describe("Does person exist", () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it("Should return true for person that exists", () => {
    MockDb.allPeople.mockReturnValue(["Steve Jobs"]);
    const result = doesPersonExist("Steve Jobs");
    expect(MockDb.allPeople).to.be.toBeCalled()
    expect(result).true
  })

  it("should return undefined when mock is reset", () => {
    expect(MockDb.allPeople()).undefined
  })

  it("Should return false for person that does not exist", () => {
    MockDb.allPeople.mockReturnValue(["Steve Jobs"]);
    const result = doesPersonExist("Bill Gates");
    expect(result).false
    expect({thing: "thing"}).toEqual({thing: "thing"})
  })
})

describe("savePerson", () => {
  it("Should call db function to save", () => {
    savePerson("Eir Stagalkin");
    expect(MockDb.savePerson).to.be.toBeCalledTimes(1);
  })
})

describe.todo("deletePerson", () => {
  it("Should call db function to delete", () => {
  })
})
