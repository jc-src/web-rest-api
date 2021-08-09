package controller

import (
	"net/http"

	"lib/helper"

	"github.com/julienschmidt/httprouter"
)

type (
	CorsController struct{}
)

func NewCorsController() *CorsController {
	return &CorsController{}
}

// index
func (cc CorsController) Cors(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	
	render := helper.NewResponseHelper()
    render.Render(0, w)
    /*
	headers := w.Header()

    headers.Add("Access-Control-Allow-Origin", "*")
    headers.Add("Vary", "Origin")
    headers.Add("Vary", "Access-Control-Request-Method")
    headers.Add("Vary", "Access-Control-Request-Headers")
    headers.Add("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, token")
	headers.Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")

	render.Render(nil, w)
	/*
    headers := res.Header()
    headers.Add("Access-Control-Allow-Origin", "*")
    headers.Add("Vary", "Origin")
    headers.Add("Vary", "Access-Control-Request-Method")
    headers.Add("Vary", "Access-Control-Request-Headers")
    headers.Add("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, token")
    headers.Add("Access-Control-Allow-Methods", "GET, POST,OPTIONS")
	*/
}