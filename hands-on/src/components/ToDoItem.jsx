import React from 'react'; // Reactライブラリをインポート
import styled from 'styled-components'; // styled-componentsライブラリをインポート

// styled-componentsを使用して、ToDoアイテムのスタイルを定義
// トランジエントプロップスを使うためにプロパティ名に$を付ける
const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-decoration: ${props => (props.$completed ? 'line-through' : 'none')}; // completedの状態に応じてテキストに打ち消し線を引く
`;

// ボタンのスタイルを定義
const ItemButton = styled.button`
  margin-left: 10px;
`;

// ToDoItemコンポーネントの定義
// propsとしてToDoアイテムの情報、完了状態の切り替え関数、削除関数を受け取る
const ToDoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    // ToDoアイテムのコンテナ
    // $completedはトランジエントプロップスとしてスタイルに渡されるが、DOMには渡されない
    <ItemContainer $completed={todo.completed}>
      {todo.task} {/* ToDoアイテムのテキストを表示 */}
      <div>
        {/* 完了状態を切り替えるボタン */}
        <ItemButton onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? 'Undo' : 'Complete'} {/* 完了状態に応じてボタンのテキストを切り替える */}
        </ItemButton>
        {/* ToDoアイテムを削除するボタン */}
        <ItemButton onClick={() => deleteTodo(todo.id)}>Delete</ItemButton>
      </div>
    </ItemContainer>
  );
};

export default ToDoItem; // ToDoItemコンポーネントをエクスポート
