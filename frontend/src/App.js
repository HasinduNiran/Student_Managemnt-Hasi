import './App.css';
import Header from './components/header';
import AddStudent from './components/AddStudent';
import AllStudent from './components/Allstudent';
import Updatestudent from './components/Updatestudent';
import DeleteStudent from './components/Deletestudent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path='/' element={<AllStudent/>} />
        </Routes>

        <Routes>
          <Route path="/add" element={<AddStudent />} />
        </Routes>

        <Routes>
        
        <Route path="/update/:id" element={<Updatestudent />} />
      </Routes>
        <Routes>
          <Route path="/delete/:id" element={<DeleteStudent />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
