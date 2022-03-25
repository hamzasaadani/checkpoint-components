
import React from 'react';
import './App.css';
import './Style.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';


const App = () => ( 
  <div className='style'>
      <ProfilePhoto/>
      <FullName/>
      <Address/> 
    </div>
  );
export default App;
