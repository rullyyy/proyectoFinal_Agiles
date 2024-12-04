import Index from "./pages/index/Index.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>

          <Routes>

            <Route path="/" element={<Index/>}/>
          </Routes>

        </Router>

    </div>
  );
}

export default App;
