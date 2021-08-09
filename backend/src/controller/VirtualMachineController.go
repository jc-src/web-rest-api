package controller

import (
	"encoding/json"
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

	render.Render(nil, w)
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

	machine := model.FetchVirtualMachine(id)

	render := helper.NewResponseHelper()

	render.Render(machine, w)
}

func (vma VirtualMachineController) SaveVirtualMachine(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	// Stub an order_details to be populated from the body
	vm := model.VirtualMachine{}

	// Populate the order_details data
	json.NewDecoder(r.Body).Decode(&vm)

	svm := model.SaveVirtualMachine(vm)

	/*
	i := p.ByName("id")
	id, _ := strconv.Atoi(i)

	if id > 0 | id = nil {
		id = 1
	}
	*/

	//machine := model.FetchVirtualMachine(1)

	render := helper.NewResponseHelper()

	render.Render(svm, w)
}