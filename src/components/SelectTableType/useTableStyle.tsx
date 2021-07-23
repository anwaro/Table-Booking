import {useState} from 'react';
import {TableType} from "../../constants/Table";

export default function useTableStyle(chairCount: number, tableType: TableType) {
    const [test, setTest] = useState(0);


    return {
        width: 500,
        height: 500,
    };
}
