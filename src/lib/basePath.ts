const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = "AGAP2IT"; // Hardcoded repo name for reliability on GitHub Pages

export function getAssetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  
  if (isGithubActions) {
    return `/${repoName}${path}`;
  }
  
  return path;
}
