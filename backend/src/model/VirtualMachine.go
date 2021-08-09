package model

type VirtualMachine struct {
    Id     int    `json:"id,omitempty"`
	Name  string  `json:"name,omitempty"`
	Cpu   int     `json:"cpu,omitempty"`
	Ram   int     `json:"ram,omitempty"`
	Disk  int     `json:"disk,omitempty"`
	DiskType   int     `json:"disk_type,omitempty"`
	Volumes   VirtualVolumes `json:"volumes,omitempty"`
}

type VirtualMachineDB struct {
    Id     int    `json:"id,omitempty"`
	Name  string  `json:"name,omitempty"`
	Cpu   int     `json:"cpu,omitempty"`
	Ram   int     `json:"ram,omitempty"`
	Disk  int     `json:"disk,omitempty"`
	DiskType   int     `json:"disk_type,omitempty"`
	Volumes   string     `json:"volumes,omitempty"`
}

type VirtualMachines []VirtualMachine
