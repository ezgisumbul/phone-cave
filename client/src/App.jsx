import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhoneListPage from './pages/PhoneListPage';
import PhoneSinglePage from './pages/PhoneSinglePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<PhoneListPage />} />
            <Route path="/phones/:id" element={<PhoneSinglePage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
