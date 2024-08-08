"use client";

import React from "react";
import { Todo } from "@/lib/api";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

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
    <Card>
      <CardTitle className="flex items-center p-4">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleCheckboxChange}
          className="mr-2"
        />
        <span>{todo.title}</span>
      </CardTitle>
      <CardContent>{todo.content}</CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={() => onDelete(todo.id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default TodoItem;
