import {
  calculaISV,
  Producto,
} from './ejercicios/Ejercicio 06 - Desestructuracion de argumentos';

const carritoCompras: Producto[] = [
  {
    desc: 'telefono 1',
    precio: 100,
  },
  {
    desc: 'telefono 2',
    precio: 200,
  },
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);
