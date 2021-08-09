package controller

import (
	"encoding/json"
	"net/http"
	"strconv"

	"lib/helper"
	"lib/model"
	"lib/repository"

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
	repo := repository.NewVirtalMachineRepository()

	machines := repo.FetchAllVirtualMachines()

	render := helper.NewResponseHelper()
	render.Render(machines, w)
}

func (vma VirtualMachineController) GetVirtualMachine(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	i := p.ByName("id")
	id, _ := strconv.Atoi(i)

	//var err error
	repo := repository.NewVirtalMachineRepository()

	machine := repo.FetchVirtualMachine(id)

	render := helper.NewResponseHelper()

	render.Render(machine, w)
}

func (vma VirtualMachineController) SaveVirtualMachine(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	// Stub an object to be populated from the body
	vm := model.VirtualMachine{}

	// Populate the object data
	json.NewDecoder(r.Body).Decode(&vm)

	// TODO VALIDATE!
	
	render := helper.NewResponseHelper()

	repo := repository.NewVirtalMachineRepository()

	if vm.Id > 0 {
		svm := repo.UpdateVirtualMachine(vm)
		render.Render(svm, w)
	} else {
		svm := repo.InsertVirtualMachine(vm)
		render.Render(svm, w)
	}
}