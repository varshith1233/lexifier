import Signin from "./pages/Signin";
import Signup from './pages/Signup'
import Footer from './components/Footer'
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Questions from "./components/Questions";
import Addquestions from "./components/Addquestions";
import Result from "./components/Result";
import Practice from "./components/Practice";
import QuestionsAdmin from "./components/QuestionsAdmin";
import MainHome from "./pages/MainHome";
import Demo from "./pages/Demo";
import Check from "./components/Check";
// import CheckUser from "./pages/CheckUser";


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
       <Routes> 
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/Home/:id" element={<Home/>}></Route>
        <Route path="/Questions" element={<Questions/>}></Route>
        <Route path="/QuestionsAdmin" element={<QuestionsAdmin/>}></Route>
        <Route path="/Addquestions" element={<Addquestions/>}></Route>
        <Route path="/result" element={<Result   />}></Route>
        <Route path="/practice" element={<Practice/>}></Route>
        <Route path="/" element={<MainHome/>}></Route>
        <Route path="/demo" element={<Demo/>}></Route>
        <Route path="/check/:id" element={<Check/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
