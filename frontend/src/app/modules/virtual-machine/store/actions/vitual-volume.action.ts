import { VirtualVolume } from "../models/virtual-volumne";


export class AddVirtualVolume {
    static readonly type = '[VirtualVolume] Add';

    constructor(public payload: VirtualVolume) {}
}