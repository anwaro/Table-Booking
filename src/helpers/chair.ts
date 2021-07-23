import {TableType} from "../constants/Table";
import {array} from "./array";
import {tableSize} from "./table";

export const circleTableAngle = (index: number, count: number) => 90 + 360 / count * index;

export const squareTableAngle = (index: number) => [90, 270, 0, 180][index % 4];

export const rectangleTableAngle = (index: number) => {
    if (index === 4) {
        return 90;
    }
    if (index === 5) {
        return 270;
    }
    return index % 2 ? 180 : 0;
}

export const calculateAngle = (index: number, count: number, type: TableType) => {
    switch (type) {
        case TableType.Circle:
            return circleTableAngle(index, count);
        case TableType.Rectangle:
            return rectangleTableAngle(index);
        case TableType.Square:
        default:
            return squareTableAngle(index);
    }
}

const k = 114;

type Size = { width: number, height: number };
type DataType = {
    size: Size,
    index: number,
    count: number,
    initial: boolean,
    offsetY: number,
    initialY: number
};

export const circleTableTranslate = ({size: {width}, initial, initialY, offsetY}: DataType) => ({
    y: initial ? initialY : -(width / 2 + offsetY),
    x: 0,
});


export const squareTableTranslate = ({size: {width}, index, count, initial, initialY, offsetY}: DataType) => {
    const indexes = array(count).map((_, i) => i).filter((i) => i % 4 === index % 4);
    const dx = (width - indexes.length * k) / (indexes.length + 1);
    return {
        y: initial ? initialY : -(width / 2 + offsetY),
        x: -(width / 2 + k / 2) + (dx + k) * (indexes.indexOf(index) + 1),
    }
};

export const rectangleTableTranslate = ({
                                            size: {width, height},
                                            index,
                                            count,
                                            initial,
                                            initialY,
                                            offsetY
                                        }: DataType) => {
    if (index === 4 || index === 5) {
        return {
            y: initial ? initialY : -(width / 2 + offsetY),
            x: 0,
        }
    }
    const indexes = array(count).map((_, i) => i).filter((i) => ![4, 5].includes(i) && i % 2 === index % 2);
    const dx = ((width - 30) - indexes.length * k) / (indexes.length + 1);
    return {
        y: initial ? initialY : -(height / 2 + offsetY),
        x: -((width - 30) / 2 + k / 2) + (dx + k) * (indexes.indexOf(index) + 1),
    }
};

export const calculateTranslate = (offsetY: number, initialY: number) => (index: number, count: number, type: TableType, initial = false) => {

    const size = tableSize(count, type);
    const data: DataType = {
        offsetY, index, count, initial, initialY, size
    }
    switch (type) {
        case TableType.Circle:
            return circleTableTranslate(data);
        case TableType.Rectangle:
            return rectangleTableTranslate(data);
        case TableType.Square:
        default:
            return squareTableTranslate(data);
    }
}
