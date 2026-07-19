export const links = {
  github: "https://github.com/avishkar005",
  linkedin: "https://linkedin.com/in/avishkarchoundkar",
  x: "https://x.com/AvishkarChound1",
  email: "avishkarchoundkar4@gmail.com",
  resume:
    "https://drive.google.com/file/d/1Z9dZJiIXzpKaIMeAgildMn4u1v9W2OF2/view?usp=sharing",
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

// Only projects explicitly provided. Descriptions kept general where
// specifics were not given, to avoid fabricating features.
export const projects: Project[] = [
  {
    slug: "bookmyturf",
    name: "BookMyTurf",
    description:
      "A backend-driven platform for booking sports turfs, built with a focus on clean API design and reliable scheduling logic.",
    tech: ["Backend", "REST API"],
    live: "https://bookmyturf-bay.vercel.app/",
    featured: true,
  },
  {
    slug: "scholarshub",
    name: "ScholarsHub",
    description:
      "A platform built to support students, structured around clean, maintainable backend architecture.",
    tech: ["Backend", "REST API"],
    github: "https://github.com/avishkar005/Scholars-Hub",
    featured: true,
  },
  {
    slug: "notevault",
    name: "NoteVault",
    description:
      "A secure application for storing and organizing notes, designed with a focus on data integrity and simplicity.",
    tech: ["Backend", "REST API"],
    github: "https://github.com/avishkar005/nodevault-backend",
    featured: true,
  },
  {
    slug: "elegant-jewellery-landing",
    name: "Elegant Jewellery Landing Page",
    description:
      "A refined marketing landing page built for a jewellery brand.",
    tech: ["Frontend"],
    live: "https://elegant-concha.netlify.app/",
  },
  {
    slug: "java-calculator",
    name: "Java Calculator",
    description: "A calculator application built in Java.",
    tech: ["Java"],
    github: "https://github.com/avishkar005/Java-Calculator",
  },
  {
    slug: "civicpulse",
    name: "CivicPulse",
    description:
      "A civic issue reporting system built with JavaFX, enabling citizens to report and track local issues.",
    tech: ["Java", "JavaFX"],
    github: "https://github.com/avishkar005/CivicPulse",
  },
  {
    slug: "skillcapsule",
    name: "SkillCapsule",
    description: "Backend service for the SkillCapsule platform.",
    tech: ["Backend"],
    github: "https://github.com/avishkar005/skillcapsule_backend",
  },
  {
    slug: "service-booking-backend",
    name: "Service Booking Backend",
    description:
      "A backend system for managing service bookings, built with an emphasis on clean architecture.",
    tech: ["Backend", "REST API"],
    github: "https://github.com/avishkar005/service-booking-backend",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
  logo: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Development Intern",
    org: "Syteos Labs",
    period: "Jun 15, 2026 — Aug 15, 2026",
    description:
      "Working on full stack development as part of the engineering team.",
    logo: "/images/logos/syteos-labs.png",
  },
  {
    role: "Backend Developer Intern",
    org: "Mendygo.ai",
    period: "Oct 15, 2025 — Dec 15, 2025",
    description:
      "Working on backend systems and APIs as part of the engineering team.",
    logo: "/images/logos/mendygo.png",
  },
  {
    role: "Technical Intern",
    org: "Talrop",
    period: "Mar 15, 2025 — Jul 15, 2025",
    description: "Working as a technical intern on the engineering team.",
    logo: "/images/logos/talrop.png",
  },
  {
    role: "Mathematics Tutor",
    org: "Mahesh Tutorials",
    period: "Aug 15, 2024 — Present",
    description: "Teaching mathematics to students.",
    logo: "/images/logos/mahesh-tutorials.png",
  },
  {
    role: "Sponsorship Lead",
    org: "Google Developer Group On Campus",
    period: "",
    description: "Leading sponsorships for GDG On Campus.",
    logo: "/images/logos/gdg.png",
  },
];

export const achievements = [
  "300+ DSA Problems solved",
  "National Level Hackathon Finalist",
  "GirlScript Summer of Code",
  "GDG Sponsorship Lead",
  "Academic Tutor",
  "Winner, District Level Elocution Competition",
];