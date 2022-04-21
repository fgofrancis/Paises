import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor:pointer;
    }  
  `
  ]
})
export class PorPaisComponent {

  termino :string='';
  hayError:boolean = false;
  paises:Country[]= [];
  cantPaises:number=0;

  paisesSugeridos   :Country[]= [];
  mostrarSugerencias:boolean=false;
  

  constructor(private _paisService:PaisService){}
 
  buscar(termino: string){
    this.hayError = false;
    this.termino  = termino;
    this.cantPaises = 0;
    
    this._paisService.buscarPais(this.termino)
    .subscribe(paises =>{
      this.paises = paises;
      this.cantPaises = this.paises.length;
     },(err)=>{
      console.log('Error...', err)
      this.hayError = true;
      this.paises = [];
    });
  }
  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias= true;

    this._paisService.buscarPais(termino)
      .subscribe( paises => this.paisesSugeridos = paises.slice(0,5),
      (err) => this.paisesSugeridos = []
      );
  }

  buscarSugerido(termino: string){
     this.buscar(termino);
  }

}
