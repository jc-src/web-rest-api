import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VmEditComponent } from './components/vm-edit/vm-edit.component';
import { VmListComponent } from './components/vm-list/vm-list.component';
import { VmViewComponent } from './components/vm-view/vm-view.component';


const virtualMachineRoutes: Routes = [
  { path: 'virtual-machines',  component: VmListComponent },
  { path: 'virtual-machines/add',  component: VmEditComponent },
  { path: 'virtual-machines/edit/:id',  component: VmEditComponent },
  { path: 'virtual-machines/view/:id', component: VmViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(virtualMachineRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VirtualMachineRoutingModule { }