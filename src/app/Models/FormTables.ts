import { ICheckTable } from "./ICheckTable"

export class FormTables {
    constructor(tablesList:Array<ICheckTable> , databaseName:string , namespace:string){
        this.selectedTables = <string[]> tablesList.filter(x=>x.isChecked).map((x)=> x.name);
        this.databaseName = databaseName;
        this.namespace = namespace;
    }

    databaseName: string = ''
    selectedTables: Array<string> = []
    namespace: string = ''
}