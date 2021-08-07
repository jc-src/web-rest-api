package model

import (
	"encoding/json"
	"lib/config"
	"lib/helper"
)

type VirtualMachine struct {
    Id     int    `json:"id,omitempty"`
	Name  string  `json:"name,omitempty"`
	Cpu   int     `json:"cpu,omitempty"`
	Ram   int     `json:"ram,omitempty"`
	Disk  int     `json:"disk,omitempty"`
	DiskType   string     `json:"disk_type,omitempty"`
	Volumes   VirtualVolumes `json:"volumes,omitempty"`
}

type VirtualMachineDB struct {
    Id     int    `json:"id,omitempty"`
	Name  string  `json:"name,omitempty"`
	Cpu   int     `json:"cpu,omitempty"`
	Ram   int     `json:"ram,omitempty"`
	Disk  int     `json:"disk,omitempty"`
	DiskType   string     `json:"disk_type,omitempty"`
	Volumes   string     `json:"volumes,omitempty"`
}

type VirtualMachines []VirtualMachine

func queryVirtualMachines(query string) VirtualMachines {
	rows, err := config.DB.Query("SELECT * FROM virtual_machine mv")
	helper.CheckErr(err)
	defer rows.Close()
	machines := make(VirtualMachines, 0)
	for rows.Next() {
		m := VirtualMachine{}
	    err := rows.Scan(&m.Id, &m.Name, &m.Cpu, &m.Ram, &m.Disk, &m.DiskType)
		helper.CheckErr(err)

		machines = append(machines, m)
	}
	return machines
}


func queryVirtualMachine(id int) VirtualMachine {

	query := `select vm.id, vm.name, vm.cpu, vm.ram, vm.disk, vm.disk_type,
	if(count(vv.id) = 0, json_array(), json_arrayagg(json_object
	('id', vv.id, 'name', vv.name, 'disk', vv.disk, 'disk_type', vv.disk_type))) as volumes
	from virtual_machine vm
	left join virtual_machine_volumes vmv on vmv.virtual_machine_id = vm.id
	left join virtual_volume vv on vv.id = vmv.virtual_volume_id
	where vm.id = ? group by vmv.virtual_machine_id limit 1`

	row := config.DB.QueryRow(query, id)

	mdb := VirtualMachineDB{}
	err := row.Scan(&mdb.Id, &mdb.Name, &mdb.Cpu, &mdb.Ram, &mdb.Disk, &mdb.DiskType, &mdb.Volumes)
	helper.CheckErr(err)

	m := VirtualMachine{}
	m.Name = mdb.Name
	m.Cpu = mdb.Cpu
	m.Ram = mdb.Ram
	m.Disk = mdb.Disk
	m.DiskType = mdb.DiskType
	m.Volumes = convertToVMV(mdb.Volumes)

	return m
}

func convertToVMV(data string) VirtualVolumes  {
	
	volumes := VirtualVolumes{}

	json.Unmarshal([]byte(data), &volumes)
	return volumes
}

func FetchAllVirtualMachines() VirtualMachines {
	return queryVirtualMachines("SELECT * FROM virtual_machine")
}

func FetchVirtualVMachine(id int) VirtualMachine {
	return queryVirtualMachine(id)
}