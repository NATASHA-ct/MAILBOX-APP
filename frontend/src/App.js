import { BrowserRouter,Routes,Route } from "react-router-dom";

// impports for pages and components
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Inbox from './pages/Inbox/Inbox';
import Message from './pages/Message/Message';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Inbox" element={<Inbox />} />
          <Route path="/message/:id" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
