import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function CookieStandAdmin() {
  const [storeCount, setCount] = useState(0);
  function updateStoreCount(stores){
    setCount(stores.length)
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main updateStoreCount={updateStoreCount}/>
      <Footer count={storeCount}/>
    </>
  )
}
