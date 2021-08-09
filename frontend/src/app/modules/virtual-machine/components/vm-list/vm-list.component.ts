import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { VirtualMachineService } from '../../service/virtual-machine.service';
import { GetVirtualMachines } from '../../store/actions/vitual-machine.action';
import { VirtualMachine } from '../../store/models/virtual-machine';

@Component({
  selector: 'app-vm-list',
  templateUrl: './vm-list.component.html',
  styleUrls: ['./vm-list.component.css'],
  providers:  [VirtualMachineService]
})
export class VmListComponent implements OnInit {

  virtualMachines: Observable<VirtualMachine[]>;

  constructor(private store: Store) {
    this.virtualMachines = this.store.select(state => state.virtualMachines.virtualMachines);
   }

  ngOnInit(): void {
    this.store.dispatch(new GetVirtualMachines());
  }

}
