"use server";

import { data } from "../../../.database/data.js";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ blogs: data });
}
