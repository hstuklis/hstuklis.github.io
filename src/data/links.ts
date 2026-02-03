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
    title: "Tools",
    items: [
      { label: "Gemini", url: "https://gemini.google.com/app?hl=en-AU"},
      { label: "Claude", url: "https://claude.ai/new"},
    ],
    color: "bg-pink-orchid"
  },
  {
    title: "News",
    items: [
      { label: "Wikipedia News", url: "https://en.wikipedia.org/wiki/Portal:Current_events"},
      { label: "Hacker News", url: "https://news.ycombinator.com"},
      { label: "Lobsters", url: "https://lobste.rs"},
      { label: "The Brutalist Report", url: "https://brutalist.report/"},
    ],
    color: "bg-peach-fuzz"
  },
  {
    title: "Design",
    items: [
      { label: "Coolers", url: "https://coolors.co/"},
      { label: "Colors.lol", url: "https://colors.lol/"},
      { label: "Google Fonts", url: "https://fonts.google.com/"},
      { label: "Brutalist Websites", url: "https://brutalistwebsites.com"},
    ],
    color: "bg-tangerine-dream"
  },
  {
    title: "Learning",
    items: [
      { label: "Roadmap.sh", url: "https://roadmap.sh"},
    ],
    color: "bg-icy-blue"
  },
];
