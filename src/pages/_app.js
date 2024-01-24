import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },800);
  },[]);


  return (
    <>
      { loading && <Loader /> }
      <Header />
      <Component {...pageProps} />
    </>
  )
}
