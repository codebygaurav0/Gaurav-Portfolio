import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  X,
} from "lucide-react";

const skills = [
  {
    title: "Languages",
    icon: Braces,
    items: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    items: ["React.js", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    title: "Tools",
    icon: Code2,
    items: ["Git", "GitHub", "VS Code", "Postman", "Thunder Client"],
  },
  {
    title: "Core Concepts",
    icon: Server,
    items: [
      "Authentication",
      "Role-based access control",
      "Responsive design",
      "Reusable components",
      "API integration",
    ],
  },
];

const experience = [
  {
    company: "REGex Software Services",
    role: "Full Stack Mern Developer",
    employmentType: "Internship",
    period: "February 2026 – Present",
    location: "Jaipur, Rajasthan, India",
    points: [
      "Engaged in hands-on training for Full Stack MERN development, focusing on MongoDB, Express.js, React.js, and Node.js.",
      "Developed frontend applications using HTML, CSS, JavaScript, and React.js to enhance user experience.",
      "Created backend APIs with Node.js and Express.js, ensuring seamless data flow and integration.",
    ],
  },
  {
    company: "Cisco Networking Academy",
    role: "Introduction Cyber Security",
    employmentType: "Internship",
    period: "April 2025 · 1 month",
    location: "Cisco & NIIT Foundation",
    points: [
      "Completed the Introduction to Cybersecurity course by Cisco & NIIT Foundation.",
    ],
  },
  {
    company: "Birla Institute of Technology, Mesra (Jaipur Campus)",
    role: "Digital Marketing & Web Development Intern",
    employmentType: "Internship",
    period: "July 2024 · 1 month",
    location: "Jaipur, Rajasthan, India · On-site",
    points: [
      "Designed and developed website pages using HTML, CSS, and JavaScript.",
      "Created responsive layouts for mobile and desktop.",
      "Learned and implemented basic SEO techniques.",
      "Worked on content ideas and creatives for social media marketing, and used digital marketing tools including Google tools and analytics basics.",
      "Worked to improve website performance and user experience, coordinating with the team to complete real-time tasks.",
    ],
  },
  {
    company: "Malaviya National Institute of Technology (MNIT), Jaipur",
    role: "Communication Professional",
    employmentType: "Internship",
    period: "December 2023 · 1 month",
    location: "Jaipur, Rajasthan, India · On-site",
    points: [
      "Completed practical training in professional communication skills.",
      "Engaged in verbal and written communication activities, including email writing and formal documentation.",
      "Participated in public speaking exercises and learned corporate etiquette to improve interview communication.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Task Management Platform",
    description:
      "A secure full-stack task management application with authentication, role-based access control, automated task updates, email reminders, file uploads, and efficient client-server communication.",
    liveDemo: "https://taskmanager-wine-nu.vercel.app/login",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
      "Cloudinary",
    ],
  },
  {
    number: "02",
    title: "Hotel Management System",
    description:
      "A full-stack hotel booking platform with room management, booking workflows, secure authentication, protected routes, role-based access control, automated notifications, and image uploads.",
    liveDemo:
      "https://luxstay-hotel-git-main-gauravs-projects-566748a5.vercel.app/",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Mongoose",
      "Cloudinary",
    ],
  },
  {
    number: "03",
    title: "Food Delivery Website",
    description:
      "A responsive food delivery web application focused on a clean user experience, responsive frontend development, and modern web technologies.",
    liveDemo: "https://frontend-iota-vert-62.vercel.app/login",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
];

const education = [
  {
    institute: "R.C. Khaitan Polytechnic College",
    qualification: "Diploma in Computer Science",
    period: "September 2023 – July 2025",
    location: "Jaipur, India",
  },
  {
    institute: "Mahatma Gandhi Private ITI College",
    qualification: "ITI – Electrician",
    period: "August 2018 – 2023",
    location: "Mahwa, Dausa",
  },
];

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Reveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      element?.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a
            href="#home"
            className="brand"
            aria-label="Gaurav Sain, home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark">G.</span>
            <span className="brand-name">Gaurav Sain</span>
          </a>

          <div className="desktop-nav">
            {navigation.map(([label, id]) => (
              <a href={`#${id}`} key={id} className="nav-link">
                {label}
              </a>
            ))}
            <a
              className="nav-link nav-github"
              href="https://github.com/codebygaurav0"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <a className="nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div
          className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
          id="mobile-navigation"
          aria-hidden={!menuOpen}
        >
          {navigation.map(([label, id]) => (
            <a
              href={`#${id}`}
              key={id}
              className="mobile-nav-link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
          <a
            href="https://github.com/codebygaurav0"
            className="mobile-nav-link"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            CODE WITH GAURAV
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-anchor" id="home">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="hero-grid page-width">
            <div className="hero-copy">
              <Reveal>
                <p className="hero-kicker">
                  <span className="kicker-dot" />
                  Full Stack MERN Developer
                </p>
                <h1>
                  Gaurav
                  <br />
                  <span>Sain.</span>
                </h1>
                <p className="hero-summary">
                  Frontend and MERN Stack Developer focused on building
                  responsive, scalable, and user-friendly web applications
                  using React.js, Node.js, Express.js, and MongoDB.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="button button-primary">
                    View Projects <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                  <a
                    href="/Gaurav_Sain_Resume.pdf"
                    download="Gaurav_Sain_Resume.pdf"
                    className="button button-secondary"
                  >
                    Download Resume <Download size={16} aria-hidden="true" />
                  </a>
                </div>
                <div className="hero-contact">
                  <a href="mailto:gauravmahwa1212@gmail.com">
                    <Mail size={16} aria-hidden="true" />
                    gauravmahwa1212@gmail.com
                  </a>
                  <span className="contact-divider" aria-hidden="true" />
                  <a href="tel:+918058474876">
                    <Phone size={16} aria-hidden="true" />
                    +91-8058474876
                  </a>
                  <span className="contact-divider" aria-hidden="true" />
                  <a
                    href="https://github.com/codebygaurav0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    CODE WITH GAURAV
                  </a>
                  <span className="contact-divider" aria-hidden="true" />
                  <a
                    href="https://www.linkedin.com/in/gaurav-sain-b95619292/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal className="hero-visual-wrap" delay={120}>
              <div className="hero-visual" aria-label="MERN developer stack">
                <div className="visual-topline">
                  <div className="window-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="visual-caption">developer.profile</span>
                  <span className="visual-status">
                    <span /> MERN
                  </span>
                </div>

                <div className="visual-intro">
                  <span className="code-label">01 / THE STACK</span>
                  <h2>Building for the web.</h2>
                  <p>Frontend craft. Full-stack foundations.</p>
                </div>

                <div className="stack-list">
                  <div className="stack-row">
                    <span className="stack-icon stack-icon-blue">
                      <Layers3 size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <small>Frontend</small>
                      <strong>React.js</strong>
                    </span>
                    <Check size={17} aria-hidden="true" />
                  </div>
                  <div className="stack-row">
                    <span className="stack-icon stack-icon-purple">
                      <Server size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <small>Backend</small>
                      <strong>Node.js · Express.js</strong>
                    </span>
                    <Check size={17} aria-hidden="true" />
                  </div>
                  <div className="stack-row">
                    <span className="stack-icon stack-icon-green">
                      <Database size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <small>Database</small>
                      <strong>MongoDB</strong>
                    </span>
                    <Check size={17} aria-hidden="true" />
                  </div>
                </div>

                <div className="visual-footer">
                  <Code2 size={16} aria-hidden="true" />
                  <span>Clean code · Responsive interfaces</span>
                  <span className="footer-arrow">
                    <ArrowDown size={15} aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="visual-note">
                <span className="note-mark">G</span>
                <span>
                  <strong>Full Stack</strong>
                  <small>MERN Developer</small>
                </span>
              </div>
            </Reveal>
          </div>
          <a className="scroll-cue" href="#about">
            Scroll to explore <ArrowDown size={14} aria-hidden="true" />
          </a>
        </section>

        <section className="about section-anchor section-soft" id="about">
          <div className="page-width about-layout">
            <Reveal>
              <SectionHeading eyebrow="About me" title="A little about my work." />
            </Reveal>
            <Reveal className="about-content" delay={100}>
              <div className="about-card">
                <span className="about-card-icon">
                  <BriefcaseBusiness size={21} aria-hidden="true" />
                </span>
                <p>Frontend focus, full-stack perspective.</p>
                <span className="about-card-caption">Developer profile</span>
              </div>
              <div className="about-copy">
                <p>
                  Frontend and MERN Stack Developer with hands-on experience
                  building responsive and scalable web applications.
                </p>
                <p>
                  Work includes React.js interfaces, Redux Toolkit state
                  management, REST API integration, Node.js and Express.js
                  backend development, and MongoDB database integration.
                </p>
                <p>
                  Focused on reusable components, authentication, performance
                  optimization, responsive design, and maintainable code
                  architecture.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="skills section-anchor" id="skills">
          <div className="page-width">
            <Reveal>
              <SectionHeading
                eyebrow="Skills"
                title="Tools for thoughtful, reliable products."
                description="Technologies and development practices from my experience."
              />
            </Reveal>
            <div className="skill-grid">
              {skills.map(({ title, icon: Icon, items }, index) => (
                <Reveal
                  key={title}
                  className={`skill-card ${index === skills.length - 1 ? "skill-card-wide" : ""}`}
                  delay={index * 60}
                >
                  <div className="skill-card-heading">
                    <span className="skill-icon">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3>{title}</h3>
                  </div>
                  <div className="skill-tags">
                    {items.map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="experience section-anchor section-soft"
          id="experience"
        >
          <div className="page-width">
            <Reveal>
              <SectionHeading
                eyebrow="Experience"
                title="Experience that shapes my work."
              />
            </Reveal>
            <div className="experience-list">
              {experience.map((item, index) => (
                <Reveal key={item.company} delay={index * 100}>
                  <article className="experience-card">
                    <div className="experience-marker">
                      <span />
                    </div>
                    <div className="experience-main">
                      <div className="experience-header">
                        <div>
                          <h3>{item.company}</h3>
                          <p className="experience-role">
                            {item.role}
                            {item.employmentType &&
                              ` · ${item.employmentType}`}
                          </p>
                        </div>
                        <div className="experience-meta">
                          <span>{item.period}</span>
                          <span>
                            <MapPin size={14} aria-hidden="true" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <ul className="experience-points">
                        {item.points.map((point) => (
                          <li key={point}>
                            <span />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-anchor" id="projects">
          <div className="page-width">
            <Reveal>
              <SectionHeading
                eyebrow="Projects"
                title="Selected work."
                description="A selection of full-stack and frontend projects."
              />
            </Reveal>
            <div className="project-grid">
              {projects.map((project, index) => (
                <Reveal key={project.number} delay={index * 80}>
                  <article className="project-card">
                    <div className="project-card-top">
                      <span className="project-number">{project.number}</span>
                      <span className="project-symbol">
                        <Code2 size={20} aria-hidden="true" />
                      </span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>
                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <a
                      className="project-demo"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-soft" id="education">
          <div className="page-width">
            <Reveal>
              <SectionHeading
                eyebrow="Education"
                title="Academic background."
              />
            </Reveal>
            <div className="education-grid">
              {education.map((item, index) => (
                <Reveal key={item.institute} delay={index * 80}>
                  <article className="education-card">
                    <span className="education-icon">
                      <GraduationCap size={21} aria-hidden="true" />
                    </span>
                    <p className="education-period">{item.period}</p>
                    <h3>{item.qualification}</h3>
                    <p className="education-institute">{item.institute}</p>
                    <span className="education-location">{item.location}</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-anchor" id="contact">
          <div className="page-width">
            <Reveal>
              <div className="contact-panel">
                <div className="contact-copy">
                  <p className="eyebrow">Get in touch</p>
                  <h2>Let’s talk about what you’re building.</h2>
                  <p>
                    Reach out by email or phone to connect about development
                    opportunities and projects.
                  </p>
                  <a
                    href="mailto:gauravmahwa1212@gmail.com"
                    className="button button-light"
                  >
                    Send an email <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/codebygaurav0"
                    className="github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={17} aria-hidden="true" />
                    CODE WITH GAURAV
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gaurav-sain-b95619292/"
                    className="github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={17} aria-hidden="true" />
                    LinkedIn
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
                <div className="contact-links">
                  <a href="mailto:gauravmahwa1212@gmail.com">
                    <span className="contact-link-icon">
                      <Mail size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <small>Email</small>
                      <strong>gauravmahwa1212@gmail.com</strong>
                    </span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a href="tel:+918058474876">
                    <span className="contact-link-icon">
                      <Phone size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <small>Phone</small>
                      <strong>+91-8058474876</strong>
                    </span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/codebygaurav0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-link-icon">
                      <ExternalLink size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <small>GitHub</small>
                      <strong>CODE WITH GAURAV</strong>
                    </span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gaurav-sain-b95619292/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-link-icon">
                      <ExternalLink size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <small>LinkedIn</small>
                      <strong>LinkedIn</strong>
                    </span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <div className="contact-link-static">
                    <span className="contact-link-icon">
                      <MapPin size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <small>Location</small>
                      <strong>Jaipur, India</strong>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">G.</span>
            <span className="brand-name">Gaurav Sain</span>
          </a>
          <p>Full Stack MERN Developer</p>
          <a href="#home" className="back-to-top">
            Back to top <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
