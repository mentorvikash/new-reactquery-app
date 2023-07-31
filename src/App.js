import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Home.page';
import SimpleApiRequest from './components/simpleApiRequest';  
import RcApiRequest from './components/rcApiRequest';

function App() {
  return (
    <>
     <div >
      <nav  >
        <ul className='mainNav'>
        <li>
          <Link to='home'>Home</Link>
        </li>
        <li>
          <Link to='rcapi'>RC Api</Link>
        </li>
        <li>
          <Link to='simple-api'>Simple Api</Link>
        </li>
        </ul>
      </nav>
     </div>
     <Routes >
      <Route path='home' element={<HomePage />} />
      <Route path='rcapi' element={<SimpleApiRequest />} />
      <Route path='simple-api' element={<RcApiRequest />} />
     </Routes>
    </>
  );
}

export default App;
