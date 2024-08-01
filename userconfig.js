let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Medellin",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://calendar.google.com/calendar/u/0/r?pli=1",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "StartPage Config",
              url: "https://github.com/Julian-Almario/catppuccin-startpage",
              icon: "droplet-bolt",
              icon_color: "#a6e3a1",
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net/sixty",
              icon: "binary-tree",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "Search",
          links: [
            {
              name: "Google",
              url: "https://www.google.com/",
              icon: "brand-gmail",
              icon_color: "#a6e3a1",
            },
            {
              name: "Google Scholar",
              url: "https://scholar.google.com/",
              icon: "calendar-filled",
              icon_color: "#fab387",
            },
            {
              name: "Pudmed",
              url: "https://pubmed.ncbi.nlm.nih.gov/",
              icon: "table",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "Cloud computing",
          links: [
            {
              name: "Local Cloud",
              url: "http://192.168.0.100:443/filebrowser/login",
              icon: "news",
              icon_color: "#a6e3a1",
            },
            {
              name: "Google colab",
              url: "https://colab.research.google.com/",
              icon: "badge-filled",
              icon_color: "#fab387",
            },
            {
              name: "Personal Drive",
              url: "https://drive.google.com/drive/u/0/mobile/my-drive?utm_source=en&pli=1",
              icon: "border-radius",
              icon_color: "#f38ba8",
            },
            {
              name: "Institucional Drive",
              url: "https://remingtonedu-my.sharepoint.com/my",
              icon: "eye-bolt",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
    {
      name: "med",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "Resources",
          links: [
            {
              name: "Biblioteca Universidad",
              url: "https://biblioteca.uniremington.edu.co/index.php/login",
              icon: "brand-github",
              icon_color: "#a6e3a1",
            },
          ],
        },
        {
          name: "2024-2 Google Drive",
          links: [
            {
              name: "Neurologia",
              url: "https://drive.google.com/drive/folders/1Yp2Bgub0ovoXBjEuGdViI2zMtaUuINtD",
              icon: "brain",
              icon_color: "#a6e3a1",
            },
            {
              name: "Cirugia",
              url: "https://drive.google.com/drive/folders/1XBwv4UbQIFG9kYsmgYGKtLCaFdBmx9-b",
              icon: "code-plus",
              icon_color: "#fab387",
            },
            {
              name: "Nefrologia",
              url: "https://drive.google.com/drive/folders/1vsGzG720WtJ6eiqtjE9gSbYDGNZgzXsX",
              icon: "brand-stackoverflow",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "Proximamente",
          links: [
            {
              name: "dou",
              url: "",
              icon: "brand-prisma",
              icon_color: "#a6e3a1",
            },
            {
              name: "hackernews",
              url: "",
              icon: "brand-redhat",
              icon_color: "#fab387",
            },
            {
              name: "uber research",
              url: "",
              icon: "brand-uber",
              icon_color: "#f38ba8",
            },
            {
              name: "google research",
              url: "",
              icon: "hexagon-letter-g",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
    {
      name: "Inge",
      background_url: "src/img/banners/cbg-3.gif",
      categories: [
        {
          name: "Resources",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: "#a6e3a1",
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: "#fab387",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "Courses Learn",
          links: [
            {
              name: "GG",
              url: "https://ggapp.io/pivoshenko",
              icon: "device-gamepad",
              icon_color: "#a6e3a1",
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: "#fab387",
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: "#f38ba8",
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "proximamente",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: "#a6e3a1",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#fab387",
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: "#f38ba8",
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
