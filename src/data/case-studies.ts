export interface CaseStudyScreen {
  name: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface CaseStudyWireframe {
  title: string;
  description: string;
  image: string;
  comparisonScreen?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  service: string;
  year: string;
  duration: string;
  role: string;
  tools: string[];
  description: string;
  problem: string;
  solution: string;
  heroImage: string;
  mockupImage: string;
  prototypeUrl: string;
  pdfUrl: string;
  deckSlides: string[];
  screens: CaseStudyScreen[];
  wireframes: CaseStudyWireframe[];
  keyTakeaways: string[];
  tags: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  commit: {
    slug: "commit",
    title: "Commit - Offline-First Habit Tracker",
    client: "Crafted Co.",
    service: "Mobile App Design & UX System",
    year: "2025",
    duration: "3 Weeks",
    role: "Lead Product Designer & UX Researcher",
    tools: ["Figma", "FigJam", "Illustrator"],
    description: "An offline-first habit tracking mobile application designed with intentional typography, intuitive gesture controls, and GitHub-style visual streak heatmaps to help users build enduring daily routines without digital friction.",
    problem: "Most habit trackers overwhelm users with bloated social feeds, complex gamification, and tedious data entry forms. Users frequently drop off within 7 days because the cognitive effort of logging exceeds the psychological reward.",
    solution: "Commit eliminates friction through sub-200ms 1-tap logging, offline-first local persistence, tactile micro-interactions, and clear visual momentum grids that make habit consistency deeply satisfying.",
    heroImage: "/case-studies/commit/screens/Shot.png",
    mockupImage: "/case-studies/commit/screens/mockup 1.png",
    prototypeUrl: "https://www.figma.com/proto/Q2KD8NEqxRXuDY9AiVkCah/HabitTrack?page-id=0%3A1&node-id=4-604&p=f&viewport=717%2C70%2C0.69&t=UT9306GIvZ9GMw7f-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A604",
    pdfUrl: "/case-studies/commit/commit-case-study.pdf",
    deckSlides: Array.from({ length: 17 }, (_, i) => `/case-studies/commit/deck/S${i + 1}.png`),
    screens: [
      {
        name: "Hb Homepage",
        title: "Daily Habit Feed & Active Loops",
        category: "Core Experience",
        description: "Minimalist daily habit checklist with instant haptic complete toggles, streak badges, and progressive daily progress rings.",
        image: "/case-studies/commit/screens/Hb Homepage.png"
      },
      {
        name: "Hb Insights",
        title: "Streak Heatmaps & Analytics",
        category: "Analytics & Trends",
        description: "Visual GitHub-style activity grid showing completion momentum, monthly milestones, and category consistency rates.",
        image: "/case-studies/commit/screens/Hb Insights.png"
      },
      {
        name: "Hb Calendar",
        title: "Monthly History & Day Inspector",
        category: "Historical View",
        description: "Full-month calendar matrix allowing users to look back at routine streaks, catch up on missed logs, and view routine history.",
        image: "/case-studies/commit/screens/Hb Calendar.png"
      },
      {
        name: "Hb Add New Habit",
        title: "Low-Friction Habit Creation",
        category: "Flow & Onboarding",
        description: "3-step habit builder with smart categorization, recurrence frequencies (daily/weekly), and custom color accent tags.",
        image: "/case-studies/commit/screens/Hb Add New Habit.png"
      },
      {
        name: "Hb Settings",
        title: "Theme, Backup & Offline Sync",
        category: "System & Config",
        description: "Privacy-first settings panel with local backup exports, cloud sync options, and high-contrast dark mode toggles.",
        image: "/case-studies/commit/screens/Hb Settings.png"
      },
      {
        name: "Hb CalendarPopup",
        title: "Quick Day Detail Inspector",
        category: "Micro-Interactions",
        description: "Contextual drawer providing detailed timestamp breakdowns and notes for any selected date in the routine timeline.",
        image: "/case-studies/commit/screens/Hb CalendarPopup.png"
      },
      {
        name: "Hb HomePopup",
        title: "Streak Celebration Modal",
        category: "Gamification",
        description: "Satisfying tactile confetti feedback celebrating key milestones (7-day, 30-day, 100-day streaks) to boost user retention.",
        image: "/case-studies/commit/screens/Hb HomePopup.png"
      }
    ],
    wireframes: [
      {
        title: "Low-Fidelity Paper Sketches & Screen Architecture",
        description: "Initial rapid ideation mapping the single-thumb reach zone, bottom navigation layout, and 1-tap logging mechanism.",
        image: "/case-studies/commit/wireframes/Wireframes (1).png"
      },
      {
        title: "Mid-Fidelity Wireframes & Component Specs",
        description: "Refining spacing tokens, typography scales, card layouts, and modal interaction sheets prior to visual styling.",
        image: "/case-studies/commit/wireframes/Wireframes (2).png"
      }
    ],
    keyTakeaways: [
      "92% completion rate observed during user testing sessions",
      "Sub-200ms average time spent per daily habit check-in",
      "Zero-latency offline architecture with clean visual design"
    ],
    tags: ["Mobile App", "Design System", "Offline-First", "UX Research", "Figma Prototype"]
  },

  bali: {
    slug: "bali",
    title: "Explore Bali - Immersive Travel Experience",
    client: "Emergio Games Design Assessment",
    service: "Web Design & Editorial UX",
    year: "2025",
    duration: "1 Week Sprint",
    role: "Lead UI/UX Designer",
    tools: ["Figma", "Photoshop", "FigJam"],
    description: "A rich, sensory tourism portal designed for travelers exploring Bali. Seamlessly balances editorial photographic storytelling, interactive region discovery, curated cultural experiences, and effortless itinerary booking.",
    problem: "Commercial travel booking websites are cluttered with intrusive popups, anxiety-inducing countdown timers, and dense text tables that turn exciting vacation planning into a stressful chore.",
    solution: "Created an immersive, photography-led web experience with clean typographic rhythm, spatial region cards, curated local guidebooks, and transparent 3-step booking checkout.",
    heroImage: "/case-studies/bali/screens/Mockup.png",
    mockupImage: "/case-studies/bali/screens/Mockup.png",
    prototypeUrl: "https://www.figma.com/proto/w8Scu9Z7jAQ1BeYw1wAhwK/Explore-Bali?page-id=0%3A1&node-id=1-3805&viewport=70%2C258%2C0.05&t=OtTMlE1PK31T5Pon-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3805",
    pdfUrl: "/case-studies/bali/bali-case-study.pdf",
    deckSlides: Array.from({ length: 18 }, (_, i) => `/case-studies/bali/deck/S${i + 1}.png`),
    screens: [
      {
        name: "Homepage",
        title: "Hero Discovery & Curated Storytelling",
        category: "Landing & Exploration",
        description: "Editorial hero showcasing Bali's top regions, quick search filters for dates and group size, and featured experiential highlights.",
        image: "/case-studies/bali/screens/Homepage.png"
      },
      {
        name: "Destinations",
        title: "Interactive Island Exploration",
        category: "Region Discovery",
        description: "Interactive region index covering Ubud, Canggu, Uluwatu, and Nusa Penida with key cultural landmarks and travel tips.",
        image: "/case-studies/bali/screens/Destinations.png"
      },
      {
        name: "Experiences",
        title: "Curated Cultural & Adventure Guides",
        category: "Activity Booking",
        description: "Rich activity marketplace categorizing waterfall treks, temple ceremonies, culinary masterclasses, and surf camps.",
        image: "/case-studies/bali/screens/Experiences.png"
      },
      {
        name: "Packages",
        title: "All-Inclusive Travel Itineraries",
        category: "Package Catalog",
        description: "Structured multi-day packages with clear inclusions, transport logistics, accommodation tiering, and verified traveler reviews.",
        image: "/case-studies/bali/screens/Packages.png"
      },
      {
        name: "Package Details",
        title: "Transparent Itinerary & Checkout",
        category: "Booking Flow",
        description: "Day-by-day interactive timeline with transparent pricing breakdown, instant date availability, and flexible booking policies.",
        image: "/case-studies/bali/screens/Package Details.png"
      },
      {
        name: "Contact",
        title: "Concierge & Custom Itinerary Planner",
        category: "Support & Customization",
        description: "Tailored inquiry form connecting travelers with dedicated Bali trip concierges for bespoke travel arrangements.",
        image: "/case-studies/bali/screens/Contact.png"
      }
    ],
    wireframes: [
      {
        title: "Homepage Information Architecture & Wireframe",
        description: "Initial structural layout defining visual hierarchy, above-the-fold value proposition, and content chunking for seamless scanning.",
        image: "/case-studies/bali/wireframes/Homepage.png"
      },
      {
        title: "Destinations & Filter Wireframes",
        description: "Exploration of grid vs map split-view layouts, category pills, and responsive card sizing across desktop and tablet viewports.",
        image: "/case-studies/bali/wireframes/Destinations.png"
      }
    ],
    keyTakeaways: [
      "Completed full design assessment within 7-day sprint",
      "Editorial neobrutalist layout balancing imagery and dense travel data",
      "Seamless 3-step booking flow minimizing traveler drop-off"
    ],
    tags: ["Web Design", "Travel & Tourism", "Editorial UX", "Figma Prototype", "Rapid Sprint"]
  },

  dashboard: {
    slug: "dashboard",
    title: "Cafe Admin - Restaurant & POS Management Console",
    client: "Cafe SaaS Concept",
    service: "Enterprise UI/UX & Design System",
    year: "2025",
    duration: "2 Weeks",
    role: "Lead Systems & Product Designer",
    tools: ["Figma", "FigJam"],
    description: "A high-density, mission-critical administration console and point-of-sale terminal engineered for fast-paced cafes and restaurant chains to manage floor plans, kitchen tickets, menu stock, and revenue analytics.",
    problem: "Restaurant and cafe floor staff work under intense time pressure and noisy environments. Traditional POS systems suffer from tiny touch targets, nested submenus, and delayed kitchen sync that lead to order errors and slow table turnover.",
    solution: "Engineered a high-contrast dark obsidian interface featuring spatial drag-and-drop table layouts, live kitchen ticketing columns, 1-tap bill splitting, and instant inventory updates.",
    heroImage: "/case-studies/dashboard/screens/Mockup.png",
    mockupImage: "/case-studies/dashboard/screens/Mockup.png",
    prototypeUrl: "https://www.figma.com/proto/Ab2mJ08fn4bYpyv5G3f00F/Cafe?page-id=482%3A1834&node-id=482-4767&viewport=1403%2C701%2C0.13&t=rcEuFRhopBrW03mx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=482%3A4767",
    pdfUrl: "/case-studies/dashboard/dashboard-case-study.pdf",
    deckSlides: Array.from({ length: 19 }, (_, i) => `/case-studies/dashboard/deck/S${i + 1}.png`),
    screens: [
      {
        name: "Dashboard",
        title: "Executive Overview & Live Operations",
        category: "Management Hub",
        description: "Real-time command center displaying active tables, kitchen queue load, hourly gross sales, and average ticket fulfillment times.",
        image: "/case-studies/dashboard/screens/Dashboard.png"
      },
      {
        name: "Table Management 1",
        title: "Interactive Floor Plan & Seat Layout",
        category: "Floor Operations",
        description: "Visual spatial floor plan with occupancy color indicators, reservation timers, and 1-tap table merging for large groups.",
        image: "/case-studies/dashboard/screens/Table Management (1).png"
      },
      {
        name: "Table Management 2",
        title: "Active Table Drawer & Order Summary",
        category: "Floor Operations",
        description: "Contextual order drawer for fast add-ons, item status tracking, and instant kitchen relay.",
        image: "/case-studies/dashboard/screens/Table Management (2).png"
      },
      {
        name: "Order Management 1",
        title: "Kitchen Display System (KDS)",
        category: "Kitchen Ticketing",
        description: "Kanban-style ticket columns (New, In-Progress, Ready, Served) with auto-prioritized preparation timer badges.",
        image: "/case-studies/dashboard/screens/Order management (1).png"
      },
      {
        name: "Order Management 2",
        title: "Detailed Ticket Inspector & Modifiers",
        category: "Kitchen Ticketing",
        description: "Precise order view with allergy alerts, custom ingredient notes, and batch routing to bar or kitchen stations.",
        image: "/case-studies/dashboard/screens/Order management (2).png"
      },
      {
        name: "Billing & Payments 1",
        title: "POS Split-Bill Terminal",
        category: "POS & Billing",
        description: "Rapid checkout terminal supporting itemized splitting, equal multi-guest division, tipping presets, and contactless payments.",
        image: "/case-studies/dashboard/screens/Billing & Payments (1).png"
      },
      {
        name: "Billing & Payments 2",
        title: "Digital Receipt & Payment Reconciliation",
        category: "POS & Billing",
        description: "Transaction confirmation with SMS/Email receipt delivery and direct POS drawer reconciliation.",
        image: "/case-studies/dashboard/screens/Billing & Payments (2).png"
      },
      {
        name: "Menu & Reports 1",
        title: "Dynamic Menu Inventory & Pricing",
        category: "Inventory & Reports",
        description: "Quick-toggle 86/out-of-stock management, modifier pricing rules, and real-time recipe ingredient tracking.",
        image: "/case-studies/dashboard/screens/Menu & reports (1).png"
      },
      {
        name: "Menu & Reports 2",
        title: "Sales Analytics & Category Performance",
        category: "Inventory & Reports",
        description: "In-depth analytics detailing best-selling items, peak operational hours, server performance, and profit margin breakdowns.",
        image: "/case-studies/dashboard/screens/Menu & reports (2).png"
      }
    ],
    wireframes: [
      {
        title: "Floor Plan & Navigation Wireframes",
        description: "Low-fidelity wireframe establishing the left-hand navigation sidebar, top status metrics, and responsive floor grid layout.",
        image: "/case-studies/dashboard/wireframes/Wireframes (1).png"
      },
      {
        title: "POS Checkout & KDS Ticket Wireframes",
        description: "Interaction specs mapping ticket state transitions, fast-key numeric keypads, and touch-optimized action targets.",
        image: "/case-studies/dashboard/wireframes/Wireframes (2).png"
      }
    ],
    keyTakeaways: [
      "40% reduction in order-to-kitchen transmission time",
      "60+ modular component tokens designed in Figma",
      "High-contrast dark obsidian UI optimized for low-fatigue shift work"
    ],
    tags: ["SaaS & Enterprise", "POS System", "Design System", "Figma Prototype", "Information Density"]
  }
};