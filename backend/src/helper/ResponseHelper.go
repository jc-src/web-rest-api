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

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}


func (rsp ResponseHelper) Error(data interface{}, w http.ResponseWriter) {

	js, err := json.Marshal(data)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusNotFound)
	w.Write(js)
}