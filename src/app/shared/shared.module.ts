import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { CantPaisesComponent } from './cant-paises/cant-paises.component';




@NgModule({
  declarations: [
    SidebarComponent,
    CantPaisesComponent
  ],
  exports:[
    SidebarComponent,
    CantPaisesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
