
import Header from './component/Header';
import {Outlet} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/products`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  },[])


return(
  <>
  <Toaster/>

  <div>

    <Header/>
    <main className='pt-10 bg-slate-200 min-h-[calc(100vh)]'>
    <Outlet/>
    </main>
  </div>
  </>
  );
}

export default App;
