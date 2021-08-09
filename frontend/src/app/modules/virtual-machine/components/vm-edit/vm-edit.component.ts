import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { AddVirtualMachine, GetVirtualMachine } from '../../store/actions/vitual-machine.action';
import { VirtualMachine, VirtualMachineModel } from '../../store/models/virtual-machine';
import { VirtualMachineState } from '../../store/state/virtual-machine.state';

@Component({
  selector: 'app-vm-edit',
  templateUrl: './vm-edit.component.html',
  styleUrls: ['./vm-edit.component.css']
})
export class VmEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  diskTypes: { [key: number]: string; }= [];
  id: number | null = null;

  vmForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    cpu: new FormControl('', Validators.required),
    ram: new FormControl('', Validators.required),
    disk: new FormControl('', Validators.required),
    disk_type: new FormControl('', Validators.required),
  });

  virtualMachine: VirtualMachine = new VirtualMachineModel();

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.diskTypes = this.virtualMachine.diskTypes;
    this.subscription = this.store
    .select(VirtualMachineState.getVirtualMachine)
    .subscribe((vm) => {
      if (vm) {
        this.virtualMachine = vm;
        const values = {
          name: this.virtualMachine?.name,
          cpu: this.virtualMachine?.cpu,
          ram: this.virtualMachine?.ram,
          disk: this.virtualMachine?.disk,
          disk_type: this.virtualMachine?.disk_type,
        };
        this.vmForm.patchValue(values);
      }
      // TODO not found
    });
    // this.router.navigate(['/virtual-machines'])
    // todo refresh after update, and if NEW then route to 
    // this.router.navigate(['/virtual-machines/view', this.id])
  }

  addVirtualMachine() {
    const values: {} = this.vmForm.value;
    const data = Object.assign(this.virtualMachine, values);
    if (this.id) {
      this.store.dispatch(new AddVirtualMachine(data));
    } else {
      this.store.dispatch(new AddVirtualMachine(data));
    }
  }

  ngOnInit() {
    this.id = null;
    const strId = this.route.snapshot.paramMap.get('id');
    this.id = strId ? parseInt(strId) : null;
    if (this.id) {
      this.store.dispatch(new GetVirtualMachine(this.id));
    }
    this.vmForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
