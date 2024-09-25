import { Auto } from "./Auto";
import { Motos } from "./Motos";
import { Camion } from "./Camion";
import { RegistroAutomotor } from "./Registro";
import { log } from "console";

// Crear elementos en cada categoria
const auto1 = new Auto("Juan","Ford","Focus");
const moto1 = new Motos("Alberto","Honda","125");
const camion =new Camion("Gaston","Scania","aaa");
const auto2 =new Auto ("Ana","Ford","Ka");
const auto3 =new Auto ("Jose","Ford","Mondeo");
const registroAutomotor = new RegistroAutomotor("Registro Olavarria");
//Datos del auto1-------------------------------
console.log("Registro auto1: ",auto1);
console.log("----------------------------------")

//Se agregan para probar
registroAutomotor.AgregarAuto(auto1);
registroAutomotor.AgregarAuto(auto2);
registroAutomotor.AgregarAuto(auto3);

registroAutomotor.AgregarMoto(moto1);

registroAutomotor.AgregarCamion(camion);

//Solo nombre de Dueños de vehiculos
console.log(`registro de todos los dueños de los vehiculos en todas las categorias: Autos:${registroAutomotor.getAuto().map(registroAutomotor=>registroAutomotor.getDueño())} , motos: ${registroAutomotor.getMoto().map(registroAutomotor=>registroAutomotor.getDueño())} , Camiones: ${registroAutomotor.getCamion().map(registroAutomotor=>registroAutomotor.getDueño())}`)

//Dar de baja el auto de Juan--------------
registroAutomotor.bajaAuto("Juan");
console.log(`registro de autos se da de baja a Juan, solo quedan dos: ${registroAutomotor.getAuto().map(registroAutomotor=>registroAutomotor.getDueño())}`);

//Datos de moto1-------------------
console.log(`motos: ${registroAutomotor.getMoto().map(registroAutomotor=>registroAutomotor.getDueño())}, ${moto1.getMarca()}, ${moto1.getModelo()}`);

console.log("----------------------------------");
//Lista de vehiculos en cada categoria
console.log("Lista de todas las motos ",registroAutomotor.getMoto());
console.log("Lista de todas los autos ",registroAutomotor.getAuto());
console.log("Lista de todos los camiones ",registroAutomotor.getCamion());
