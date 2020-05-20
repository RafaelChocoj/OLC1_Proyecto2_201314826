package main

import (
	"fmt"
	"html/template"
	"net/http"
)
/*type usuario struct {
	Title string
	H2 string
	First_Name string
	Last_Name string
	Age int
}*/

func index(w http.ResponseWriter, r *http.Request) {

	/*Titulo := "Ejemplo de compiladores 1 seccion A"
	ET := "es una etiqueta"
	Nombre := "Nombre"
	Apellido := "Apellido"
	Edad := 20

	data := usuario{
		Title: Titulo,
		H2: ET,
		First_Name: Nombre,
		Last_Name: Apellido,
		Age: Edad}*/
	t := template.Must(template.ParseFiles("index_pes.html"))
	//t.Execute(w,data)
	t.Execute(w,nil)
}

func main() {
	/*http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("css/"))))
	http.Handle("/fonts/", http.StripPrefix("/fonts/", http.FileServer(http.Dir("fonts/"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("js/"))))
	*/
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("css/"))))
	http.Handle("/pesta/", http.StripPrefix("/pesta/", http.FileServer(http.Dir("pesta/"))))
	http.Handle("/codemirror/", http.StripPrefix("/codemirror/", http.FileServer(http.Dir("codemirror/"))))
	http.Handle("/conn/", http.StripPrefix("/conn/", http.FileServer(http.Dir("conn/"))))

	http.Handle("/principal/", http.StripPrefix("/principal/", http.FileServer(http.Dir("principal/"))))

	http.Handle("/dist/", http.StripPrefix("/dist/", http.FileServer(http.Dir("dist/"))))
	//http.Handle("//", http.StripPrefix("//", http.FileServer(http.Dir("/"))))
	//http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("//"))))
	//http.Handle("/", "index_pes.js")

	http.HandleFunc("/", index)
	//http.HandleFunc("/")

	//http.HandleFunc("/otrapagina",index)

	fmt.Printf("6 Servidor escuchando en: http://localhost:3000/")
	http.ListenAndServe(":3000", nil)
}