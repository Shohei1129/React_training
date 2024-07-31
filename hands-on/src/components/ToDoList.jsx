import React from 'react'; // Reactをインポート
import styled from 'styled-components'; // styled-componentsライブラリをインポート
import ToDoItem from './ToDoItem'; // ToDoアイテムコンポーネントをインポート

// リストコンテナのスタイルを定義
const ListContainer = styled.div`
  margin: 20px;
`;

// リストタイトルのスタイルを定義
const ListTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

// ToDoリストコンポーネント
const ToDoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ListContainer>
      <ListTitle>ToDo List</ListTitle>
      <ul>
        {todos.map(todo => (
          <ToDoItem
            key={todo.id} // 各ToDoアイテムにユニークなキーを設定
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </ListContainer>
  );
};

export default ToDoList;
