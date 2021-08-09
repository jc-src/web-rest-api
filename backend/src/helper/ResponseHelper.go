package helper

import (
	"encoding/json"
	"net/http"
)

type (
	ResponseHelper struct{}
)

func NewResponseHelper() *ResponseHelper {
	return &ResponseHelper{}
}

type jsonResponse struct {
	Code int    `json:"code"`
	Text string `json:"text"`
}

func (rsp ResponseHelper) Render(data interface{}, w http.ResponseWriter) {
	js, err := json.Marshal(data)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	rsp.setCors(w)
	w.Write(js)
}


func (rsp ResponseHelper) Error(data interface{}, w http.ResponseWriter) {

	js, err := json.Marshal(data)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	rsp.setCors(w)
	w.WriteHeader(http.StatusNotFound)
	w.Write(js)
}

func (rsp ResponseHelper) setCors(w http.ResponseWriter) {
	headers := w.Header()

	headers.Set("Content-Type", "application/json")
	headers.Set("Access-Control-Allow-Origin", "*")
    headers.Set("Vary", "Origin")
    headers.Set("Vary", "Access-Control-Request-Method")
    headers.Set("Vary", "Access-Control-Request-Headers")
    headers.Set("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, token")
	headers.Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
}