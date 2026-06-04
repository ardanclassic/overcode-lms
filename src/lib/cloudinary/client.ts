/**
 * Helper function to construct Cloudinary optimized URLs.
 * 
 * @param publicId - The unique identifier of the image/video in Cloudinary
 * @param type - "image" | "video"
 * @returns An optimized Cloudinary URL string
 */
export function getCloudinaryUrl(publicId: string, type: "image" | "video" = "image"): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo";
  
  // Format parameters: auto format (f_auto) and auto quality (q_auto) for best performance
  const optimizationParams = "f_auto,q_auto";
  
  return `https://res.cloudinary.com/${cloudName}/${type}/upload/${optimizationParams}/${publicId}`;
}
