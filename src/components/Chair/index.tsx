import React from 'react';

import {TableType} from '../../constants/Table';

import s from './style.module.scss';
import {useChairStyle} from './useChairStyle';

type ChairProps = {
    index: number;
    count: number;
    active: boolean;
    tableType: TableType;
};

function Chair({index, count, tableType, active}: ChairProps) {
    const style = useChairStyle(index, count, active, tableType);
    return (
        <div className={s.chairWrapper} style={style}>
            <div className={s.chair}>
                <div className={s.chairD} />
            </div>
        </div>
    );
}

export default Chair;
