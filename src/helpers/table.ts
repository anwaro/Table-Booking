import { TableType } from "../constants/Table";

export const circleTableSize = (count: number) => {
    const size = 200 + count * 30;
    return {
        width: size,
        height: size
    };
};

export const squareTableSize = (count: number) => {
    const size = 200 + count * 30;
    return {
        width: size,
        height: size
    };
};

export const rectangleTableSize = (count: number) => {
    const size = 400 + Math.floor(Math.max(0, count - 5) / 2) * 140;
    return {
        width: size,
        height: 230
    };
};

export const tableSize = (count: number, type: TableType) => {
    switch (type) {
        case TableType.Rectangle:
            return rectangleTableSize(count);
        case TableType.Circle:
            return circleTableSize(count);
        case TableType.Square:
        default:
            return squareTableSize(count);
    }
};
