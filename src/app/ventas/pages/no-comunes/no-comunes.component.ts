import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string="Susana";
  genero: string="F";

  invitacionMapa={
    'F': 'invitarla',
    'M': 'invitarlo'
  }

  cambiarCliente(){
    if(this.genero=='F'){
      this.genero='M';
      this.nombre='David'
    }else{
      this.genero='F';
      this.nombre='Susana'
    }
  }

  //i18nPlural
  clientes: string[]=[
    'Maria',
    'Pedro',
    'Juan'
  ]

  clientesMapa ={
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': ' tenemos  # clientes esperando'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValuePipe
  persona={
    nombre: 'David',
    edad: 47,
    location: 'Jaén',
    amigos: ['Ginés', 'Lolo'],

    mensaje(){
      console.log("hola")
    }
  }

  //AsyncPipe
  miObservable=interval(5000);

  valorPromesa=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa)')
    }, 3500)
    
  })
}
