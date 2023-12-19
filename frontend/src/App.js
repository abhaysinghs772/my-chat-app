import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path="/" component={Homepage} exact />
          <Route path="/chats" component={Chatpage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
