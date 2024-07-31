import React from 'react'; // Reactをインポート
import styled from 'styled-components'; // styled-componentsライブラリをインポート

// 設定ページのコンテナのスタイルを定義
const SettingsContainer = styled.div`
  padding: 20px;
`;

// 設定ページのタイトルのスタイルを定義
const SettingsTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

// 設定ページのコンポーネント
const Settings = () => {
  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <p>Here you can configure your ToDo app settings.</p>
    </SettingsContainer>
  );
};

export default Settings;
