import { describe, test, expect } from "vitest";
import { search2DMatrix } from "../questions/74-search-2D-matrix";

describe("74 - Search 2D Matrix", () => {
	test("Case 1", () => {
		expect(
			search2DMatrix(
				[
					[1, 3, 5, 7],
					[10, 11, 16, 20],
					[23, 30, 34, 60],
				],
				3
			)
		).toEqual(true);
	});

	test("Case 2", () => {
		expect(
			search2DMatrix(
				[
					[1, 3, 5, 7],
					[10, 11, 16, 20],
					[23, 30, 34, 60],
				],
				13
			)
		).toEqual(false);
	});

	// test("Case 3", () => {
	//     expect(search2DMatrix()).toEqual()
	// })
});
