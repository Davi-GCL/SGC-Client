import { CheckTable } from "./CheckTable"

export class FormTables {
    constructor(tablesList:Array<CheckTable> , sgbd:number , connString:string, namespace:string){
        this.selectedTablesNames = <string[]> tablesList.filter(x=>x.isChecked).map((x)=> x.name);
        this.sgbd = sgbd;
        this.connString = connString;
        this.namespace = namespace;
        // this.databaseName = databaseName;
    }

    // databaseName: string = ''
    sgbd: number = 0;
    connString: string = '';
    selectedTablesNames: Array<string> = [];
    namespace: string = '';
}