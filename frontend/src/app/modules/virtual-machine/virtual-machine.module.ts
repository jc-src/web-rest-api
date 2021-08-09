import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmListComponent } from './components/vm-list/vm-list.component';
import { VmViewComponent } from './components/vm-view/vm-view.component';
import { VmEditComponent } from './components/vm-edit/vm-edit.component';
import { VirtualMachineRoutingModule } from './virtual-machine-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { VirtualMachineState } from './store/state/virtual-machine.state';
import { environment } from 'src/environments/environment';
import { VirtualMachineService } from './service/virtual-machine.service';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    VmListComponent,
    VmViewComponent,
    VmEditComponent
  ],
  imports: [
    SharedModuleModule,
    VirtualMachineRoutingModule,
    CommonModule,
    NgxsModule.forRoot([VirtualMachineState], {
      developmentMode: !environment.production
    }),
    ReactiveFormsModule
  ],
  providers: [
    VirtualMachineService
    
  ]
})

export class VirtualMachineModule { }
