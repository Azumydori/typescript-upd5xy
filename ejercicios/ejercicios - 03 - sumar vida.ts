function sumar(a: number, b: number): number {
  return (a + b)
}

/*const sumarflecha = (a:number,b:number):number =>{
  return a + b;
}*/

function multiplicar (numero:number,otronumero?:number, base:number = 2):number{
  return numero * base;
}

const resultado = multiplicar(10, 0, 20);

interface PersonajeLOR {
  nombre: string;
  hp:number;
  mostrarHp: () => void;
}

function curar (personaje: PersonajeLOR, curarX:number): void {
  personaje.hp += curarX;

  console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre:'pepe',
  hp:40,
  mostrarHp() {
    console.log('Puntos de vida', this.hp);
  }
}

curar (nuevoPersonaje, 30)