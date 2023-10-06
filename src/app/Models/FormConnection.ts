export class FormConnection {
    constructor({sgbdRadio, connString}:any){
        this.sgbd = sgbdRadio;
        this.connString = connString;
    }
    
    sgbd:number = 0;
    connString:string = '';
}