import { VirtualMachine } from "../models/virtual-machine";


export class AddVirtualMachine {
    static readonly type = '[VirtualMachine] Add';

    constructor(public payload: VirtualMachine) {}
}

export class GetVirtualMachines {
    static readonly type = '[VirtualMachine] Get All';
}

export class LoadedVirtualMachines {
    static readonly type = '[VirtualMachine] All Loaded';

    constructor(public payload: any) {}
}