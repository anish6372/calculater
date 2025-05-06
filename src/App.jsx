import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './component/ErrorPage';

function App({ darkMode, setDarkMode }) {
  return (
    <Routes>
      <Route path="/*" element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />} />
      <Route path="/error" element={<ErrorPage darkMode={darkMode} />} />
    </Routes>
  );
}

export default App;
