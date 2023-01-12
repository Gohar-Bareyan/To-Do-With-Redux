import React from 'react';
import { Provider } from 'react-redux';
import ToDoApp from './Components/ToDoApp';
import { store } from './Store';

const App = () => {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  )
}

export default App;
