package repository

import (
	"encoding/json"
	"lib/config"
	"lib/helper"
	"lib/model"
	"strconv"
)

type (
	VirtalMachineRepository struct{}
)

func NewVirtalMachineRepository() *VirtalMachineRepository {
	return &VirtalMachineRepository{}
}

func (repo VirtalMachineRepository) queryVirtualMachines(query string) model.VirtualMachines {
	rows, err := config.DB.Query("SELECT * FROM virtual_machine mv")
	helper.CheckErr(err)
	defer rows.Close()
	machines := make(model.VirtualMachines, 0)
	for rows.Next() {
		m := model.VirtualMachine{}
	    err := rows.Scan(&m.Id, &m.Name, &m.Cpu, &m.Ram, &m.Disk, &m.DiskType)
		helper.CheckErr(err)

		machines = append(machines, m)
	}
	return machines
}


func (repo VirtalMachineRepository) queryVirtualMachine(id int) model.VirtualMachine {

	query := `select vm.id, vm.name, vm.cpu, vm.ram, vm.disk, vm.disk_type,
	if(count(vv.id) = 0, json_array(), json_arrayagg(json_object
	('id', vv.id, 'name', vv.name, 'disk', vv.disk, 'disk_type', vv.disk_type))) as volumes
	from virtual_machine vm
	left join virtual_machine_volumes vmv on vmv.virtual_machine_id = vm.id
	left join virtual_volume vv on vv.id = vmv.virtual_volume_id
	where vm.id = ? group by vmv.virtual_machine_id limit 1`

	row := config.DB.QueryRow(query, id)

	mdb := model.VirtualMachineDB{}
	err := row.Scan(&mdb.Id, &mdb.Name, &mdb.Cpu, &mdb.Ram, &mdb.Disk, &mdb.DiskType, &mdb.Volumes)
	helper.CheckErr(err)

	m := model.VirtualMachine{}
	m.Name = mdb.Name
	m.Cpu = mdb.Cpu
	m.Ram = mdb.Ram
	m.Disk = mdb.Disk
	m.DiskType = mdb.DiskType
	m.Volumes = repo.convertToVMV(mdb.Volumes)

	return m
}

func (repo VirtalMachineRepository) convertToVMV(data string) model.VirtualVolumes  {
	
	volumes := model.VirtualVolumes{}

	json.Unmarshal([]byte(data), &volumes)
	return volumes
}

func (repo VirtalMachineRepository) FetchAllVirtualMachines() model.VirtualMachines {
	return repo.queryVirtualMachines("SELECT * FROM virtual_machine")
}

func (repo VirtalMachineRepository) FetchVirtualMachine(id int) model.VirtualMachine {
	return repo.queryVirtualMachine(id)
}

func (repo VirtalMachineRepository) InsertVirtualMachine(vm model.VirtualMachine) model.VirtualMachine {
	sqlStr := "INSERT INTO virtual_machine(name, cpu, ram, disk, disk_type) VALUES (?, ?, ?, ?, ?)"
	stmt, err := config.DB.Prepare(sqlStr)
	helper.CheckErr(err)
	res, err := stmt.Exec(vm.Name, strconv.Itoa(vm.Cpu), strconv.Itoa(vm.Ram), strconv.Itoa(vm.Disk), strconv.Itoa(1))
	helper.CheckErr(err)

	id, err := res.LastInsertId()
	vm.Id = int(id)
	return vm
}

func (repo VirtalMachineRepository) UpdateVirtualMachine(vm model.VirtualMachine) model.VirtualMachine {
	sqlStr := "UPDATE virtual_machine SET name=?, cpu=?, ram=?, disk=?, disk_type=? WHERE id = ?"
	stmt, err := config.DB.Prepare(sqlStr)
	helper.CheckErr(err)
	id := strconv.Itoa(vm.Id)
	stmt.Exec(vm.Name, strconv.Itoa(vm.Cpu), strconv.Itoa(vm.Ram), strconv.Itoa(vm.Disk), strconv.Itoa(vm.DiskType), id)
	helper.CheckErr(err)

	return vm
}