package model

import "time"

type Todo struct {
	ID        uint      `json:"id" param:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	Completed bool      `gorm:"default:false" json:"completed"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
