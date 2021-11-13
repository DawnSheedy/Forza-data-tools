package main

import (
	"fmt"
	"log"
	"net/http"

	socketio "github.com/googollee/go-socket.io"
)

var server *socketio.Server = nil

func SetupSocketServer() {
	server = socketio.NewServer(nil)

	server.OnConnect("/", func(s socketio.Conn) error {
		s.SetContext("")
		fmt.Println("Connected: ", s.ID())
		return nil
	})

	go server.Serve()
	defer server.Close()

	http.Handle("/socket.io/", server)
	http.Handle("/", http.FileServer(http.Dir("./static")))
	log.Println("Socket/HTTP server started at localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func SendTelemetryOverSocket(data string) bool {
	if server == nil {
		return false
	}

	//log.Println("Sending socket data!")

	server.BroadcastToNamespace("", "telemetry", data)
	return true
}
