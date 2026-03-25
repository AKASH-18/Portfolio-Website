import {
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  Mail,
  Phone,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";

const profile = {
  name: "Akash Singh Bisht",
  shortName: "Akash Bisht",
  initials: "AB",
  role: "MERN Stack Developer",
  email: "akashakashbisht@gmail.com",
  phone: "+91 9012311495",
  github: "https://github.com/AKASH-18",
  linkedin: "http://www.linkedin.com/in/akash-bisht-69385418a",
  portfolio: "https://akashbisht18.netlify.app/",
  cv: "https://drive.google.com/file/d/1UVhsvOKMLDmHLRYQAisFnxlvxD6C8E3V/view?usp=sharing",
};

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redux Toolkit",
  "Tailwind CSS",
  "Bootstrap",
  "TypeScript",
  "Firebase",
  "REST APIs",
  "JavaScript",
  "Git",
  "GitHub",
  "Jest",
  "React Testing Library",
  "Figma",
  "Vercel",
  "Render",
  "Netlify",
];

const techStack = [
  { name: "MongoDB", group: "Database", icon: "https://cdn.simpleicons.org/mongodb/47A248", accent: "#47A248" },
  { name: "Express", group: "Backend", icon: "https://cdn.simpleicons.org/express/FFFFFF", accent: "#f8fafc" },
  { name: "React", group: "Frontend", icon: "https://cdn.simpleicons.org/react/61DAFB", accent: "#61DAFB" },
  { name: "Node.js", group: "Backend", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E", accent: "#5FA04E" },
  { name: "Next.js", group: "Framework", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", accent: "#f8fafc" },
  { name: "JavaScript", group: "Language", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", accent: "#F7DF1E" },
  { name: "TypeScript", group: "Language", icon: "https://cdn.simpleicons.org/typescript/3178C6", accent: "#3178C6" },
  { name: "Redux", group: "State", icon: "https://cdn.simpleicons.org/redux/764ABC", accent: "#764ABC" },
  { name: "Tailwind", group: "Styling", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", accent: "#06B6D4" },
  { name: "Firebase", group: "Auth", icon: "https://cdn.simpleicons.org/firebase/FFCA28", accent: "#FFCA28" },
  { name: "Git", group: "Versioning", icon: "https://cdn.simpleicons.org/git/F05032", accent: "#F05032" },
  { name: "Vercel", group: "Deploy", icon: "https://cdn.simpleicons.org/vercel/FFFFFF", accent: "#f8fafc" },
];

const projects = [
  {
    title: "CRM Project",
    type: "Full-stack CRM system",
    description:
      "Built a role-based CRM system with admin and employee access, lead tracking, follow-up management, closure workflow and dashboard views to manage customer pipelines end to end.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    demo: "https://crm-project-brown-theta.vercel.app",
    source: "https://github.com/AKASH-18/Crm-project",
    icon: Layers3,
  },
  {
    title: "Zerodha Clone",
    type: "Full-stack trading platform",
    description:
      "Built a full-stack trading-style platform with portfolio, order and position management, secure backend APIs, CRUD operations and reusable React components.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    source: "https://github.com/AKASH-18/Zerodha_Clone",
    icon: Database,
  },
  {
    title: "Movie SuggesAI App",
    type: "AI movie recommendation app",
    description:
      "Built a responsive movie app with Firebase authentication, TMDB movie data, Gemini-powered recommendations, custom hooks and multilingual support.",
    stack: ["React.js", "Redux Toolkit", "Firebase", "Tailwind CSS"],
    demo: "https://netflix-gen-ai.vercel.app/",
    source: "https://github.com/AKASH-18/NetflixGenAI",
    icon: Sparkles,
  },
  {
    title: "Pocket Notes",
    type: "Note-taking app",
    description:
      "Built a responsive note-taking app for creating note groups, saving notes by category, and managing quick thoughts, reminders and study notes.",
    stack: ["React.js", "JavaScript", "CSS", "HTML", "Vercel"],
    demo: "https://pocket-notes-8g7r.vercel.app/",
    source: "https://github.com/AKASH-18/POCKET_NOTES",
    icon: Code2,
  },
  {
    title: "GitHub Profile Finder",
    type: "API project",
    description: "Built a GitHub profile search app using API integration to display profile details through a responsive JavaScript interface.",
    stack: ["API", "JavaScript ES6+", "HTML", "CSS"],
    demo: "https://akash-18.github.io/Github-Profile-Finder/",
    source: "https://github.com/AKASH-18/Github-Profile-Finder",
    icon: GitBranch,
  },
  {
    title: "Rock Paper Scissors",
    type: "Browser game",
    description: "Built a browser game against the computer with interactive controls, score tracking and a responsive JavaScript UI.",
    stack: ["Game", "JavaScript ES6+", "HTML", "CSS"],
    demo: "https://rock-paper-scissor-zeta-indol.vercel.app/",
    source: "https://github.com/AKASH-18/Rock_Paper_Scissor-",
    icon: Terminal,
  },
];

const journey = [
  ["2023-Present", "Full Stack Developer - Self Projects", "Built and deployed MERN applications, REST APIs, authentication flows, responsive UI and debugging workflows."],
  ["2018-2022", "B.Tech CSE", "Govind Ballabh Pant Institute of Engineering and Technology, Computer Science and Engineering, 78.47%."],
  ["Training", "BSNL", "Networking and Cyber Security exposure."],
  ["Training", "Insergo Tech", "Web development training and practical UI work."],
  ["Training", "Slog Solution", "Python training and programming practice."],
  ["School", "Kendriya Vidyalaya Pithoragarh", "Intermediate and High School."],
];

function Button({ href, children, primary = false }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={`action-link group ${primary ? "action-primary" : "action-secondary"}`}
    >
      {children}
      <ArrowUpRight size={17} className="action-icon" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, dark = false }) {
  return (
    <div className="section-head reveal">
      <div>
        <p className={`section-kicker ${dark ? "text-zinc-600" : ""}`}>{eyebrow}</p>
        <h2 className={`section-title ${dark ? "text-zinc-950" : ""}`}>{title}</h2>
      </div>
      {copy ? <p className={`section-copy ${dark ? "text-zinc-700" : "text-zinc-300"}`}>{copy}</p> : null}
    </div>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.8-.25.8-.56v-2.02c-3.26.71-3.95-1.4-3.95-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.75-1.57-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.21-3.15-.12-.3-.52-1.5.12-3.1 0 0 .98-.32 3.22 1.2A11.1 11.1 0 0 1 12 5.87c1 0 1.98.13 2.92.39 2.23-1.52 3.21-1.2 3.21-1.2.64 1.6.24 2.8.12 3.1.76.82 1.21 1.87 1.21 3.15 0 4.51-2.74 5.5-5.35 5.79.42.36.8 1.08.8 2.18v3.06c0 .31.21.67.81.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.75h3.96V21H3V9.75Zm6.18 0h3.8v1.54h.05c.53-1 1.82-1.86 3.75-1.86 4.01 0 4.75 2.64 4.75 6.07V21h-3.96v-4.88c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57V21H10.1V9.75Z" />
    </svg>
  );
}

export default function Home() {
  const marqueeSkills = [...skills, ...skills];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07080d] text-white">
      <div className="scroll-line" />
      <div className="noise" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="grid-glow" />

      <nav className="site-nav">
        <a href="#top" className="font-semibold tracking-wide text-white">
          {profile.shortName}
        </a>
        <div className="hidden items-center gap-1 text-zinc-300 md:flex">
          {["work", "skills", "journey", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="hire-link">
          Hire Me
        </a>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-grid">
          <div className="reveal">
            <div className="hero-pill">
              <Sparkles size={16} />
              React.js | Node.js | MongoDB | Next.js
            </div>
            <h1 className="hero-title">
              MERN Stack Developer
            </h1>
            <p className="hero-copy">
              I am {profile.name}, a B.Tech CSE graduate focused on responsive React interfaces, REST APIs, MongoDB-backed features and production-ready deployments.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="#work" primary>
                See My Work
              </Button>
              <Button href={profile.cv}>Download CV</Button>
              <Button href={`mailto:${profile.email}`}>
                <Mail size={17} />
                Contact
              </Button>
            </div>
          </div>

          <div className="profile-card reveal reveal-delay">
            <div className="profile-card-bg" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-between p-6 sm:min-h-[460px] sm:p-7">
              <div className="flex items-center justify-between">
                <div className="icon-shell">
                  <Code2 size={28} />
                </div>
                <div className="flex gap-2">
                  <span className="window-dot bg-red-400" />
                  <span className="window-dot bg-amber-300" />
                  <span className="window-dot bg-lime-300" />
                </div>
              </div>
              <div className="space-y-5">
                <div
                  className="mx-auto"
                  style={{
                    width: "min(100%, 320px)",
                    aspectRatio: "4 / 5",
                    padding: 10,
                    borderRadius: 24,
                    border: "1px solid rgba(190, 242, 100, 0.34)",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035))",
                    boxShadow: "0 24px 70px rgba(0,0,0,0.24), 0 0 70px rgba(34,211,238,0.15)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      borderRadius: 17,
                      border: "1px solid rgba(7,8,13,0.78)",
                      background: "#09090b",
                    }}
                  >
                    <Image
                      src="/user1.jpg"
                      alt={`${profile.name} profile photo`}
                      width={420}
                      height={520}
                      priority
                      className="profile-photo"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 42%" }}
                    />
                  </div>
                </div>
                <div className="profile-name-panel">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-200">{profile.role}</p>
                  <h2>{profile.name}</h2>
                  <div className="social-row" aria-label="Social and contact links">
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <LinkedinIcon />
                    </a>
                    <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <GithubIcon />
                    </a>
                    <a href={`tel:${profile.phone.replace(/\s/g, "")}`} aria-label="Phone">
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  ["20+", "Skills"],
                  ["6+", "Projects"],
                  ["78.47%", "B.Tech"],
                ].map(([value, label]) => (
                  <div key={label} className="stat-card">
                    <p className="text-2xl font-black text-lime-200">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section">
        <div className="marquee text-sm font-bold uppercase tracking-[0.3em] text-zinc-300">
          <div>
            {marqueeSkills.map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="content-section">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with real full-stack practice."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="project-card reveal" style={{ "--delay": `${index * 55}ms` }}>
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div className="project-icon">
                    <Icon size={24} />
                  </div>
                  <span className="text-right text-sm text-zinc-400">{project.type}</span>
                </div>
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="mt-4 min-h-28 leading-7 text-zinc-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
                {(project.demo || project.source) ? (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="mini-link mini-primary">Live Demo</a> : null}
                    {project.source ? <a href={project.source} target="_blank" rel="noreferrer" className="mini-link">Source</a> : null}
                  </div>
                ) : null}
                <div className="card-line" />
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="mx-auto max-w-6xl">
          <div className="skills-panel reveal">
            <div className="skills-title">
              <p className="section-kicker">Tech Stack</p>
              <h2>MERN + modern web tools.</h2>
            </div>

            <div className="tech-grid" aria-label="Developer skills and tools">
              {techStack.map((tech, index) => (
                <article
                  key={tech.name}
                  className="tech-tile reveal"
                  style={{ "--accent": tech.accent, "--delay": `${index * 35}ms` }}
                >
                  <div className="tech-icon" aria-hidden="true" style={{ "--icon": `url(${tech.icon})` }} />
                  <div>
                    <h3>{tech.name}</h3>
                    <span>{tech.group}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="content-section">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Self-project experience backed by CSE fundamentals."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {journey.map(([year, title, text], index) => (
            <article key={`${year}-${title}`} className="journey-card reveal" style={{ "--delay": `${index * 45}ms` }}>
              <p className="font-mono text-sm text-lime-200">{year}</p>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-zinc-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-20 px-5 pb-12 sm:px-8">
        <div className="contact-panel reveal">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-kicker">Open to opportunities</p>
              <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                Looking for a MERN developer who can build responsive, production-ready web apps?
              </h2>
              <div className="mt-6 grid gap-3 text-base text-zinc-300 sm:grid-cols-2">
                <a className="contact-row" href={`mailto:${profile.email}`}>
                  <Mail size={17} /> {profile.email}
                </a>
                <a className="contact-row" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  <Phone size={17} /> {profile.phone}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={`mailto:${profile.email}`} primary>
                <Mail size={17} />
                Email Me
              </Button>
              <Button href={profile.github}>
                <GitBranch size={17} />
                GitHub
              </Button>
              <Button href={profile.linkedin}>
                <ExternalLink size={17} />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
        <footer className="mx-auto mt-8 flex max-w-7xl flex-col justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
          <span>Built with Next.js, JavaScript and Tailwind CSS.</span>
          <span>Optimized for smooth scrolling, fast rendering and responsive layouts.</span>
        </footer>
      </section>
    </main>
  );
}
