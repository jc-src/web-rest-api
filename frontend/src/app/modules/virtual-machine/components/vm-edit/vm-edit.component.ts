import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddVirtualMachine } from '../../store/actions/vitual-machine.action';
import { VirtualMachine } from '../../store/models/virtual-machine';

@Component({
  selector: 'app-vm-edit',
  templateUrl: './vm-edit.component.html',
  styleUrls: ['./vm-edit.component.css']
})
export class VmEditComponent implements OnInit {

  vmForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    cpu: new FormControl('', Validators.required),
  });

  virtualMachine: VirtualMachine = {
    id: null,
    name: null,
    cpu: null,
    ram: 10,
    disk: 2,
    disk_type: 1
  }

  constructor(private store: Store) {
    this.vmForm.reset();
  }

  addVirtualMachine() {
    const values: {} = this.vmForm.value;
    const data = Object.assign(this.virtualMachine, values);
    console.dir({"submitted": true, data});
    this.store.dispatch(new AddVirtualMachine(data));
  }

  ngOnInit() {
  }

}
