import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/Operators';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styles: [
  ]
})
export class EntradaComponent implements OnInit {

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholderH:string='';

  debouncer:Subject<string> = new Subject();

  termino:string='';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    //  console.log('debouncer:', valor);
    })
  }

  buscar(){
     this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any){
   // const valor = event.target.value;
    this.debouncer.next(this.termino);
  }
}
