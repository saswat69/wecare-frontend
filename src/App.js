import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Home/Homepage';
import LifeCoachProfile from './Components/Forms/LifeCoachProfile';
import LoginCoach from './Components/Forms/LoginCoach';
import UserProfile from './Components/Forms/UserProfile';
import Userlogin from './Components/Forms/Userlogin';
import Appointment from './Components/Forms/Appointment';


function App() {
  return (
       <>
      <Navbar/>
      <UserProfile/>
      <Userlogin/>
      {/* <LoginCoach/> */}
      {/* <LifeCoachProfile/> */}
      {/* <Homepage/> */}
      <Footer/>
      <Appointment/>
      
      </>
    
  );
}

export default App;
