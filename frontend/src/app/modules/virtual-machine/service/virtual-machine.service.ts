import { Injectable } from '@angular/core';
import { VirtualMachine } from '../store/models/virtual-machine';
import { ApiService } from 'src/app/service/api.service';

@Injectable({
    providedIn: 'root'
})
export class VirtualMachineService {

    url: string = '/virtual-machines'; 

    constructor(private api: ApiService) {
    }

    fetchVirtualMachines() {
        return this.api.get<VirtualMachine[]>(this.url);
    }

    fetchVirtualMachine(id: number) {
        return this.api.get<VirtualMachine>(this.url+ '/' + id);
    }

    saveVirtualMachine(payload: VirtualMachine) {
        if (payload.id) {
            return this.api.put<VirtualMachine>(this.url + '/' + payload.id, payload);
        } else {
            return this.api.post<VirtualMachine>(this.url, payload);
        }
    }
/*
    fetchVirtualMachine(id: number) {
        return this.http.get<VirtualMachine>(this.url + '/' + id );
    }

    deleteVirtualMachine(id: number) {
        return this.http.delete(this.url + '/' + id);
    }

    updateVirtualMachine(payload: VirtualMachine, id: number) {
        return this.http.put<VirtualMachine>(this.url + '/' + id, payload);
    }
    */
}