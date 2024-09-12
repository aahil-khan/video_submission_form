import { NextResponse } from "next/server";
import axios from 'axios';
import qs from 'qs';

export async function POST(request){
    const submissionData = await request.json();
    try {
        const response = await axios.post(
          'https://docs.google.com/forms/u/1/d/e/1FAIpQLSfrnBUuEvRZnGYl48K688lL3vKwCUO-LZJXUTfVDEwqYzAqiw/formResponse',
        qs.stringify(submissionData),
        {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Access-Control-Allow-Origin": "*",
            },
        }
        );
        return NextResponse.json({
            message: "Form submitted successfully",
          })
    } catch (error) {
        return NextResponse.json({
            message: "Form submission failed",
            error: error.stack,
            data : submissionData,
          })
    }
}

