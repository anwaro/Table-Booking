import classNames from 'classnames';
import React, {useCallback} from 'react';

import {ChairConfig} from '../../constants/Chair';

import s from './style.module.scss';

type SelectChairsProps = {
    count: number;
    setCount: (count: number) => void;
    active: number;
    setActive: (count: number) => void;
};

function SelectChairsCount({
    count,
    setCount,
    active,
    setActive,
}: SelectChairsProps) {
    const changeCount = useCallback(
        (diff: number) => {
            if (count !== active) {
                return;
            }
            const c = Math.min(
                Math.max(count + diff, ChairConfig.Min),
                ChairConfig.Max,
            );
            if (c === count) {
                return;
            }
            if (diff > 0) {
                setActive(c);
                setCount(c);
            } else {
                setActive(c);
                setTimeout(() => setCount(c), 300);
            }
        },
        [count, active, setActive, setCount],
    );

    return (
        <div className={s.chairCount}>
            <div
                className={classNames(s.btn, {
                    [s.active]: count > ChairConfig.Min,
                })}
                onClick={() => changeCount(-1)}
            >
                {'-'}
            </div>
            <div className={s.display}>{count}</div>
            <div
                className={classNames(s.btn, {
                    [s.active]: count < ChairConfig.Max,
                })}
                onClick={() => changeCount(1)}
            >
                {'+'}
            </div>
        </div>
    );
}

export default SelectChairsCount;
