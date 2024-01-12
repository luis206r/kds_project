import { RenderResult } from "@testing-library/react";

const elementos:string[] = [
    // Entradas
    'Ceviche',
    'Tiradito',
    'Causa Rellena',
    'Tequeños',
    'Papa Rellena',
    'Chicharrón de Calamar',
    'Yuquitas a la Huancaina',
    
    // Platos Principales
    'Lomo Saltado',
    'Aji de Gallina',
    'Arroz con Mariscos',
    'Seco de Cordero',
    'Chaufa de Pollo',
    'Tacu Tacu con Lomo Fino',
    'Aeropuerto',
    'Rocoto Relleno',
    'escabeche de pollo',
    'estofado de pollo',
    
    // Bebidas
    'Pisco Sour',
    'Chicha Morada',
    'Inca Kola',
    'Mate de Coca',
    'Jugo de Maracuyá',
    'Chilcano de Pisco',
    'Cerveza Cusqueña',
    
    // Postres
    'Suspiro a la Limeña',
    'Tres Leches',
    'Mazamorra Morada',
    'Arroz con Leche',
    'Alfajores',
    'Picarones',
    'King Kong',
    'Helado de Lucuma',
  ];

  class FakeData {
    private elements:string[] = [];
    constructor() {
      this.elements = elementos;
    }
    getSomeFood = (size:number): string[] =>{
        let result:string[] = [];
        for(let x:number=0; x<size; x++){
            let y:number = Math.floor(Math.random() * this.elements.length) ;
            result.push(this.elements[y]);
        }   
        for(let x:number = 0; x<result.length; x++){
            const ocurrencias = result.filter((e) => e === result[x]).length;
            result[x] = 'x' + ocurrencias + ' ' + result[x];
        }
        const result2 = result.filter((elemento, index, self) => {
            return self.indexOf(elemento) === index;
          });
        return result2;
    }
  }
  
  export default new FakeData();