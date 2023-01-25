import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  textoLower: string="david";
  textoUpper: string="DAVID";
  textoCompleto: string="daViD CoRtEs";
  fecha: Date=new Date();
}
