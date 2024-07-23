import { TableType } from "../constants/Table";

import { array } from "./array";
import { tableSize } from "./table";

type Size = { width: number; height: number };

export type DataType = {
    size: Size;
    index: number;
    count: number;
    initial: boolean;
    offsetY: number;
    initialY: number;
};

export const circleTableAngle = (index: number, count: number) => {
    return (360 / count) * index;
};

export const squareTableAngle = (index: number, count: number) => {
    const delta = 360 / count;

    return Math.floor((delta * index) / 90) * 90;
};

export const rectangleTableAngle = (index: number, count: number) => {
    if (count > 4 && index === count - 1) {
        return 270;
    }

    const rightChairIndex = Math.floor((count - 1) / 2);

    if (count > 5 && index === rightChairIndex) {
        return 90;
    }

    if (count < 5) {
        return index <= (count - 1) / 2 ? 0 : 180;
    }

    return index <= (count - 2) / 2 ? 0 : 180;
};

export const calculateAngle = (
    index: number,
    count: number,
    type: TableType
) => {
    switch (type) {
        case TableType.Circle:
            return circleTableAngle(index, count);
        case TableType.Rectangle:
            return rectangleTableAngle(index, count);
        case TableType.Square:
        default:
            return squareTableAngle(index, count);
    }
};

const chairSize = 114;

export const circleTableTranslate = ({
    size: { width },
    initial,
    initialY,
    offsetY
}: DataType) => ({
    y: initial ? initialY : -(width / 2 + offsetY),
    x: 0
});

export const squareTableTranslate = ({
    size: { width },
    index,
    count,
    initial,
    initialY,
    offsetY
}: DataType) => {
    const angle = squareTableAngle(index, count);

    const indexes = array(count)
        .map((_, i) => ({
            index: i,
            angle: squareTableAngle(i, count)
        }))
        .filter((item) => item.angle === angle);

    const indexInSide = indexes.findIndex((item) => item.index === index) ?? 0;

    const dx = (width - indexes.length * chairSize) / (indexes.length + 1);

    return {
        y: initial ? initialY : -(width / 2 + offsetY),
        x:
            -width / 2 +
            chairSize / 2 +
            dx * (indexInSide + 1) +
            chairSize * indexInSide
    };
};

export const rectangleTableTranslate = ({
    size: { width, height },
    index,
    count,
    initial,
    initialY,
    offsetY
}: DataType) => {
    const angle = rectangleTableAngle(index, count);

    if (angle === 90 || angle === 270) {
        return {
            y: initial ? initialY : -(width / 2 + offsetY),
            x: 0
        };
    }

    const indexes = array(count)
        .map((_, i) => ({
            index: i,
            angle: rectangleTableAngle(i, count)
        }))
        .filter((item) => item.angle === angle);

    const indexInSide = indexes.findIndex((item) => item.index === index) ?? 0;

    const dx = (width - indexes.length * chairSize) / (indexes.length + 1);

    return {
        y: initial ? initialY : -(height / 2 + offsetY),
        x:
            -width / 2 +
            chairSize / 2 +
            dx * (indexInSide + 1) +
            chairSize * indexInSide
    };
};

export const calculateTranslate =
    (offsetY: number, initialY: number) =>
    (index: number, count: number, type: TableType, initial = false) => {
        const size = tableSize(count, type);
        const data: DataType = {
            offsetY,
            index,
            count,
            initial,
            initialY,
            size
        };
        switch (type) {
            case TableType.Circle:
                return circleTableTranslate(data);
            case TableType.Rectangle:
                return rectangleTableTranslate(data);
            case TableType.Square:
            default:
                return squareTableTranslate(data);
        }
    };
