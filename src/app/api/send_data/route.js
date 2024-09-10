import { NextResponse } from "next/server";
import axios from 'axios';
import qs from 'qs';

export async function POST(request){
    const submissionData = await request.json();
    try {
        const response = await axios.post(
          'https://docs.google.com/forms/u/3/d/e/1FAIpQLSemMM76zogmxpGr5YbvD6L33joExxOjEB_Cv9NoYARQrlBJaw/formResponse',
        qs.stringify(submissionData),
        {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
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

