interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  year: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 20,
  cancion: 'flim',
  detalles: {
    autor: 'Aphex Twin',
    year: 1998,
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

/*console.log('El volumen actual es:', volumen);
console.log('El volumen actual es:', segundo);
console.log('El volumen actual es:', cancion);
console.log('El volumen actual es:', autor);*/

const dbz:string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);

