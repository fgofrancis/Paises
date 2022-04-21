import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino :string='';
  hayError:boolean = false;
  paises:Country[]= [];
  cantPaises:number = 0;

  constructor(private _paisService:PaisService){}

  buscar(termino: string){
    this.hayError = false;
    this.termino  = termino;
   // console.log(this.termino);
    
    this._paisService.buscarCapital(this.termino)
    .subscribe(paises =>{
      this.paises = paises;
      this.cantPaises = this.paises.length;

    },(err)=>{
      this.hayError = true;
      this.paises = [];
    });
  }

}
