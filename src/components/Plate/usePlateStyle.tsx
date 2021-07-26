import {useEffect, useState} from "react";
import {TableType} from "../../constants/Table";
import {calculateAngle, calculateTranslate} from "../../helpers/chair";

export function usePlateStyle(index: number, count: number, active: boolean, tableType: TableType) {
    const trans = calculateTranslate(-50, 0);
    const [angle, setAngle] = useState(90 + 360 / count * index);
    const [translate, setTranslate] = useState(trans(index, count, tableType, true));
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setAngle(calculateAngle(index, count, tableType));
    }, [index, count, tableType]);

    useEffect(() => {
        if (opacity) {
            setOpacity(1);
            setTranslate(trans(index, count, tableType));

        } else {
            setTimeout(() => {
                setOpacity(1);
                setTranslate(trans(index, count, tableType));
            }, 100);
        }

    }, [tableType, count, index]);

    useEffect(() => {
        if (!active) {
            setOpacity(0);
            setTranslate(trans(index, count, tableType, true));
        }
    }, [active, index]);

    return {
        opacity,
        transform: `rotate(${angle}deg)`,
        '--plate-translate': `translate( ${translate.x}px, ${translate.y}px)`,
    };
}
