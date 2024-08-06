package main

import (
	"github.com/Takahito-Uchino/Go-React-Todo/controller"
	"github.com/Takahito-Uchino/Go-React-Todo/model"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	db, _ := model.DB.DB()
	defer db.Close()

	e.GET("/todos", controller.GetTodos)
	e.GET("/todos/:id", controller.GetTodo)
	e.POST("/todos", controller.CreateTodo)
	e.PUT("/todos/:id", controller.UpdateTodo)
	e.DELETE("/todos/:id", controller.DeleteTodo)
	e.Logger.Fatal(e.Start(":8080"))
}
