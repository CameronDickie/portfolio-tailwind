import './index.css';
import './App.css';
import Main from "./pages/main.js";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="bg-gray-800 h-screen">
      <Helmet>
        <title>Cameron Dickie's Portfolio </title>
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
