package main

import "net/http"

func main() {
	//replace with your client path below
	fs := http.FileServer(http.Dir("/home/alex/Projects/Go/src/react-webpack-go-kit/client"))
	http.Handle("/", fs)
	http.ListenAndServe(":3000", nil)
}
