import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/button.component';
import { InputErrorComponent } from './ui/input-error.component';
import { SideMenuComponent } from './ui/side-menu.component';
import { NgxsModule } from '@ngxs/store';
import { SideMenuState } from './store/state/side-menu.state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    SideMenuComponent,
    ButtonComponent,
    InputErrorComponent
  ],
  exports: [
    SideMenuComponent,
    ButtonComponent,
    InputErrorComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forRoot([SideMenuState], {
      developmentMode: !environment.production
    }),
  ]
})
export class SharedModuleModule { }
