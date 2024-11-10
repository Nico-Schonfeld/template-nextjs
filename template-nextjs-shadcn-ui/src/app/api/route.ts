import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(
      { error: false, success: true, message: "Hello world!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: true,
        success: false,
        message: "Error displaying the message.",
      },
      { status: 500 }
    );
  }
}
