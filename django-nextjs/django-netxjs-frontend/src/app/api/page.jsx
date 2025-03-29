'use server'
// for server side rendering we need to use "use server"
// we cannto do react clinet side renderings here.
// to do that we create a subrouter in api(server) folder. route.jsx.
// we can use cookies here.


export default async function Page({params,searchParams}) { 
    return <h1>Api Page</h1>
}