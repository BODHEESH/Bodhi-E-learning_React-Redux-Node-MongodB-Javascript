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
import Testtwo from './Pages/Testtwo';

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



              <Route path='/test' element={<Test/>} />
              <Route path='/testtwo' element={<Testtwo/>} />

          </Routes>
          <Routes>  
          <Route path='/sidebar' element={<Sidebar/>}/>
              <Route path='/admin-users' element={<AdminHomePage/>}/> 
              <Route path='/admin-posts' element={<AdminPostPage/>}/> 
              <Route path='/admin-login' element={<AdminLogin/>}/>  
          </Routes>
       </Router>
    </div>
  );
}

export default App;