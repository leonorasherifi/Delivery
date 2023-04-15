
import { Component } from 'react';
import './App.css';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';




function App() {
return(
  <div>
    <Header/>
    <main className='pt-10 bg-slate-200 min-h-[calc(100vh)]'>
    
    </main>
  </div>
  );
}

export default App;
