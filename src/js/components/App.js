import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

const App = () => (
  <div>
    <h1>Hello Redux</h1>

    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
