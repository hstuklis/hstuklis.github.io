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
  },
  {
    title: "News",
    items: [
      { label: "Wikipedia News", url: "https://en.wikipedia.org/wiki/Portal:Current_events"},
      { label: "Hacker News", url: "https://news.ycombinator.com"},
      { label: "Lobsters", url: "https://lobste.rs"},
      { label: "Brutalist Report", url: "https://brutalist.report/"},
    ],
  },
  {
    title: "Learning",
    items: [
      { label: "Roadmap.sh", url: "https://roadmap.sh"},
    ],
  },
  {
    title: "Front-End Design",
    items: [
      { label: "Brutalist Websites", url: "https://brutalistwebsites.com"},
      { label: "Google Fonts", url: "https://fonts.google.com/"},
      { label: "Colors.lol", url: "https://colors.lol/"},
      { label: "Coolors", url: "https://coolors.co/"},
    ],
  },
  {
    title: "Back-End",
    items: [
      { label: "DevDocs", url: "https://devdocs.io/"},
    ],
  },
  {
    title: "Awesome Lists",
    items: [
      { label: "awesome-c", url: "https://github.com/oz123/awesome-c"},
      { label: "awesome-go", url: "https://github.com/avelino/awesome-go"},
      { label: "awesome-python", url: "https://github.com/vinta/awesome-python"},
      { label: "awesome-selfhosted", url: "https://github.com/awesome-selfhosted/awesome-selfhosted"},
      { label: "awesome-gamedev", url: "https://github.com/Calinou/awesome-gamedev"},
      { label: "awesome-cli-apps", url: "https://github.com/agarrharr/awesome-cli-apps"},
    ],
  },
  {
    title: "Games",
    items: [
      { label: "Pokémon Showdown", url: "https://play.pokemonshowdown.com/"},
      { label: "Pokémon Auto Chess", url: "https://pokemon-auto-chess.com/"},
      { label: "Pokérogue", url: "https://pokerogue.net/"},
      { label: "Lichess", url: "https://lichess.org/"},
      { label: "Chess.com", url: "https://www.chess.com/home"},
      { label: "Geoguessr", url: "https://www.geoguessr.com/"},
    ],
  },
  {
    title: "Cool",
    items: [
      { label: "Speedruns", url: "https://speedrun.com/"},
      { label: "Romhacking.net", url: "https://www.romhacking.net/"},
    ],
  },
];
