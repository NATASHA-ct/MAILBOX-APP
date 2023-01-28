import { BrowserRouter,Routes,Route } from "react-router-dom";

// impports for pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import Inbox from './pages/Inbox';
// import Message from './pages/Message';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Inbox />} />
          <Route path="/" element={<Message />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
