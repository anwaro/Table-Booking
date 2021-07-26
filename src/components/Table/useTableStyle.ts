import {TableType} from "../../constants/Table";
import {tableSize} from "../../helpers/table";

export function useTableStyle(chairCount: number, tableType: TableType) {
    return {
        ...tableSize(chairCount, tableType)
    };
}
