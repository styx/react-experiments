import { v4 as nextTodoId } from 'node-uuid';

// Fake in-memory DB

const fakeDatabase = {
  todos: [{
    id: nextTodoId(),
    text: 'Test 1',
    completed: true,
  }, {
    id: nextTodoId(),
    text: 'Test 2',
    completed: false,
  }, {
    id: nextTodoId(),
    text: 'Test 3',
    completed: false,
  }]
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(500).then(() => {
    // For error handling testing
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom!');
    // }

    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(todo => !todo.completed);
      case 'completed':
        return fakeDatabase.todos.filter(todo => todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: nextTodoId(),
      text,
      completed: false
    };

    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => i.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
