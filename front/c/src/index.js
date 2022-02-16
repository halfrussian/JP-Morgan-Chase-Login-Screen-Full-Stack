import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AccountPage from '../src/pages/Account-Page'
import SignIn from './pages/SignIn-Page';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <>
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/Account/:id' element={<AccountPage />} />
    </Routes>
  </Router>

  </>,
  document.getElementById('root')
);

