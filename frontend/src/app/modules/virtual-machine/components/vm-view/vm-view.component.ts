import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';

import { Subscription } from 'rxjs';
import { VirtualMachineService } from '../../service/virtual-machine.service';
import { GetVirtualMachine } from '../../store/actions/vitual-machine.action';
import { VirtualMachineModel } from '../../store/models/virtual-machine';
import { VirtualMachineState } from '../../store/state/virtual-machine.state';

@Component({
  selector: 'app-vm-view',
  templateUrl: './vm-view.component.html',
  styleUrls: ['./vm-view.component.css'],
  providers: [VirtualMachineService],
})
export class VmViewComponent implements OnInit, OnDestroy {
  virtualMachine: VirtualMachineModel | null = null;

  subscription: Subscription;

  id: number | null = null;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.subscription = this.store
      .select(VirtualMachineState.getVirtualMachine)
      .subscribe((vm) => (this.virtualMachine = vm));
  }

  ngOnInit(): void {
    const strId = this.route.snapshot.paramMap.get('id');
    this.id = strId ? parseInt(strId) : null;
    if (this.id) {
      this.store.dispatch(new GetVirtualMachine(this.id));
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
