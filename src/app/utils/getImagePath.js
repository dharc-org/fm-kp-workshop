// Utility function to handle image paths with base path for GitHub Pages deployment
export function getImagePath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/fm-kp-workshop' : '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
}
