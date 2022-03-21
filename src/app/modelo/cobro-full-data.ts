import { Banco } from "./banco";
import { Cliente } from "./cliente";

export interface CobroFullData {
    id:number;
    cliente:Cliente;
    importe:number;
    numfactura:number;
    fecha:Date;
    formapago:string;
    banco:Banco;
    estado:boolean;
}
