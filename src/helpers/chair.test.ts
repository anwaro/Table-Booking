import { TableType } from "../constants/Table";

import { array } from "./array";
import { expect, test } from "vitest";
import {
    calculateAngle,
    calculateTranslate,
    circleTableAngle,
    circleTableTranslate,
    DataType,
    rectangleTableAngle,
    rectangleTableTranslate,
    squareTableAngle,
    squareTableTranslate
} from "./chair.ts";

test("Circle table chair angle", () => {
    expect(circleTableAngle(0, 1)).toEqual(0);
    expect(circleTableAngle(1, 2)).toEqual(180);
    expect(circleTableAngle(9, 10)).toEqual(324);
});

test("Square table chair angle", () => {
    expect(squareTableAngle(0, 1)).toEqual(0);
    expect(squareTableAngle(1, 2)).toEqual(180);
    expect(squareTableAngle(9, 10)).toEqual(270);
});

test("Rectangle table top chair angle", () => {
    expect(rectangleTableAngle(0, 1)).toEqual(0);
    expect(rectangleTableAngle(0, 2)).toEqual(0);
    expect(rectangleTableAngle(3, 10)).toEqual(0);
});

test("Rectangle table bottom chair angle", () => {
    expect(rectangleTableAngle(1, 2)).toEqual(180);
    expect(rectangleTableAngle(5, 10)).toEqual(180);
});

test("Rectangle table right chair angle", () => {
    expect(rectangleTableAngle(2, 6)).toEqual(90);
    expect(rectangleTableAngle(3, 7)).toEqual(90);
    expect(rectangleTableAngle(3, 8)).toEqual(90);
    expect(rectangleTableAngle(4, 9)).toEqual(90);
    expect(rectangleTableAngle(4, 10)).toEqual(90);
});

test("Rectangle table left chair angle", () => {
    expect(rectangleTableAngle(5, 6)).toEqual(270);
    expect(rectangleTableAngle(6, 7)).toEqual(270);
});

test.each([1, 2, 3, 4])(
    "Rectangle table with %i chairs should not contains left chair angle",
    (count) => {
        const chairs = array(count).map((_, i) =>
            rectangleTableAngle(i, count)
        );

        expect(chairs).not.include(270);
    }
);

test.each([5, 6, 7, 8, 9])(
    "Rectangle table with %i chairs should contains left chair angle",
    (count) => {
        const chairs = array(count).map((_, i) =>
            rectangleTableAngle(i, count)
        );

        expect(chairs).include(270);
    }
);

test.each([1, 2, 3, 4, 5])(
    "Rectangle table with %i chairs should not contains right chair angle",
    (count) => {
        const chairs = array(count).map((_, i) =>
            rectangleTableAngle(i, count)
        );

        expect(chairs).not.include(90);
    }
);

test.each([6, 7, 8, 9, 10])(
    "Rectangle table with %i chairs should contains right chair angle",
    (count) => {
        const chairs = array(count).map((_, i) =>
            rectangleTableAngle(i, count)
        );

        expect(chairs).include(90);
    }
);

test("Table chair angle", () => {
    expect(calculateAngle(0, 1, TableType.Circle)).toEqual(0);
    expect(calculateAngle(1, 2, TableType.Circle)).toEqual(180);
    expect(calculateAngle(9, 10, TableType.Circle)).toEqual(324);

    expect(calculateAngle(0, 1, TableType.Square)).toEqual(0);
    expect(calculateAngle(1, 2, TableType.Square)).toEqual(180);
    expect(calculateAngle(9, 10, TableType.Square)).toEqual(270);

    expect(calculateAngle(0, 1, TableType.Rectangle)).toEqual(0);
    expect(calculateAngle(0, 2, TableType.Rectangle)).toEqual(0);
    expect(calculateAngle(3, 10, TableType.Rectangle)).toEqual(0);
});

const settings: DataType = {
    size: { width: 200, height: 200 },
    index: 0,
    initial: false,
    initialY: -300,
    offsetY: 100,
    count: 4
};

test("Circle table chair translate", () => {
    expect(circleTableTranslate(settings)).toEqual({
        x: 0,
        y: -(200 / 2 + 100)
    });
    expect(circleTableTranslate({ ...settings, initial: true })).toEqual({
        x: 0,
        y: -300
    });
    expect(circleTableTranslate({ ...settings, index: 3 })).toEqual({
        x: 0,
        y: -(200 / 2 + 100)
    });
});

test("Square table chair translate", () => {
    expect(squareTableTranslate(settings)).toEqual({
        x: 0,
        y: -(200 / 2 + 100)
    });
    expect(squareTableTranslate({ ...settings, initial: true })).toEqual({
        x: 0,
        y: -300
    });
    expect(squareTableTranslate({ ...settings, index: 3 })).toEqual({
        x: 0,
        y: -(200 / 2 + 100)
    });
});

test("Rectangle table chair translate", () => {
    expect(rectangleTableTranslate(settings)).toEqual({
        x: expect.closeTo(-52.33),
        y: -(200 / 2 + 100)
    });
    expect(rectangleTableTranslate({ ...settings, initial: true })).toEqual({
        x: expect.closeTo(-52.33),
        y: -300
    });
    expect(rectangleTableTranslate({ ...settings, index: 3 })).toEqual({
        x: expect.closeTo(52.33),
        y: -(200 / 2 + 100)
    });

    expect(
        rectangleTableTranslate({ ...settings, index: 3, count: 8 })
    ).toEqual({
        x: 0,
        y: -(200 / 2 + 100)
    });
    expect(
        rectangleTableTranslate({ ...settings, index: 7, count: 8 })
    ).toEqual({
        x: 0,
        y: -(200 / 2 + 100)
    });
    expect(
        rectangleTableTranslate({
            ...settings,
            index: 7,
            count: 8,
            initial: true
        })
    ).toEqual({
        x: 0,
        y: -300
    });
});

test("Table chair translate", () => {
    const translate = calculateTranslate(settings.offsetY, settings.initialY);
    expect(translate(settings.index, settings.count, TableType.Circle)).toEqual(
        {
            x: 0,
            y: -260
        }
    );

    expect(translate(settings.index, settings.count, TableType.Square)).toEqual(
        {
            x: 0,
            y: -260
        }
    );

    expect(
        translate(settings.index, settings.count, TableType.Rectangle)
    ).toEqual({
        x: expect.closeTo(-85.666),
        y: -215
    });
});
