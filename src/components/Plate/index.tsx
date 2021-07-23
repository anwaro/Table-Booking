import React from 'react';
import {TableType} from "../../constants/Table";
import s from './style.module.scss';
import {usePlateStyle} from "./usePlateStyle";

type PaleProps = {
    index: number;
    count: number;
    active: boolean;
    tableType: TableType
}


function Pale({index, count, tableType, active}: PaleProps) {
    const style = usePlateStyle(index, count, active, tableType)
    return (
        <div className={s.paleWrapper} style={style}>
            <div className={s.pale}/>
        </div>
    );
}

export default Pale;
