declare class Datepicker {
  constructor(elem:any, options:any);
}

export function decorarSelectorFecha() {
  const elem: any = document.querySelector('input[type=date]');
  if (elem) {
    new Datepicker(elem, {
      language: 'es',
      format: 'yyyy-mm-dd'
    });
    elem.type = 'text';
  } else {
    console.error('No se ha encontrado ningún input type=date');
  }
};
