import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useAuth } from "../context/auth";
import useResource from "../hooks/useResource";
import { useState } from "react";

export default function CookieStandAdmin() {
  const [storeCount, setCount] = useState(0);
  const { user, login, logout } = useAuth();
  const { createResource, resources, deleteResource } = useResource();

  function updateStoreCount(stores) {
    setCount(stores.length);
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header user={user} login={login} logout={logout} />
      {user ? 
        <Main
          updateStoreCount={updateStoreCount}
          createResource={createResource}
          resources={resources || []}
          deleteResource={deleteResource}
          user={user}
        />
       : 
        <h1 className="text-center">Please Login</h1>
      }

      <Footer count={storeCount} />
    </>
  );
}
