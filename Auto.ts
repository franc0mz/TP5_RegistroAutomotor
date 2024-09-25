export class Auto {
    private dueño:string;
    private marca:string;
    private modelo:string;
    constructor(dueño:string, marca:string, modelo:string){
        this.dueño=dueño;
        this.marca=marca;
        this.modelo=modelo;
    }
    public getDueño():string{
        return this.dueño;
    }
    public getMarca():string{
        return this.marca;
    }
    public getModelo():string{
        return this.modelo;
    }
}