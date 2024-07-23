import { TableType } from "../constants/Table";

import { expect, test } from "vitest";
import {
    circleTableSize,
    rectangleTableSize,
    squareTableSize,
    tableSize
} from "./table";

test("Circle table size", () => {
    expect(circleTableSize(1)).toEqual({ width: 230, height: 230 });
});

test("Square table size", () => {
    expect(squareTableSize(1)).toEqual({ width: 230, height: 230 });
});

test("Rectangle table size", () => {
    expect(rectangleTableSize(1)).toEqual({ width: 400, height: 230 });
});

test("Table size", () => {
    expect(tableSize(1, TableType.Circle)).toEqual({ width: 230, height: 230 });
    expect(tableSize(1, TableType.Square)).toEqual({ width: 230, height: 230 });
    expect(tableSize(1, TableType.Rectangle)).toEqual({
        width: 400,
        height: 230
    });
});
