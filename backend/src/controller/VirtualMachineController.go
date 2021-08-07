package controller

import (
	"net/http"
	"strconv"

	"lib/helper"
	"lib/model"

	"github.com/julienschmidt/httprouter"
)

type (
	VirtualMachineController struct{}
)

func NewVirtualMachineController() *VirtualMachineController {
	return &VirtualMachineController{}
}

// index
func (vma VirtualMachineController) Index(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	
	render := helper.NewResponseHelper()

	volumes := model.VirtualVolumes{}
	vv := model.VirtualVolume{}
	vv.Name = "name v";
	volumes = append(volumes, vv)

	mdl := model.VirtualMachine{123, "hello world", 2, 128, 20, "ssd", volumes}

	render.Render(mdl, w)
	//fmt.Fprintln(w, "Welcome to Virtua machine endpoint!")
}

// List all VirtualMachines
func (vma VirtualMachineController) GetVirtualMachines(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	//var err error

	machines := model.FetchAllVirtualMachines()

	render := helper.NewResponseHelper()
	render.Render(machines, w)
}

func (vma VirtualMachineController) GetVirtualMachine(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	i := p.ByName("id")
	id, _ := strconv.Atoi(i)

	machine := model.FetchVirtualVMachine(id)

	render := helper.NewResponseHelper()

	render.Render(machine, w)
}