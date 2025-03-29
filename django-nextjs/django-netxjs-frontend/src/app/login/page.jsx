"use client" // this is required to run this file in the client side.
//  jsx is good with code checking it uses.
// -> url -> /login
// import { cookies } from "next/headers" // this is not required
// we cannot use local storage also, it is also visible in localstorage in browser.

// import { useAuth } from "@/components/authProvider"
// const LOGIN_URL = "http://127.0.0.1:8001/api/token/pair"
import { useRouter } from "next/navigation"
const LOGIN_URL = "/api/login/"


export default function Page() {
    // const auth = useAuth()
    const router = useRouter()

    async function handleSubmit (event) {
        event.preventDefault()
        console.log(event, event.target)
        const formData = new FormData(event.target)
        const objectFromForm = Object.fromEntries(formData)
        const jsonData = JSON.stringify(objectFromForm)
        // above 3 steps are required to transform raw data into json
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonData
        }

        // Fetch Data from the django server
        const response = await fetch(LOGIN_URL, requestOptions)
        // const data = await response.json() 
        // console.log(data)
        if (response.ok) {
            console.log("logged in")
            router.replace('/')
            // auth.login()
        }
    }
    return <div className="h-[95vh]">
        <div className='max-w-md mx-auto py-5'>
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' required name='username' placeholder='Your Username' />
                <input type='password' required name='password' placeholder='Your password' />

                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
}