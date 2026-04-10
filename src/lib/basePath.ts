// This value is baked in at build time if provided as NEXT_PUBLIC_BASE_PATH
const basePath = "/AGAP2IT";

export function getAssetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  
  // On GitHub Pages, we need the prefix. 
  // On Render it's usually at the root, but let's check the environment.
  // Actually, for simplicity and since we KNOW the repo name:
  
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
  
  if (isGitHubPages) {
    return `${basePath}${path}`;
  }
  
  return path;
}
