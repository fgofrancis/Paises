import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
// import { switchMap } from 'rxjs/operators';


import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
 
  public pais!:Country;
  public latitud!:number;
  public longitud!:number;
  public nombre!:string;
  
  constructor( 
      private activatedRoute: ActivatedRoute,
      private _paisService  : PaisService) { }

  ngOnInit(): void {
    // ActivatedRoute este monitorea los cambios en la ruta, es un Obsr
   // switchMap toma el resultado de un Obs y lo usa como argumento en otro Obs.
    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this._paisService.getPaisPorAlpha(param.id))
        // tap(console.log)
        // tap(resp => console.log(resp))
      )      
      // .subscribe(pais => this.pais = pais[0]);
      .subscribe(pais => {
        this.pais = pais[0];
        this.latitud = pais[0].latlng[0]; 
        this.longitud = pais[0].latlng[1];
        this.nombre= pais[0].name.common;
      });

   /* Realizaremos este codio con RxJS,  ver arriba*/
    // this.activatedRoute.params
    // .subscribe( ({id}) =>{
    //   console.log(id);
      
    //   this._paisService.getPaisPorAlpha(id)
    //       .subscribe( pais =>{
    //         console.log(pais);
    //         this.pais = pais;
    //       });
    //  })
    
  }


}
