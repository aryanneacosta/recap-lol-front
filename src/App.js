import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Stats from './components/Stats';
import GlobalStyle from './assets/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/stats/:summonername' element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
