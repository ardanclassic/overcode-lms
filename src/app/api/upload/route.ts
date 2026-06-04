import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary using environment variables
// Ensure these are set in your .env.local file:
// CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
// Or individually:
// NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...
// CLOUDINARY_API_KEY=...
// CLOUDINARY_API_SECRET=...
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const role = formData.get("role") as string; // 'teacher' or 'student'
    const userId = formData.get("userId") as string; // e.g. user UUID

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!role || !userId) {
      return NextResponse.json({ error: "Role and userId are required for structured storage" }, { status: 400 });
    }

    // Read the file as a buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Create a base64 string
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Define the specific folder structure based on user role and id
    // e.g. "overcode/avatars/teachers/123e4567-..."
    const folderPath = `overcode/avatars/${role}s/${userId}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: folderPath,
      // Auto-generate a unique filename or use a specific one
      use_filename: true,
      unique_filename: true,
      overwrite: true,
      // Optional: resize image on upload for avatars
      transformation: [
        { width: 500, height: 500, crop: "fill", gravity: "face" },
      ]
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    });

  } catch (error: any) {
    console.error("Cloudinary Upload Error:", error);
    return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
  }
}
