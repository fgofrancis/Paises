import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';

import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent {

 @Input('paisesH') paises:Country[] = [];

 //Observable ejemplo aislado
 miObservable = interval(300);// genera los numero 0,1,2,3,4..00 cada 300 milisegundo

  constructor() { }


}
