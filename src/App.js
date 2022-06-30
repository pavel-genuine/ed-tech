import logo from './logo.svg';
import './App.css';
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
import ContactUs from './ContactUs/ContactUs';
import Profile from './Profile/Profile';
import EditProfile from './EditProfile/EditProfile';
import EnrollCourse from './EnrollCourse/EnrollCourse';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/:id' element={<Details></Details>} ></Route>
        <Route path='/enroll/:id' element={<EnrollCourse></EnrollCourse>} ></Route>

        <Route path='/courses' element={<AllCourses></AllCourses>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/profile' element={<RequireAuth><Profile></Profile></RequireAuth>}></Route>
        <Route path='/edit-profile' element={<RequireAuth><EditProfile></EditProfile></RequireAuth>}></Route>

      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
