import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Componant/About/About";
import Blog from "./Componant/Blog/Blog";
import Dashbord from "./Componant/Dashbord/Dashbord";
import Header from "./Componant/Header/Header";
import Home from "./Componant/Home/Home";
import NotFound from "./Componant/Notfound/NotFound";
import Review from "./Componant/Review/Review";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/Review" element={<Review></Review>} />
        <Route path="/Dashbord" element={<Dashbord></Dashbord>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
