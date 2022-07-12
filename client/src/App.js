import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Homepage from './home/homepage/homepage';
import Hotel from './home/hotel/hotel';
import List from './home/list/list';
import React from 'react';
import HomeSpin from './home/homespin/homespin';
import SignIn from './component/signin/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/hotel' element={<List/>}/>
        <Route path='/hotel/:id' element={<Hotel/>}/>
        <Route path='/spin' element={<HomeSpin/>}/>
        <Route path='/login' element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
