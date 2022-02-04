import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import Initial from './pages/initial';
import Gamer from './pages/gamer';
import Guesser from './pages/guesser';
import Scoreboard from './pages/scoreboard';
import './globalStyle.css';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/admin" element ={<Admin />} />
        <Route path="/gamer" element ={<Gamer />} />
        <Route path="/guesser" element ={<Guesser />} />
        <Route path="/scoreboard" element ={<Scoreboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
