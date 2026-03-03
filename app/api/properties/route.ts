import { NextResponse } from "next/server";

import { properties } from "../../constants/propertiesData";

export async function GET() {
  
  return NextResponse.json(properties);
}