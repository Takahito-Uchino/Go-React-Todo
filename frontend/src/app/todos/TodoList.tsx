"use client";

import React, { useEffect, useState } from "react";
import { Todo, getTodos, createTodo, updateTodo, deleteTodo } from "@/lib/api";
import TodoItem from "./TodoItem";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoContent, setNewTodoContent] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (newTodoTitle.trim() && newTodoContent.trim()) {
      const newTodo: Omit<Todo, 'id' | 'created_at' | 'updated_at'> = {
        title: newTodoTitle,
        content: newTodoContent,
        completed: false,
      };
      try {
        const createdTodo = await createTodo(newTodo);
        setTodos([...todos, createdTodo]);
        setNewTodoTitle("");
        setNewTodoContent("");
      } catch (error) {
        console.error("Failed to create todo:", error);
      }
    }
  }

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const handleUpdateTodo = async (id:number, updatedData: Partial<Todo>) => {
    try {
      const updatedTodo = await updateTodo(id, updatedData);
      setTodos(
        todos.map((t) =>
          t.id === id
            ? {...t, ...updatedTodo, updated_at: new Date().toISOString() }
            : t,
        ),
      );
    } catch (error) {
      console.error("Failed to update todo:", error)
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Input
        placeholder="Title"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <Textarea
        placeholder="Content"
        value={newTodoContent}
        onChange={(e) => setNewTodoContent(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
