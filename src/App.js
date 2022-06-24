import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Courses from './Courses/Courses';
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import AllCourses from './AllCourses/AllCourses';
import Home from './Home/Home';
import Details from './Details/Details';
import About from './About/About';
import SignUp from './Auth/SignUp/SignUp';
import SignIn from './Auth/SignIn/SignIn';

function App() {
  return (
    <div >
      <Header></Header>
      {/* <Courses></Courses> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/:id' element={<Details></Details>} ></Route>

        <Route path='/courses' element={<AllCourses></AllCourses>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>

      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
