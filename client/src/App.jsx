import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PhoneListPage from './pages/PhoneListPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PhoneListPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
