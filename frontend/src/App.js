import { BrowserRouter,Routes,Route } from "react-router-dom";

// impports for pages and components
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Inbox from './pages/Inbox/Inbox';
import Message from './pages/Message/Message';
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Inbox" element={<Inbox />} />
          <Route path="/messages/:id" element={<Message />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
