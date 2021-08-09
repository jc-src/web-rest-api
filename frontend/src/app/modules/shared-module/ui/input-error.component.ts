import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

// <app-input-error></app-input-error>
@Component({
  selector: 'app-input-error',
  template: `
    <div *ngIf="control?.invalid && (control?.dirty || control?.touched)" class="alert alert-danger">
      <div *ngIf="control?.errors?.required">
        {{ name }} is required!
      </div>
    </div>
  `,
})
export class InputErrorComponent {

  @Input() name: string = ''
  @Input() control: AbstractControl | null = null;
}
