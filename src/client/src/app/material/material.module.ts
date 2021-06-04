import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
  MatButtonModule,
  MatSliderModule
]

@NgModule({
  imports: [
    
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
