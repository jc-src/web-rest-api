import { Component, Input } from '@angular/core';

// <app-button [disabled]="form.pristine || form.invalid">Save</app-button>
@Component({
  selector: 'app-button',
  template: `
    <div class="mt-2">
      <button class="btn btn-primary" [disabled]="disabled">
        <ng-content></ng-content>
      </button>
    </div>
  `,
})
export class ButtonComponent {

  private _disabled: boolean = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }
}
