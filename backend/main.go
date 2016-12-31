package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/julienschmidt/httprouter"
)

func init() {
	http.Handle("/api/", apiRouter())
	http.HandleFunc("/", ui)
}

func apiRouter() http.Handler {
	router := httprouter.New()
	router.GET("/api/hello/v1/:name", hello)
	return router
}

type helloStruct struct {
	Name string `json:"name"`
}

func hello(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	name := ps.ByName("name")
	l33tName := strings.Replace(name, "e", "3", -1)
	hello := helloStruct{Name: l33tName}
	if err := json.NewEncoder(w).Encode(hello); err != nil {
		panic(err)
	}
}

// TODO: in production, this should cache index.html, but in dev it should read every time
func ui(w http.ResponseWriter, r *http.Request) {
	dat, err := ioutil.ReadFile("frontend/build/index.html")
	if err != nil {
		fmt.Fprint(w, err)
	}
	fmt.Fprint(w, string(dat))
}
