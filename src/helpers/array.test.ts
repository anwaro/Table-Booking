import { expect, test } from "vitest";
import { array } from "./array.ts";

test("Create array", () => {
    expect(array(1)).toEqual([0]);
    expect(array(4)).toEqual([0, 0, 0, 0]);
});
