// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export interface Todo {
//     id: number;
//     title: string;
//     content: string;
//     completed: boolean;
//     created_at: string;
//     updated_at: string;
// }

// export const getTodos = async () => {
//     const response = await fetch(`${API_BASE_URL}/api/todos`);
//     if (!response.ok) {
//         throw new Error("Failed to fetch todos");
//     }
//     return response.json();
// }

// export const createTodo = async (todo) => {
//     const response = await fetch(`${API_BASE_URL}/api/todos`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(todo)
//     });
//     if (!response.ok) {
//         throw new Error("Failed to create todo");
//     }
//     return response.json();
// }

// export const updateTodo = async (id: number, todo) => {
//     const response = await fetch(`${API_BASE_URL}/api/todos/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(todo)
//     });
//     if (!response.ok) {
//         throw new Error("Failed to update todo");
//     }
//     return response.json();
// }

// export const deleteTodo = async (id: number) => {
//     const response = await fetch(`${API_BASE_URL}/api/todos/${id}`, {
//         method: 'DELETE'
//     });
//     if (!response.ok) {
//         throw new Error("Failed to delete todo");
//     }
// }
