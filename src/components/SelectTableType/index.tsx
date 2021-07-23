import classNames from "classnames";
import React from 'react';
import {TableType} from "../../constants/Table";
import s from './style.module.scss';

type SelectTableTypeProps = {
    setTableType: (tableType: TableType) => void;
    tableType: TableType;
}

function SelectTableType({setTableType, tableType}: SelectTableTypeProps) {

    return (
        <div className={s.tableType}>
            {Object.values(TableType).map(type =>
                <div key={type} className={classNames(s.table, s[type.toLowerCase()], {
                    [s.active]: type === tableType
                })} onClick={() => setTableType(type)}/>
            )}
        </div>
    );
}

export default SelectTableType;
