"use client";

import React from "react";
import { Todo } from "@/lib/api";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updateTodo: Partial<Todo>) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
  const handleCheckboxChange = (checked: boolean) => {
    onUpdate(todo.id, { completed: checked });
  };
  return (
    <div>
      <Checkbox
        checked={todo.completed}
        onCheckedChange={handleCheckboxChange}
      />
      <span>{todo.title}</span>
      <p>{todo.content}</p>
      <Button onClick={() => onDelete(todo.id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;
