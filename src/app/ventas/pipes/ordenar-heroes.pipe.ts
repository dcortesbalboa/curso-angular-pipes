import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenarHeroes'
})
export class OrdenarHeroesPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string='none'): Heroe[] {

      switch(orderBy){
        case 'nombre':
          return heroes.sort((heroe1, heroe2) => (heroe1.nombre>heroe2.nombre) ? 1 : -1);
          break;

        case 'vuela':
          return heroes.sort((heroe1, heroe2) => (heroe1.vuela>heroe2.vuela) ? 1 : -1);
          break;

        case 'color':
          return heroes.sort((heroe1, heroe2) => (heroe1.color>heroe2.color) ? 1 : -1);
          break;

        default:
          return heroes;
      }

    return heroes.sort((heroe1, heroe2) => {


      if(orderBy==='nombre'){

      }
       if(heroe1.nombre>heroe2.nombre){
          return 1;
       } 
       return -1;
      
    });
  }

}
