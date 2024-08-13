package main

import (
	"net/http"

	"github.com/Takahito-Uchino/Go-React-Todo/config"
	"github.com/Takahito-Uchino/Go-React-Todo/controller"
	"github.com/Takahito-Uchino/Go-React-Todo/model"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	cfg := config.LoadConfig()

	model.InitDB(cfg)

	e := echo.New()

	e.Use(middleware.CORS())

	e.GET("/health", func(c echo.Context) error {
		return c.String(http.StatusOK, "OK")
	})
	e.GET("/api/todos", controller.GetTodos)
	e.GET("/api/todos/:id", controller.GetTodo)
	e.POST("/api/todos", controller.CreateTodo)
	e.PUT("/api/todos/:id", controller.UpdateTodo)
	e.DELETE("/api/todos/:id", controller.DeleteTodo)
	e.Logger.Fatal(e.Start(":8080"))
}
