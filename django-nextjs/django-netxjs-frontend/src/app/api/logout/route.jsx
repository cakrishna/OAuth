import { deleteTokens } from "@/lib/auth";
import { NextResponse } from "next/server";


export async function POST(request){
    // const myTokenResponse = deleteTokens()
    // console.log(myTokenResponse) 
    // hides these info to the front end from logout, this for test purpose only 

    deleteTokens()
    // this is enough

    return NextResponse.json({}, {status:200})
}