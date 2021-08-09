import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { VirtualMachineService } from '../../service/virtual-machine.service';
import { GetVirtualMachines } from '../../store/actions/vitual-machine.action';
import { VirtualMachineModel } from '../../store/models/virtual-machine';
import { VirtualMachineState } from '../../store/state/virtual-machine.state';

@Component({
  selector: 'app-vm-list',
  templateUrl: './vm-list.component.html',
  styleUrls: ['./vm-list.component.css'],
  providers:  [VirtualMachineService]
})
export class VmListComponent implements OnInit {

  virtualMachines: Observable<VirtualMachineModel[]>;

  constructor(private store: Store, private virtualMachineState: VirtualMachineState) {
    this.virtualMachines = this.store.select(VirtualMachineState.getVirtualMachines);
   }

  ngOnInit(): void {
    this.store.dispatch(new GetVirtualMachines());
  }
}
