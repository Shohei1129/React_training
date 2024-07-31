import React from 'react'; // Reactをインポート
import ReactDOM from 'react-dom/client'; // ReactDOMの新しいAPIをインポート
import App from "./components/App.jsx"; // Appコンポーネントをインポート

// ReactアプリケーションをルートDOM要素にマウント
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
