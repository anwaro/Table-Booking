import {useState} from 'react';
import {TableType} from "../../constants/Table";
import {tableSize} from "../../helpers/table";

export function useTableStyle(chairCount: number, tableType: TableType) {
    const [test, setTest] = useState(0);


    return {
        ...tableSize(chairCount, tableType)
    };
}
