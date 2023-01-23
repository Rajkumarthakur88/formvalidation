import FirstStep from './components/FirstStep';
import './App.css';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import Output from './components/Output';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
  

   <Router>
        <Routes>
          <Route path='/' element={<FirstStep />} />
          <Route path='/second' element={<SecondStep />} />
          <Route path='/third' element={<ThirdStep />} />
          <Route path='/output' element={<Output />} />
        </Routes>
      </Router>



    </>
  );
}

export default App;
