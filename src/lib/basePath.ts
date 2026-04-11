// This value is baked in at build time via NEXT_PUBLIC_BASE_PATH
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getAssetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  
  // Clean redundant slashes if needed
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
}
