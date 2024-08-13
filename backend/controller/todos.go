package controller

import (
	"net/http"
	"strconv"

	"github.com/Takahito-Uchino/Go-React-Todo/model"
	"github.com/labstack/echo/v4"
)

func CreateTodo(c echo.Context) error {
	todo := model.Todo{}
	if err := c.Bind(&todo); err != nil {
		return err
	}
	model.DB.Create(&todo)
	return c.JSON(http.StatusCreated, todo)
}

func GetTodos(c echo.Context) error {
	todos := []model.Todo{}
	model.DB.Find(&todos)
	return c.JSON(http.StatusOK, todos)
}

func GetTodo(c echo.Context) error {
	todo := model.Todo{}
	if err := c.Bind(&todo); err != nil {
		return err
	}
	model.DB.Take(&todo)
	return c.JSON(http.StatusOK, todo)
}

func UpdateTodo(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Invalid ID")
	}

	todo := model.Todo{}
	if err := model.DB.First(&todo, id).Error; err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "Todo not found")
	}

	updateData := make(map[string]interface{})
	if err := c.Bind(&updateData); err != nil {
		return err
	}

	if err := model.DB.Model(&todo).Updates(updateData).Error; err != nil {
		return err
	}

	model.DB.First(&todo, id)
	return c.JSON(http.StatusOK, todo)
}

func DeleteTodo(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "invalid ID")
	}

	todo := model.Todo{}
	if err := model.DB.First(&todo, id).Error; err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "Todo not found")
	}

	if err := model.DB.Delete(&todo).Error; err != nil {
		return err
	}

	return c.NoContent(http.StatusNoContent)
}
