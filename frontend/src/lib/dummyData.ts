export interface Todo {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export const dummyTodos: Todo[] = [
  {
    id: 1,
    title: "First Todo",
    content: "This is the first todo",
    completed: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Second Todo",
    content: "This is the second todo",
    completed: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Third Todo",
    content: "This is the third todo",
    completed: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
