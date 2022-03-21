import { Banco } from "./banco";
import { Proveedor } from "./proveedor";

export interface PagoFullData {
    id:number;
    proveedor:Proveedor;
    importe:number;
    numfactura:number;
    fechavencimiento:Date;
    formapago:string;
    idbanco:Banco;
    estado:boolean;
}
