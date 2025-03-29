'use client'

import { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
// import { useAuth } from '@/components/authProvider';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  // const auth = useAuth()
  // GET REQUEST
  const {data, error, isLoading} = useSWR("http://127.0.0.1:8001/api/hello", fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  // const [data, setData] = useState({});
  // async function getDjangoApiData() {
  //   const response = await fetch ("http://127.0.0.1:8001/api/hello");
  //   const responceData = await response.json();
  //   // console.log(data);
  //   setData(responceData);
  // }
  // async function handleCLick() {
  //   await getDjangoApiData();
  // }

  // <button onClick={handleCLick}>
  // Lookup Data
  // </button>
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div>
          {/* {auth.isAuthenticated ? "Hello User" : "Hello Guest!"} */}
          <h1> issue is that we cannot add authentication inside layout. need middleware for that. </h1>
        </div>
        

        <div>
          {JSON.stringify(data)}
        </div>    

      </main>     
    </div>
  );
}
