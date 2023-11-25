import ListPage from "./pages/ListPage";
import RegisterPage from './pages/RegisterPage';
import { Route, BrowserRouter as Router,Routes } from "react-router-dom";


function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<ListPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
