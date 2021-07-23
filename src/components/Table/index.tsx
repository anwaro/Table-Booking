import classNames from "classnames";
import React from 'react';

import {TableType} from "../../constants/Table";
import s from './style.module.scss';
import {useTableStyle} from "./useTableStyle";

type TableProps = {
    chairCount: number;
    tableType: TableType;
}

function Table({chairCount, tableType}: TableProps) {
    const {width, height} = useTableStyle(chairCount, tableType)

    return (
        <div className={classNames(s.table, s[tableType.toLowerCase()])} style={{width, height}}>

        </div>
    );
}

export default Table;
