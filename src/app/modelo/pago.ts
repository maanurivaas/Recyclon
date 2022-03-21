export interface Pago {
    id:number
    idproveedor:number
    importe:number
    numfactura:number
    fechavencimiento:Date
    formapago:string
    idbanco:number
    estado:boolean
}
