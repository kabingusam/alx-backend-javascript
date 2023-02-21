/// <reference path="./crud.d.ts" />

import * as CRUD from "./crud";
import {rowID, rowElement} from "./interface"

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}

const newRowID: RowID = CRUD.insertRow {
    
}
const updatedRow: RowElement = {
    ...row,
    age: 23,
}

const rowId: RowID = updateRow(row.id, row);

CRUD.deleteRow(rowID);