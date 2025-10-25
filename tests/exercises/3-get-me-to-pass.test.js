import { describe, expect, it } from "vitest";

/**
 * Exercise 3: Get Me To Pass
 * Get the test to pass :D
 * npm run test-exercise-3
 */

describe("getMeToPass", () => {
    /* Don't touch these variables */
    let testThatShouldNotRunRan = false;
    let testThatShouldRunRan = false;

    /* You can touch these tests but not remove them */
    it.skip("Should run", () => {
        testThatShouldRunRan = true;
    })

    it("Evil test!", () => {
        testThatShouldNotRunRan = true;
    })

    /* Don't touch these tests */
    it("should not run the skipped test", () => {
        expect(testThatShouldNotRunRan).toBe(false)
    })

    it("should run the test that should run", () => {
        expect(testThatShouldRunRan).toBe(true)
    })

})
