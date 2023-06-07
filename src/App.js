import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import react, {useState} from 'react';
import Information from './screens/Information';
import NavbarElements from './components/Navbar/NavbarElements';
import BallpythonMain from './information_project/ballpython/ballpythonMain';
import CornsnakeMain from './information_project/corn snake/CornsnakeMain';
import CrestedGeckoMain from './information_project/crested gecko/crestedgeckoMain';
import LeopardGeckoMain from './information_project/leopard gecko/leopardgeckoMain';
import Diary from './screens/Diary';
import BallpythonAdoption from './information_project/ballpython/ballpythonAdoption';
import BallpythonAfter from './information_project/ballpython/ballpythonAfter';
import BallpythonEquipment from './information_project/ballpython/ballpythonEquipment';
import CommuMain from './component/Community/CommuMain';
import QnAMain from './component/QnA/QnAMain';
import TradePage from './component/Trade/TradePage';
import TradeMain from './component/Trade/TradeMain';
import CommuPage from './component/Community/CommuPage';
import QnAPage from './component/QnA/QnAPage';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/Login/SignUpPage';
import NavbarElements2 from './components/Navbar/NavbarElements2';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };
  return (

    <Router>
      {isLoggedIn ? <NavbarElements2 username={username} onLogout={handleLogout} /> : <NavbarElements />}
      <Routes>      
            <Route path = "/" element = { <Home /> }/>
            <Route path="/Login" element={<LoginPage onLoginSuccess={handleLoginSuccess}/>} />
            <Route path = "/SignUp" element = { <SignUpPage /> }/>
            <Route path = "/Information" element = { <Information /> }/>
            <Route path = "/Trade" element = { <TradePage /> }/>
            <Route path = "/Trade/TradePage" element = { <TradeMain />}/>
            <Route path = "/QnA" element = { <QnAMain /> }/>
            <Route path = "/QnA/QnAPage" element = { <QnAPage /> }/>
            <Route path = "/Community" element = { <CommuMain /> }/>
            <Route path = "/Community/CommuPage" element = { <CommuPage /> }/>
            <Route path = "/MyPage" element = { <Diary /> }/>
            <Route path = "/Information/BallpythonMain" element = { <BallpythonMain /> }/>
            <Route path = "/Information/BallpythonMain/BallpythonAdoption" element = { <BallpythonAdoption /> }/>
            <Route path = "/Information/BallpythonMain/BallpythonAfter" element = { <BallpythonAfter /> }/>
            <Route path = "/Information/BallpythonMain/BallpythonEquipment" element = { <BallpythonEquipment /> }/>
            <Route path = "/Information/CornsnakeMain" element = { <CornsnakeMain /> }/>
            <Route path = "/Information/CrestedGeckoMain" element = { <CrestedGeckoMain /> }/>
            <Route path = "/Information/LeopardGeckoMain" element = { <LeopardGeckoMain /> }/>  
          
          </Routes>
    </Router>
  );
}

export default App;
 