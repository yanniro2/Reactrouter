import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import Home from "./main/Home";
import Land from "./main/Land";
import Client from "./sub/Client";
import Import from "./sub/Import";
import Motor from "./main/Motor";
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Main</Link>
          {/* <Link to="home">Home</Link>
          <Link to="land">Land</Link>
          <Link to="motor">Motor</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />}>
            <Route path="client" element={<Client />} />
            <Route path="import" element={<Import />} />
          </Route>
          <Route path="/land" element={<Land />}>
            <Route path="client" element={<Client />} />
            <Route path="import" element={<Import />} />
          </Route>
          <Route path="/motor" element={<Motor />}>
            <Route path="client" element={<Client />} />
            <Route path="import" element={<Import />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
