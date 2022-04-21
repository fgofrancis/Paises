import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones:string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string ='';
  
  paises:Country[]= [];
  cantPaises:number=0;
  hayError:boolean = false;

  constructor(private _paisService:PaisService) { }
 

  getClaseCSS(region: string): string{
    return(region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region: string){
    if(region === this.regionActiva) {return;}
    
    this.regionActiva = region;
    this.cantPaises = 0;
    this.paises = [];

    this._paisService.getPaisPorRegiones(this.regionActiva)
        .subscribe(paises => {
          this.paises = paises,
          this.cantPaises =this.paises.length
        },(err)=>{
          this.hayError = true;
          this.paises = [];
        });
  }


}
