import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  Mail,
  Phone,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import Image from "next/image";

const profile = {
  name: "Akash Singh Bisht",
  shortName: "Akash Bisht",
  initials: "AB",
  role: "Full Stack Developer",
  email: "akashakashbisht@gmail.com",
  phone: "+91 9012311495",
  github: "https://github.com/AKASH-18",
  linkedin: "http://www.linkedin.com/in/akash-bisht-69385418a",
  instagram: "https://www.instagram.com/",
  x: "https://x.com/",
  portfolio: "https://akashbisht18.netlify.app/",
  cv: "https://akashbisht18.netlify.app/Akash_Bisht_CV.pdf",
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

const skillGroups = [
  ["Frontend", "React.js, Next.js, Redux Toolkit, Tailwind CSS, Bootstrap, TypeScript"],
  ["Backend", "Node.js, Express.js, REST APIs"],
  ["Database", "MongoDB, Firebase"],
  ["Tools", "Git, GitHub, VS Code, Figma, Vercel, Render, Netlify"],
  ["Testing", "Jest, React Testing Library"],
  ["Strengths", "Responsive design, API integration, debugging, UI/UX optimization, cross-browser compatibility"],
];

const projects = [
  {
    title: "CRM Project",
    type: "Full-stack CRM system",
    description:
      "Customer relationship management platform with admin and employee roles, lead lifecycle tracking, follow-ups, closure flow, and performance dashboard.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    icon: Layers3,
  },
  {
    title: "Zerodha Clone",
    type: "Full-stack trading platform",
    description:
      "Trading-style application for portfolios, orders and positions with secure backend APIs, CRUD operations, reusable React components and modular architecture.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    icon: Database,
  },
  {
    title: "Movie SuggesAI App",
    type: "AI movie recommendation app",
    description:
      "Responsive SPA with authentication, TMDB movie data, Gemini-powered recommendations, custom hooks and multilingual support.",
    stack: ["React.js", "Redux Toolkit", "Firebase", "Tailwind CSS"],
    demo: "https://netflix-gen-ai.vercel.app/",
    source: "https://netflix-gen-ai.vercel.app/",
    icon: Sparkles,
  },
  {
    title: "CodeViewer",
    type: "Code snippet UI",
    description: "A friendly interface to view and share code snippets with a clean HTML, CSS and JavaScript build.",
    stack: ["HTML5", "JavaScript ES6+", "CSS"],
    demo: "https://akash-18.github.io/codeviewer/",
    source: "https://github.com/AKASH-18/codeviewer",
    icon: Code2,
  },
  {
    title: "GitHub Profile Finder",
    type: "API project",
    description: "Search GitHub profiles and view key account details through a responsive JavaScript interface.",
    stack: ["API", "JavaScript ES6+", "HTML", "CSS"],
    demo: "https://git-proffinder.netlify.app/",
    source: "https://github.com/AKASH-18/Github-Profile-Finder",
    icon: GitBranch,
  },
  {
    title: "Rock Paper Scissors",
    type: "Browser game",
    description: "A simple game against the computer with interactive visuals and score-focused gameplay.",
    stack: ["Game", "JavaScript ES6+", "HTML", "CSS"],
    demo: "https://rock-paper-scissor-zeta-indol.vercel.app/",
    source: "https://github.com/AKASH-18/Rock-Paper-Scissor",
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

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
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
              MERN Stack | React.js | Node.js | MongoDB
            </div>
            <h1 className="hero-title">
              Full stack developer building clean, scalable web apps.
            </h1>
            <p className="hero-copy">
              I am {profile.name}, a B.Tech CSE graduate and MERN stack developer with hands-on self-project experience building responsive interfaces, REST APIs, authentication flows and production-ready deployments.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
            <div className="relative flex h-full min-h-[500px] flex-col justify-between p-6 sm:p-7">
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
                    width: "min(100%, 360px)",
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
                    <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                      <InstagramIcon />
                    </a>
                    <a href={profile.x} target="_blank" rel="noreferrer" aria-label="X">
                      <X size={18} />
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
          copy="The resume highlights MERN projects, deployed apps, REST APIs, authentication, dashboards, API integrations and responsive UI work."
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Toolkit"
            title="MERN stack skills with frontend polish."
            copy="Frontend, backend, database, deployment, testing and debugging skills from the resume, grouped so recruiters can scan fast."
            dark
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {skillGroups.map(([title, copy], index) => (
              <div key={title} className="skill-card reveal" style={{ "--delay": `${index * 45}ms` }}>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{copy}</p>
                  </div>
                  <Braces size={18} className="mt-1 shrink-0 text-zinc-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="content-section">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Self-project experience backed by CSE fundamentals."
          copy="The story is straightforward: full-stack self projects since 2023, B.Tech CSE in 2022, and training exposure across web development, Python, networking and cyber security."
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
              <p className="section-kicker">Immediate joiner</p>
              <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                Looking for a MERN developer who can build and debug end to end?
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
