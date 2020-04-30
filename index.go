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
	
	http.HandleFunc("/", index)
	//http.HandleFunc("/")
	//http.HandleFunc("/otrapagina",index)

	fmt.Printf("Servidor escuchando en: http://localhost:3000/")
	http.ListenAndServe(":3000", nil)
}