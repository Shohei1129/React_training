import React, { useState } from 'react'; // ReactとuseStateフックをインポート
import styled from 'styled-components'; // styled-componentsライブラリをインポート

// フォーム全体のスタイルを定義
const FormContainer = styled.form`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// 入力フィールドのスタイルを定義
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// 送信ボタンのスタイルを定義
const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; // ホバー時の背景色
  }
`;

// ToDoアイテムを追加するフォームコンポーネント
const AddToDoForm = ({ addTodo }) => {
  const [task, setTask] = useState(''); // 新しいToDoのテキストを管理するステート

  // フォーム送信時の処理
  const handleSubmit = (e) => {
    e.preventDefault(); // ページのリロードを防ぐ
    if (task.trim()) { // 空白でない場合にのみ追加
      addTodo({
        id: Math.random(), // 一意のIDを生成
        task,
        completed: false,
      });
      setTask(''); // フォームをリセット
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // 入力値の更新
        placeholder="New ToDo"
      />
      <SubmitButton type="submit">Add</SubmitButton>
    </FormContainer>
  );
};

export default AddToDoForm;
