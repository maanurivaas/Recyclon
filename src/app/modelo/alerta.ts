export type Nivel = 'info'|'success'|'warning'|'danger';

export interface Alerta {
  mensaje: string;
  nivel: Nivel;
}
