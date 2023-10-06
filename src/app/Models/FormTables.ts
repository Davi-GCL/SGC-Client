import { ICheckTable } from "./ICheckTable"

export class FormTables {
    constructor(tablesList:Array<ICheckTable> , sgbd:number , connString:string, namespace:string){
        this.selectedTables = <string[]> tablesList.filter(x=>x.isChecked).map((x)=> x.name);
        this.sgbd = sgbd;
        this.connString = connString;
        this.namespace = namespace;
        // this.databaseName = databaseName;
    }

    // databaseName: string = ''
    sgbd: number = 0;
    connString: string = '';
    selectedTables: Array<string> = [];
    namespace: string = '';
}