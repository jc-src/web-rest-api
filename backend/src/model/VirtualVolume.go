package model

type VirtualVolume struct {
    Id     int    `json:"id,omitempty"`
	Name  string  `json:"name,omitempty"`
	Disk   int     `json:"disk,omitempty"`
	DiskType   int     `json:"disk_type,omitempty"`
}

type VirtualVolumes []VirtualVolume


