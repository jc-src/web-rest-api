import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/button.component';
import { InputErrorComponent } from './ui/input-error.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputErrorComponent
  ],
  exports: [
    ButtonComponent,
    InputErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
