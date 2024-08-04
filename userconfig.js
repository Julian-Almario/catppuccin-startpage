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
              name: "Google",
              url: "https://www.google.com/",
              icon: "brand-gmail",
              icon_color: "#a6e3a1",
            },
          ],
        },
        {
          name: "Courses",
          links: [
            {
              name: "Coursera",
              url: "https://www.coursera.org",
              icon: "brand-gmail",
              icon_color: "#a6e3a1",
            },
            {
              name: "Udemy",
              url: "https://www.udemy.com",
              icon: "brand-gmail",
              icon_color: "#a6e3a1",
            },
            {
              name: "Simplilearn",
              url: "https://www.simplilearn.com/",
              icon: "brand-gmail",
              icon_color: "#a6e3a1",
            },
            {
              name: "Khan Academy",
              url: "https://es.khanacademy.org/",
              icon: "brand-gmail",
              icon_color: "#a6e3a1",
            },
          ],
        },
        {
          name: "Cloud computing",
          links: [
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
            {
              name: "FarmaPocket",
              url: "https://farmapocket.vercel.app/",
              icon: "table",
              icon_color: "#f38ba8",
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
              name: "Roadmap",
              url: "https://roadmap.sh/",
              icon: "brand-telegram",
              icon_color: "#a6e3a1",
            },
          ],
        },
        {
          name: "Homelab",
          links: [
            {
              name: "LOADING",
              url: "",
              icon: "brand-telegram",
              icon_color: "#a6e3a1",
            },

          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
