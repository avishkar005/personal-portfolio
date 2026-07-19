import React from "react";
import Container from "@/components/ui/Container";
import StoryCard from "@/components/about/StoryCard";
import MemoryLane from "@/components/about/MemoryLane";
import { links, achievements } from "@/lib/data";

export const metadata = {
  title: "About — Avishkar Choundkar",
};

const sections = [
  {
    label: "Introduction",
    title: "Who I am",
    body: "Hi, I'm Avishkar Choundkar, a Backend Software Engineer who enjoys building scalable applications and solving real-world problems. I love turning ideas into reliable products using Java, Spring Boot, and modern backend technologies. I'm always curious about how systems work and constantly explore new technologies. For me, engineering is about creating meaningful solutions that make people's lives easier.",
  },
  {
    label: "Childhood",
    title: "Where it started",
    body: "I grew up with a curious mindset, always interested in understanding how things worked and finding ways to improve them. I enjoyed learning through exploration, solving puzzles, and participating in activities that challenged my thinking. Those early experiences helped me develop problem-solving skills, confidence, and a habit of continuously learning, qualities that still guide me today.",
  },
  {
    label: "Engineering Journey",
    title: "How I got into engineering",
    body: "My interest in engineering began with a fascination for technology and building things from scratch. As I learned programming, I realized how powerful software is in solving everyday problems. That curiosity led me to backend development, where I enjoy designing APIs, databases, and scalable systems. Every project I build strengthens my passion for creating reliable and impactful software.",
  },
  {
    label: "Today",
    title: "What I'm focused on now",
    body: "Today, I'm focused on becoming a better backend engineer by building production-ready applications and learning advanced system design, microservices, cloud technologies, and AI. I enjoy solving challenging problems, contributing to meaningful projects, and continuously improving my technical skills. My goal is to build products that create real value and scale to millions of users.",
  },
  {
    label: "Outside Coding",
    title: "Beyond the screen",
    body: "Outside coding, I love tutoring students and helping them grow with confidence. I actively participate in elocution competitions because public speaking inspires me. I enjoy reading books, watching movies, and capturing meaningful moments through photography. I'm also passionate about entrepreneurship and spend time exploring startup ideas and building products that solve real-world problems.",
  },
];

export default function AboutPage() {
  return (
    <React.Fragment>
      <section className="bg-ink py-24 text-text-onDark md:py-32">
        <Container>
          <p className="mb-4 text-sm uppercase tracking-widest text-text-onDarkSecondary">
            About Me
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-onDark md:text-6xl">
            Backend engineer, building things that hold up under real use.
          </h1>
          <div className="mt-10 flex flex-wrap gap-3">
            {achievements.map((a) => (
              <span key={a} className="rounded-full border border-borderDark px-4 py-2 text-sm text-text-onDarkSecondary">
                {a}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={"mailto:" + links.email} className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-85">
              Get in touch
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-borderDark px-6 py-3 text-sm font-medium text-text-onDark transition-colors hover:border-white/30">
              GitHub
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sections.map((s, i) => (
            <StoryCard key={s.label} index={i} {...s} />
          ))}
        </div>

        <div className="mt-24">
          <MemoryLane />
        </div>
      </Container>
    </React.Fragment>
  );
}