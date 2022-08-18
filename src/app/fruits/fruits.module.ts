import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { FruitsRoutingModule } from './fruits-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    FormsModule
  ]
})
export class FruitsModule { }
