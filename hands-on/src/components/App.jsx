import React, { useState } from 'react'; // ReactとuseStateフックをインポート
import ToDoList from './ToDoList'; // ToDoリストコンポーネントをインポート
import AddToDoForm from './AddToDoForm'; // ToDoアイテム追加フォームをインポート

// アプリケーションのメインコンポーネント
const App = () => {
  const [todos, setTodos] = useState([]); // ToDoアイテムのリストを管理するステート

  // 新しいToDoアイテムをリストに追加する関数
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // 現在のToDoリストに新しいアイテムを追加
  };

  // 指定されたIDのToDoアイテムの完了状態を切り替える関数
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 指定されたIDのToDoアイテムを削除する関数
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // 指定されたID以外のToDoを残す
  };

  return (
    <div>
      <h1>My ToDo App</h1>
      <AddToDoForm addTodo={addTodo} /> {/* ToDoアイテム追加フォームの表示 */}
      <ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} /> {/* ToDoリストの表示 */}
    </div>
  );
};

export default App;
