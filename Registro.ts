/*
Ejercicio 5
• Implementar la clase RegistroAutomotor (Autos, Motos, Camiones) y deben tener los metodos:
• AgregarVehiculo, get y set, modificar un vehiculo, dar de baja
• incorporando los conceptos nuevos:
• Encapsulamiento y composicion.

• Mandar el link al repositorio de GitHub
Aclaración: no hay una sola forma de tener bien los ejercicios → lo que importa es saber justificar bien las decisiones que se tomen
*/
import { Auto } from "./Auto";
import { Motos } from "./Motos";
import { Camion } from "./Camion";

export class RegistroAutomotor{
    private nombre:string;
    private auto:Auto[];
    private moto:Motos[];
    private camion:Camion[];

    constructor(nombre:string,auto?:Auto[], moto?:Motos[],camion?:Camion[]){
        this.nombre=nombre;
        if (auto!=undefined) {
            this.auto=auto;
        }else{
            this.auto=[]
        }if (moto!=undefined) {
            this.moto=moto;
        }else{
            this.moto=[]
        }
        if (camion!=undefined) {
            this.camion=camion;
        }else{
            this.camion=[]
        }        
    }
    AgregarAuto(auto:Auto):void{
        this.auto.push(auto);
    }
    bajaAuto(dueño: string): void {
        this.auto = this.auto.filter(auto => auto.getDueño() !== dueño);
    }
    AgregarMoto(moto:Motos):void{
        this.moto.push(moto);
    }
    AgregarCamion(camion:Camion):void{
        this.camion.push(camion);
    }
    
    public getAuto() : Auto[] {
        return this.auto;
    }
    public getMoto():Motos[]{
        return this.moto;
    }
    public getCamion():Camion[]{
        return this.camion;
    }
}
