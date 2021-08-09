
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddVirtualMachine, GetVirtualMachines } from '../actions/vitual-machine.action';
import { VirtualMachine, VirtualMachineModel } from '../models/virtual-machine';
import { tap } from 'rxjs/operators';
import { VirtualMachineService } from '../../service/virtual-machine.service';
import { Injectable } from '@angular/core';
import { VirtualMachineModule } from '../../virtual-machine.module';


export class VirtualMachineStateModel {
    virtualMachines: VirtualMachine[] = [];
    virtualMachine = null;
}

@State<VirtualMachineStateModel>({
    name: 'virtualMachines',
    defaults: {
        virtualMachines: [],
        virtualMachine: null
    }
})
@Injectable()
export class VirtualMachineState {

    constructor(private service: VirtualMachineService) { }

    @Selector()
    static getVirtualMachines(state: VirtualMachineStateModel) {
        return state.virtualMachines.map(
            obj => Object.assign(new VirtualMachineModel(), obj)
        )
    }

    @Selector()
    static getVirtualMachine(state: VirtualMachineStateModel) {
        return state.virtualMachine ? Object.assign(new VirtualMachineModel(), state.virtualMachine) : null;
    }

    @Action(AddVirtualMachine)
    add({getState, patchState }: StateContext<VirtualMachineStateModel>, { payload }: AddVirtualMachine) {
        const state = getState();
        patchState({
            virtualMachines: [...state.virtualMachines, payload]
        });
        return this.service.saveVirtualMachine(payload).pipe(tap(value => {
            console.log('updated on save', value);
          }));
    }

    @Action(GetVirtualMachines)
    getAll({getState, setState}: StateContext<VirtualMachineStateModel>) {
        const state = getState();
        
        return this.service.fetchVirtualMachines().pipe(tap(value => {
            setState({
              ...state,
              virtualMachines: value
            });
          }));
    }
}