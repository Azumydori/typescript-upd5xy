

interface Pasajero {
  nombre:string,
  hijos?: string[],
}

const pasajero1: Pasajero ={
  nombre:'Melissa',

}

const pasajero2: Pasajero = {
  nombre:'Yan',
  hijos:['amelia', 'Joaquin']
}

function imprimeHijos (pasajero: Pasajero):void{
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimeHijos(pasajero1);