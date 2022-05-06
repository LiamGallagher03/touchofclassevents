import './App.css';
//imports App.css
import { teal, green, lightgreen } from '@mui/material/colors';
//imports new colors from @mui
import React from 'react';
//imports React
import TabManager from './Components/TabManager.js';
//imports TabMananger from the Components folder

function App() {
  return (
    <div>     
      <header>
        {/*Sylvania International Convention Center Logo & Title*/}
        <a href="home" class="logo">SICC</a><br/>
        <h1 id="title">Sylvania International Convention Center</h1>
      </header>
      <body>
          <TabManager />
          {/*Tab Manager component*/}
      </body>
    </div>
  )
}
export default App;