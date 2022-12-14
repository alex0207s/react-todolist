import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './components/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div id="todoListPage" className="bg-half">
      <AuthContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} exact />
          </Route>
          <Route path="login" element={<Login />} exact />
          <Route path="signup" element={<SignUp />} exact />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
