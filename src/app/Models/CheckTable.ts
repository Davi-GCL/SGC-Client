import { Column } from "./Column";

export class CheckTable {
    constructor(name:string, isChecked:boolean, columns: Array<Column>){
        this.name = name;
        this.isChecked = isChecked;
        this.columns = columns;
    }

    name!:string
    isChecked!:boolean
    columns!: Array<Column>
}