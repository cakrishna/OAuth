'use server'
import {setToken, setRefreshToken } from "@/lib/auth"
// import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const DJANGO_API_LOGIN_URL = "http://127.0.0.1:8001/api/token/pair"

export async function POST(request){

    // const myAuthToken = await cookies().get("auth-token")
    // console.log(myAuthToken.value)

    // cookies as tokens run in server
    // const myAuthToken = getToken()
    // const myRefreshToken = getRefreshToken()
    // console.log(myAuthToken,myRefreshToken)
    // dont need this after testing remove it from router.


    // const data = await request.json()
    // console.log(data)

    const requestData = await request.json()
    // requestData is already an object so we can skip these steps
    // const formData = new FormData(event.target)
    // const objectFromForm = Object.fromEntries(formData) 
    const jsonData = JSON.stringify(requestData)
    // above steps are required to transform raw data into json
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }

    // Fetch Data from the django server
    // const response = await fetch(LOGIN_URL, requestOptions)
    const response = await fetch(DJANGO_API_LOGIN_URL, requestOptions)
    // const data = await response.json() 
    const responseData = await response.json() 
    // console.log(data)
    if (response.ok) {
        console.log("logged in")
        // auth.login()
        const {username, access, refresh} = responseData
        // setting cookies using responceData
    //    cookies().set({
    //         name: "auth-token",
    //         value: authToken,
    //         httpOnly: true, // limit clint-side js
    //         sameSite: 'strict',
    //         secure: process.env.NODE_ENV !== 'development',
    //         maxAge: 3600,
    //     })
        setToken(access)
        setRefreshToken(refresh)
        return NextResponse.json({'logged in': true, "username": username}, {status: 200})
    }

    // grab the cookie from the auth_token to consolelog to test
    // const authToken = cookies().get("auth-token")

    // set the cookies like these below
    // we need to set these with real api values later


    // hiding the below code because we are using responceData to set cookies above.
    // cookies().set({
    //     name: "auth-token",
    //     value: "abc",
    //     httpOnly: true, // limit clint-side js
    //     sameSite: 'strict',
    //     secure: process.env.NODE_ENV !== 'development',
    //     maxAge: 3600,
    // })
    // return NextResponse.json({'hello': "World", 'cookie': authToken}, {status: 200}) // just testing cookie response
    return NextResponse.json({'logged in': false, ...responseData}, {status: 400}) // just testing cookie response
}

// here nextjs(NextResponse) is working as a middleware, between django and react.
// here NextResponse is also taking a request and returning a response.
// we can add many routes with new directories in app folder.
// "/api/login/" this would be "/new_dir/login/"