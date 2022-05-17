interface superHeroe{
  nombre:string,
  edad:number;
  mostrarDireccion: () => string;
}

interface Direccion {
  calle: string;
  pais:string;
  ciudad:string;
}

const superHeroe = {
  nombre:'Spiderman',
  edad:30,
  direccion:{
      calle:'Main st',
      pais:'USA',
      ciudad:'NY'

  },
  mostrarDireccion(){
    return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais;
  }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);