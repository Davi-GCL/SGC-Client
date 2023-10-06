export class FormConnection {
    constructor(sgbdRadio:any, connString:any){
        if(sgbdRadio == null || connString == null)throw new Error("Argumentos do construtor FormConnection nulos!")
        this.sgbd = sgbdRadio;
        this.connString = connString;
    }
    
    sgbd:number = 0;
    connString:string = '';
}