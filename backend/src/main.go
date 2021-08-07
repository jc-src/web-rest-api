package main

//  "github.com/jc-src/web-rest-api/controller"
import (
	"lib/controller"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

/*
func handleRequests() {
    http.HandleFunc("/", homePage)
    log.Fatal(http.ListenAndServe(":3000", nil))
}
*/


func main() {

	// Instantiate new router
	router := httprouter.New()

	//render := helper.NewResponseHelper()

	vmController := controller.NewVirtualMachineController()

	// index
	router.GET("/", vmController.Index)
	router.GET("/virtual-machines", vmController.GetVirtualMachines)
	router.GET("/virtual-machines/:id", vmController.GetVirtualMachine)

	// Todo resources
    /*
	router.GET("/todo", ta.GetTodos)

	router.GET("/todo/:id", ta.GetTodoById)

	router.POST("/todo", ta.CreateTodo)

	router.DELETE("/todo/:name", ta.DeleteTodo)
    */

	// start server
    log.Fatal(http.ListenAndServe(":3000", router))
}
