
import { Component } from 'react';
import './App.css';
import Header from './component/Header';
import {Outlet} from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";





function App() {
return(
  <>
  <Toaster/>

  <div>

    <Header/>
    <main className='pt-1 bg-slate-200 min-h-[calc(100vh)]'>
    <Outlet/>
    </main>
  </div>
  </>
  );
}

export default App;
