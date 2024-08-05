package main

import (
	"net/http"

	"github.com/Takahito-Uchino/Go-React-Todo/model"
	"github.com/labstack/echo/v4"
)

func connect(c echo.Context) error {
	db, _ := model.DB.DB()
	defer db.Close()
	err := db.Ping()
	if err != nil {
		return c.String(http.StatusInternalServerError, "DB接続失敗しました")
	} else {
		return c.String(http.StatusOK, "DB接続しました")
	}
}

func main() {
	e := echo.New()
	e.GET("/", connect)
	e.Logger.Fatal(e.Start(":8080"))
}
