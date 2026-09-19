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
    role: "UI/UX Designer",
    period: "Oct 2025 – Dec 2025",
    type: "Remote"
  },
  {
    company: "FuturixAI",
    role: "Associate UI/UX Designer",
    period: "Aug 2025 – Sep 2025",
    type: "Remote"
  },
  {
    company: "Okie Dokie",
    role: "UI/UX Design Intern",
    period: "Jun 2025 – Aug 2025",
    type: "Remote"
  },
  {
    company: "Boediarto Company",
    role: "Freelance UI/UX Designer",
    period: "Mar 2025 – May 2025",
    type: "Remote"
  },
  {
    company: "National Informatics Centre (NIC)",
    role: "UI/UX Design Intern",
    period: "Jan 2025 – Feb 2025",
    type: "New Delhi"
  },
  {
    company: "Hestabit Technology",
    role: "Django Developer Intern",
    period: "Nov 2023 – Nov 2023",
    type: "Remote"
  }
];

export const EDUCATION = [
  {
    institution: "VIT Bhopal University",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    period: "Aug 2021 – Oct 2025",
    grade: "CGPA: 7.31"
  }
];

export const CERTIFICATIONS = [
  {
    name: "Google Foundations of UX Design",
    issuer: "Coursera / Google",
    link: "https://www.coursera.org/account/accomplishments/verify/K8LELXKTASLV"
  },
  {
    name: "IBM User Experience Design Fundamentals",
    issuer: "IBM / Credly",
    link: "https://www.credly.com/badges/3afa805c-7731-431f-80ef-b976bb605a77/linked_in_profile"
  },
  {
    name: "Internshala UI/UX Design Specialization",
    issuer: "Internshala Trainings",
    link: "https://trainings.internshala.com/view_certificate/flbq8l9cl21/fcaq5ujsn7o/"
  }
];

export const ACHIEVEMENTS = [
  "Grand Finalist in KAVACH 2023 National Cyber Hackathon (Team Trailblazers)",
  "Finalist in Innovate You 2024 Techathon"
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
