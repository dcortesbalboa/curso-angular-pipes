import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipesApp';

  nombre: string="DavId coTes";
  valor: number=1000;
  obj={
    nombre:"David Cortes"
  }

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  mostrarMensajes(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
