"use client";

import React, { useState } from "react";
import { Todo, dummyTodos } from "../../lib/dummyData";
import TodoItem from "./TodoItem";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(dummyTodos);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoContent, setNewTodoContent] = useState("");

  const handleAddTodo = () => {
    if (newTodoTitle.trim() && newTodoContent.trim()) {
      const newTodo: Todo = {
        id: todos.length + 1,
        title: newTodoTitle,
        content: newTodoContent,
        completed: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
      setNewTodoContent("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id: number, updateTodo: Partial<Todo>) => {
    setTodos(
      todos.map((t) =>
        t.id === id
          ? { ...t, ...updateTodo, updated_at: new Date().toISOString() }
          : t,
      ),
    );
  };

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
