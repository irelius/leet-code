import { describe, test, expect } from "vitest";
import { productOfArrayExceptSelf } from "../questions/238-product-of-array-except-self";

describe("238 - Product Of Array Except Self", () => {
	test("Case 1", () => {
		expect(productOfArrayExceptSelf([1, 2, 4, 6])).toEqual([48, 24, 12, 8]);
	});

	// test("Case 2", () => {
	// 	expect(productOfArrayExceptSelf([-1, 0, 1, 2, 3])).toEqual([0, -6, 0, 0, 0]);
	// });
});
