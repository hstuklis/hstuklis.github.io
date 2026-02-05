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
      { label: "Gemini", url: "https://gemini.google.com/"},
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
      { label: "Brutalist Report", url: "https://brutalist.report/"},
    ],
    color: "bg-peach-fuzz"
  },
  {
    title: "Learning",
    items: [
      { label: "Roadmap.sh", url: "https://roadmap.sh"},
    ],
    color: "bg-tangerine-dream"
  },
  {
    title: "Front-End Design",
    items: [
      { label: "Brutalist Websites", url: "https://brutalistwebsites.com"},
      { label: "Google Fonts", url: "https://fonts.google.com/"},
      { label: "Colors.lol", url: "https://colors.lol/"},
      { label: "Coolers", url: "https://coolors.co/"},
    ],
    color: "bg-icy-blue"
  },

  {
    title: "Games",
    items : [
      { label: "Pokémon Showdown", url: "https://play.pokemonshowdown.com/"},
      { label: "Pokémon Auto Chess", url: "https://pokemon-auto-chess.com/"},
      { label: "Pokérogue", url: "https://pokerogue.net/"},
      { label: "Lichess", url: "https://lichess.org/"},
      { label: "Chess.com", url: "https://www.chess.com/home"},
      { label: "Geoguessr", url: "https://www.geoguessr.com/"},
    ],
    color: "bg-seafoam-green"
  },
  {
    title: "Cool",
    items : [
      { label: "Speedruns", url: "https://speedrun.com/"},
      { label: "Romhacking.net", url: "https://www.romhacking.net/"},
    ],
    color: "bg-powder-pink"
  },
];
