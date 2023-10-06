import { Column } from "./Column"

export class Table{
    name:string = '';
    catalog:string = '';
    columns: Array<Column> = [];
}