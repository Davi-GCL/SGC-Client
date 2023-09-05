export class FormConnection {
    constructor({sgbdRadio, connString}:any){
        this.sgbdRadio = sgbdRadio;
        this.connString = connString;
    }
    
    sgbdRadio:number = 0;
    connString:string = '';
}