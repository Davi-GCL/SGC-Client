export class Column{
    tableName!: string;

    name!: string;

    isPrimaryKey!: boolean;

    isNullable!: boolean;

    type!:string;

    charMaxLength!:number | null;
}