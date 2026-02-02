export interface LinkItem {
  label: string;
  url: string;
  description?: string;
}

export interface LinkSection {
  title: string;
  items: LinkItem[];
  color?: string;
}

export const linkSections: LinkSection[] = [
  {
    title: "Dev News",
    items: [
      { label: "Hacker News", url: "https://news.ycombinator.com"},
      { label: "Lobsters", url: "https://lobste.rs"},
      { label: "Dev.to", url: "https://dev.to"},
    ],
    color: "bg-peach-fuzz"
  },
  {
    title: "Design Inspiration",
    items: [
      { label: "Dribbble", url: "https://dribbble.com"},
      { label: "Awwwards", url: "https://www.awwwards.com"},
      { label: "Brutalist Websites", url: "https://brutalistwebsites.com"},
    ],
    color: "bg-pink-orchid"
  },
  {
    title: "Learning",
    items: [
      { label: "MDN Web Docs", url: "https://developer.mozilla.org"},
      { label: "Patterns.dev", url: "https://patterns.dev"},
      { label: "Roadmap.sh", url: "https://roadmap.sh"},
    ],
    color: "bg-tangerine-dream"
  },
  {
    title: "Tools",
    items: [
      { label: "Excalidraw", url: "https://excalidraw.com"},
      { label: "Squoosh", url: "https://squoosh.app"},
      { label: "JSON Crack", url: "https://jsoncrack.com"},
    ],
    color: "bg-icy-blue"
  },
];
