import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignupPage from './Pages/User/SignupPage'
import LoginPage from './Pages/User/LoginPage'
import Homepage from './Pages/User/Homepage';
import Sidebar from './Components/Users/Sidebar/Sidebar';
import AdminLogin from './Components/Admin/Login/Login'
import AdminHomePage from './Pages/Admin/AdminHomePage';
import ProfilePage from './Pages/User/ProfilePage';
import { useSelector } from 'react-redux';
import UserProfile from './Components/Users/Profile/UserProfile';
import Chat from './Pages/User/Chat/Chat';
import Test from './Pages/Test';
import AdminPostPage from './Pages/Admin/AdminPost';
import UserLandingPage from './Pages/User/UserLandingPage';
import CourseView from './Pages/CourseView';
import Roundedstory from './Components/Users/Roundstory/Roundedstory';
import Testtwo from './Pages/User/Testtwo';
import CourseFeed from './Pages/User/CourseFeed';
import Landtest from './Pages/User/Landtest';
import Mambaone from './Pages/User/Mambaone';
import Allusers from './Pages/User/Allusers';
import AdminReportPage from './Pages/Admin/AdminReportPage';
import BookmarkedCourse from './Pages/User/BookmarkedCourse';
import Footer from './Components/components/common/footer/Footer';



function App() {
  return (
    <div className="App">
       <Router>
          <Routes>  
              <Route path='/landingpage' element={<UserLandingPage />}/> 
              <Route path='/signup' element={<SignupPage/>}/> 
              <Route path='/' element={<LoginPage/>}/>  
              <Route path='/home' element={<Homepage/>}/>
              <Route path='/profile/:username' element={<ProfilePage/>}/>
              <Route path='/userProfile' element={<UserProfile/>}/> 
              <Route path='/chat' element={<Chat/>}/> 
              <Route path='/coursefeed' element={<CourseFeed/>}/> 
              <Route path='/allusers' element={<Allusers/>}/> 
              <Route path='/savedcourses' element={<BookmarkedCourse/>}/> 




              <Route path='/mamba1' element={<Mambaone/>} />
              <Route path='/landingtest' element={<Landtest/>} />
              <Route path='/test' element={<Test/>} />
              <Route path='/test2' element={<Testtwo/>} />
              <Route path='/viewcourse/:_id' element={<CourseView/>} />



              <Route path='footer' element={<Footer />} />

          </Routes>
          <Routes>  
          <Route path='/sidebar' element={<Sidebar/>}/>
              <Route path='/admin-users' element={<AdminHomePage/>}/> 
              <Route path='/admin-posts' element={<AdminPostPage/>}/> 
              <Route path='/admin-login' element={<AdminLogin/>}/>  
              <Route path='/admin-reports' element={<AdminReportPage/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
