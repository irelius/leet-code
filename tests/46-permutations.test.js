import { describe, test, expect } from "vitest";
import { permutations } from "../questions/46-permutations";

describe("46 - Permutations", () => {
	test("Case 1", () => {
		expect(permutations([1, 2, 3])).toEqual(
			expect.arrayContaining([
				[1, 2, 3],
				[1, 3, 2],
				[2, 1, 3],
				[2, 3, 1],
				[3, 1, 2],
				[3, 2, 1],
			])
		);
	});

	test("Case 2", () => {
		expect(permutations([0, 1])).toEqual(
			expect.arrayContaining([
				[0, 1],
				[1, 0],
			])
		);
	});

	test("Case 3", () => {
		expect(permutations([1])).toEqual(expect.arrayContaining([[1]]));
	});
});
