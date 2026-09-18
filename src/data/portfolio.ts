export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  client?: string;
  service?: string;
  image: string;
  link: string;
  tag: string;
  highlight?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "bali",
    slug: "bali",
    title: "Explore Bali",
    category: "Web Design",
    year: "2025",
    client: "Emergio Games",
    service: "Web Design",
    description: "This project was created as a design assessment for Emergio Games. The task was to design a complete tourism website covering discovery, exploration, and booking flows within a limited time frame.",
    image: "https://framerusercontent.com/images/oiS2T2smvbRU93s1qkoP4ZdofiQ.png",
    link: "/work/bali",
    tag: "Web Design"
  },
  {
    id: "dashboard",
    slug: "dashboard",
    title: "Admin Dashboard",
    category: "Web Design",
    year: "2025",
    client: "Internal / Concept",
    service: "Product Design",
    description: "Modern web analytics & administration dashboard featuring modular widget management, real-time KPI graphs, and dark-mode data visualization.",
    image: "https://framerusercontent.com/images/bMBkpiAn3iPRXWJQwpQ0MEjIw.png",
    link: "/work/dashboard",
    tag: "Web Design"
  },
  {
    id: "commit",
    slug: "commit",
    title: "Commit",
    category: "Mobile App Design",
    year: "2025",
    client: "Crafted Co.",
    service: "Mobile App Design",
    description: "Minimalist offline-first habit tracker crafted for daily consistency, streak metrics, haptic feedback, and distraction-free visual feedback.",
    image: "https://framerusercontent.com/images/zduUa5fbRRrmvRrtw5gH9KmeYqY.png",
    link: "/work/commit",
    tag: "Mobile App Design"
  },
  {
    id: "wip",
    slug: "wip",
    title: "Work In Progress / Checkout my behance :)",
    category: "Product & Graphic Design",
    year: "2025",
    client: "Behance Showcase",
    service: "Case Studies",
    description: "Ongoing design explorations, mobile prototypes, branding identities, and 3D visual concepts currently in active production.",
    image: "https://framerusercontent.com/images/v4bQkJBh8sNXywf7aX619SGDS68.png",
    link: "/work/wip",
    tag: "Work In Progress"
  }
];

export const SERVICES = [
  {
    id: "web",
    title: "Web Design",
    description: "I design responsive websites with clear structure, smooth flows, and visuals that support real user goals."
  },
  {
    id: "mobile",
    title: "Mobile App Design",
    description: "I design intuitive mobile experiences that balance usability, functionality, and engaging visual systems."
  },
  {
    id: "graphic",
    title: "Graphic Design",
    description: "I create clean, purposeful visuals that communicate ideas clearly and strengthen brand identity."
  },
  {
    id: "3d",
    title: "3D Modeling",
    description: "I explore 3D forms and compositions to add depth, realism, and visual impact to digital experiences."
  },
  {
    id: "video",
    title: "Video Editing",
    description: "I edit videos with strong pacing and clarity, focusing on storytelling rather than flashy effects."
  }
];

export const EXPERIENCES = [
  {
    company: "AlgobrainAI",
    role: "Associate UI/UX Designer",
    period: "October 2025 - Current",
    badge: "Current"
  },
  {
    company: "FuturixAI",
    role: "Associate UI/UX Designer",
    period: "August 2025 - September 2025"
  },
  {
    company: "Okie Dokie",
    role: "UI/UX Designer",
    period: "June 2025 - August 2025"
  },
  {
    company: "Boediarto Company",
    role: "UI/UX Designer",
    period: "March 2025 - May 2025"
  },
  {
    company: "National Informatics Centre",
    role: "UI/UX Design Intern",
    period: "January 2025 - February 2025"
  },
  {
    company: "Hestabit Technology",
    role: "Django Developer",
    period: "November 2023 - November 2023"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Aditya delivered UI screens, logos, and icons on time with great attention to detail. His designs were clean and easy to implement, which made collaboration smooth.",
    author: "Priyanka Kashyap",
    role: "Frontend Developer, NIC"
  },
  {
    quote: "Working with Aditya was fun and effortless. He helped me put together sales decks, whitepapers, and presentation templates for PBS Biotech, and the output always hit the mark.",
    author: "Darryl Boediarto",
    role: "Senior UX Designer, Providence"
  },
  {
    quote: "Aditya designed multiple web and mobile application screens and supported our branding with clarity and consistency. He was thoughtful, reliable, and great to work with.",
    author: "Adarsh Singh",
    role: "Digital Marketing Strategist, Algobrain AI"
  }
];

export const STATS = [
  { value: "15+", label: "Projects Completed" },
  { value: "8+", label: "Global Clients" },
  { value: "2+", label: "Years of Experience" },
  { value: "5+", label: "Certificates Received" }
];
