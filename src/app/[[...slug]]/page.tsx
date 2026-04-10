import HomeClient from "./HomeClient";

// Required for static export: declare all possible URLs
export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["entreprise"] },
    { slug: ["agencedebordeaux"] },
    { slug: ["metier"] },
    { slug: ["conclusion"] },
  ];
}

export default function Home() {
  return <HomeClient />;
}
