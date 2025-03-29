"use client"
// from next/navigation used because there is an app router alredy.
import { useRouter } from "next/navigation"
const LOGOUT_URL = "/api/logout/"


export default function Page() {
    // using router hook
    const router = useRouter()
    // const auth = useAuth()
    async function handleClick (event) {
        event.preventDefault()
        
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: ''
        }

        // Fetch Data from the django server
        const response = await fetch(LOGOUT_URL, requestOptions)
        // const data = await response.json() 
        // console.log(data)
        if (response.ok) {
            console.log("logged Out")
            
            // route to loginpage after logout
            router.replace('/login')
            // auth.login()

        }
    }
    return <div className="h-[95vh]">
        <div className='max-w-md mx-auto py-5'>
            <h1>Are you sure you want to logout?</h1>            
            <button className='bg-red-500 text-white hover:bg-red-200 px-5 py-2' onClick={handleClick}>Yes, Logout</button>
            
        </div>
    </div>
}