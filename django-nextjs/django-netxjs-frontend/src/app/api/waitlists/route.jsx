import { getToken } from "@/lib/auth";
import { NextResponse } from "next/server";

const DJANGO_API_WAITLISTS_URL = "http://127.0.0.1:8001/api/waitlists"

export async function GET(request){
    const authToken = getToken()
    if (!authToken) {
        return NextResponse.json({}, {status:401})
    }
    
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
    }
    // `` are string substitutions used for namespaces like tokens here
    // read more about nextjs headers.

    const response = await fetch(DJANGO_API_WAITLISTS_URL, options)
    console.log(response)

    const result = await response.json()
    let status = 200
    if (!response.ok) {
        status = 401
        // return NextResponse.json({}, {status:401})
    }
    return NextResponse.json({...result}, {status:status})
    // when we logged in we need no results but evry other route we may want results...
    // because we are proxieng this request itself here.
} 