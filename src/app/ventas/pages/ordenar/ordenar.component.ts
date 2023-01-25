import { Component } from '@angular/core';
import { Heroe, color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  palabra:string='nosotros';
  enMay:boolean=true;
  orderBy: string='none';

  heroes: Heroe[]=[{
    nombre: 'Superman',
    vuela: true,
    color: color.rojo
  },{
    nombre:'Batman',
    vuela: false,
    color: color.negro
  },{
    nombre:'Robin',
    vuela: false,
    color: color.verde
  },{
    nombre:'Daredevil',
    vuela: false,
    color: color.rojo
  },{
    nombre:'Linterna verde',
    vuela: true,
    color: color.verde
  }];

  cambiarOrder(order: string){
    this.orderBy=order;
  }
}
