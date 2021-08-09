import { environment } from "src/environments/environment";

export interface VirtualMachine {
    id: number | null;
    name: string | null;
	cpu: number | null;
	ram: number | null;
	disk: number | null;
	disk_type: number | null;
}

export class VirtualMachineModel implements VirtualMachine
{
	id: number | null = null;
    name: string | null = null;
	cpu: number | null = null;
	ram: number | null = null;
	disk: number | null = null;
	disk_type: number | null = null;

	diskTypes: { [key: number]: string; } = environment.config.virtialMachine.disk_type;

	get diskType(): string {
		return this.disk_type ? this.diskTypes[this.disk_type] : ' - ' + this.disk_type + '-';
	}
}