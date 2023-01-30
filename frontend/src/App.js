import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// impports for pages and components
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Inbox from "./pages/Inbox/Inbox";
import Message from './pages/Message/Message';
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/Inbox"
            element={user ? <Inbox /> : <Navigate to="/login" />}
          />
          <Route
            path="/messages/:id"
            element={user ? <Message /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
