/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
