export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  service: string;
  year: string;
  description: string;
  heroImage: string;
  images: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  bali: {
    slug: "bali",
    title: "Explore Bali",
    client: "Emergio Games",
    service: "Web Design",
    year: "2025",
    description: "This project was created as a design assessment for Emergio Games. The task was to design a complete tourism website covering discovery, exploration, and booking flows within a limited time frame.",
    heroImage: "https://framerusercontent.com/images/oiS2T2smvbRU93s1qkoP4ZdofiQ.png",
    images: [
      "https://framerusercontent.com/images/4pAj9DLGQUCY1cSy7jaJ4fvAJo.png",
      "https://framerusercontent.com/images/y0Lk2iN5ApUhLuWP4jsoYk70Xns.png",
      "https://framerusercontent.com/images/n2Eeo2VBRrOGAGfYiU8QyamJPjc.png",
      "https://framerusercontent.com/images/jSg1AOuoYVdQbvVCERJ1aJedbc.png",
      "https://framerusercontent.com/images/WOWP8bIfMPGehR5Q0PHwEJ3pjo.png",
      "https://framerusercontent.com/images/vAcruGpssJZEbxR9fBqZQaENQ5g.png",
      "https://framerusercontent.com/images/g9GFahBrPClMQo3JL44tc1rgQ.png",
      "https://framerusercontent.com/images/g4ZgFQhkAPHS6BBOs2aZ2CarV8.png",
      "https://framerusercontent.com/images/towJlzdOiOMEOJvwou1M22gb1A.png",
      "https://framerusercontent.com/images/Ka1u927SPghJG9cGaxvzdcbCC8.png",
      "https://framerusercontent.com/images/1M8Cs9IUDILL2b0wwcV3tJdp9YI.png",
      "https://framerusercontent.com/images/kECnLwLgoStbCFxvuJPD5lr5Dk.png",
      "https://framerusercontent.com/images/bojFc7GskgRx1Phg1WUDHUMVTjY.png",
      "https://framerusercontent.com/images/jhklyt2kODJo8YaP8QPilYuxXLU.png",
      "https://framerusercontent.com/images/BaAJGRCij8g5CSeSI1xXXmIxun4.png",
      "https://framerusercontent.com/images/GlSxLLbvYY0BG5vaQDjDKLwpA.png",
      "https://framerusercontent.com/images/ev2i466XeTtKKXpN94uXq9BXGQ.png"
    ]
  },
  dashboard: {
    slug: "dashboard",
    title: "Admin Dashboard",
    client: "Internal / SaaS Concept",
    service: "UI/UX & Product Design",
    year: "2025",
    description: "Comprehensive administration console crafted for SaaS founders and product teams. Highlights visual token hierarchy, data density control, dark obsidian aesthetic, and modular component widgets.",
    heroImage: "https://framerusercontent.com/images/bMBkpiAn3iPRXWJQwpQ0MEjIw.png",
    images: [
      "https://framerusercontent.com/images/hUxUsKDmmjPPOK8R6DkGSMBLkAs.png",
      "https://framerusercontent.com/images/ckYJdJK2FPXo3JlPorh7RZ7rwQ.png",
      "https://framerusercontent.com/images/EH4888hchRziLHf5MFQhbyh3YCc.png",
      "https://framerusercontent.com/images/5SOBhMwjRL1iTxNmvwrTM89U.png",
      "https://framerusercontent.com/images/vY6PgBd9jt6sZQSIKP5ESQivng.png",
      "https://framerusercontent.com/images/PiqbitI8HE3e7zcivVxTwFeCQw.png",
      "https://framerusercontent.com/images/ObCHBnQKUcBK3rfz5o40y99fn4.png",
      "https://framerusercontent.com/images/lPd6vagxTHuXw1SqI9Dj7eLJsY.png",
      "https://framerusercontent.com/images/3Oad7vVPg3LjsAals1QLtDRFf0.png",
      "https://framerusercontent.com/images/cFzewcQ2xWK13EBcrlqvlD8NI0.png",
      "https://framerusercontent.com/images/X7mHkjKOeWDMR8zs1dBnm2q8rs.png",
      "https://framerusercontent.com/images/wzmIpO0UlhEv70yajWHvtIBdFA4.png",
      "https://framerusercontent.com/images/wATt4vsLBo2pifr34n1cwVsY.png",
      "https://framerusercontent.com/images/4ERUZ7AJSAA00ePcuflZsK3OBI.png",
      "https://framerusercontent.com/images/Cqm21gFvLSd2UgmukpikjxZdZxo.png",
      "https://framerusercontent.com/images/QbB7qFP12jtmKSNYYqEIPzZKn4.png",
      "https://framerusercontent.com/images/O5vZEdOE1heqhZytqeErp4dbpc.png",
      "https://framerusercontent.com/images/4YR4hlzLNNZC9PxxPe2VZFXvBvU.png"
    ]
  },
  commit: {
    slug: "commit",
    title: "Commit - Habit Tracker",
    client: "Crafted Co.",
    service: "Mobile App Design",
    year: "2025",
    description: "An offline-first habit tracker designed with clear typography, intuitive gesture controls, and clean commit-grid streak visualization. Focuses on minimal friction and user consistency.",
    heroImage: "https://framerusercontent.com/images/zduUa5fbRRrmvRrtw5gH9KmeYqY.png",
    images: [
      "https://framerusercontent.com/images/MsrojwMSj52zzb6sCeLKO5sAAo.png",
      "https://framerusercontent.com/images/Vb1jqrmQLpm4ZYIS6oIKhhXN3U.png",
      "https://framerusercontent.com/images/ihVm314oFe55ARwg8ToJA1hIwQ.png",
      "https://framerusercontent.com/images/R4YBJfFPLTZb7LiP2CcRxKOlWvQ.png",
      "https://framerusercontent.com/images/Q1N0PkWpoY4yVdjeHaoL2gK8cQ.png",
      "https://framerusercontent.com/images/5S0m4URvHmsNLNUyTqxOe3zwU4.png",
      "https://framerusercontent.com/images/mX8TdYGqREWClKcX4mp2aWbas.png",
      "https://framerusercontent.com/images/jEBuyDh2jPu3vGPuoCs3uWavro.png",
      "https://framerusercontent.com/images/CVr9AUWFnCMt7v0fKJ9IxbPrY.png",
      "https://framerusercontent.com/images/dMhxxuQgEROHXt3ArHOikxNY.png",
      "https://framerusercontent.com/images/iYnZFQ3GZ8Fmb5nCX52m1Yatc.png",
      "https://framerusercontent.com/images/uwXq3DDfT3TbahqkaG6WP6qaXk.png",
      "https://framerusercontent.com/images/pVhfRUOOJXlh9gB15FIrk74M8M.png",
      "https://framerusercontent.com/images/MJTxwSYHkLIsTAXt59PG2qk3rI.png",
      "https://framerusercontent.com/images/ZGqXtSN3MqE344lLv0Fx3DupKPg.png",
      "https://framerusercontent.com/images/elmJhAT4JWnqsLXFfgsJCMraPA.png"
    ]
  },
  wip: {
    slug: "wip",
    title: "Work In Progress / Checkout my behance :)",
    client: "Creative Studio",
    service: "Design Explorations & Brand Systems",
    year: "2025",
    description: "A curation of ongoing experiments in typography, 3D composition, graphic storytelling, and mobile UX paradigms. Check back soon or visit Behance for full live prototypes.",
    heroImage: "https://framerusercontent.com/images/v4bQkJBh8sNXywf7aX619SGDS68.png",
    images: [
      "https://framerusercontent.com/images/v4bQkJBh8sNXywf7aX619SGDS68.png"
    ]
  }
};
