import React, { useEffect, useState } from "react";
import heroWorkspace from "../assets/hero-workspace.png";

const filters = ["all", "work", "research", "project"];

const portfolioItems = [
  {
    number: "01",
    title: "STAR",
    category: "research",
    front: "Research / RAG",
    subtitle: "Structure-Aware Adaptive Retrieval for RAG",
    role: "Research / Method Design / Experiments",
    description:
      "A research project exploring retrieval instability and structure-aware adaptive retrieval for reliable RAG systems.",
    tags: ["RAG", "retrieval", "paper"],
    tone: "paper",
  },
  {
    number: "02",
    title: "SBU-RAG",
    category: "research",
    front: "Research / Stability",
    subtitle: "Sufficient-but-Unstable RAG",
    role: "Problem Definition / Experiment Design",
    description:
      "A study on cases where retrieved context is sufficient but unstable under generation or retrieval variation.",
    tags: ["RAG", "stability", "LLM"],
    tone: "soft",
  },
  {
    number: "03",
    title: "BaioBrief",
    category: "project",
    front: "Project / AI News",
    subtitle: "AI News Analysis Platform",
    role: "AI Logic / Frontend / Platform Build",
    description:
      "A GPT-powered platform that crawls, summarizes, translates, classifies, and visualizes Indonesian pharmaceutical news.",
    tags: ["GPT-4", "React", "SpringBoot"],
    tone: "dark",
  },
  {
    number: "04",
    title: "Smart Pad",
    category: "project",
    front: "Project / IoT",
    subtitle: "AI-Based Inventory Prediction",
    role: "Prediction Module / Dashboard / IoT System",
    description:
      "An NFC and ESP32-based inventory service with real-time monitoring and Prophet-based 7-day depletion prediction.",
    tags: ["IoT", "Prophet", "MongoDB"],
    tone: "grid",
  },
  {
    number: "05",
    title: "spea[King]",
    category: "project",
    front: "Project / AI Service",
    subtitle: "AI-Based Interview Practice Service",
    role: "Service Planning / Frontend / Backend",
    description:
      "A voice-based interview practice service that generates customized questions and analyzes answers with LLM, STT, and TTS.",
    tags: ["FastAPI", "STT", "TTS"],
    tone: "type",
  },
  {
    number: "06",
    title: "Daewoong",
    category: "work",
    front: "Work / Industry",
    subtitle: "Indonesia Business Team Industry Project",
    role: "Web Platform / Crawling / UI Iteration",
    description:
      "An AI-based news analysis web platform that turns manual business monitoring into an automated workflow.",
    tags: ["industry", "backend", "chatbot"],
    tone: "image",
  },
  {
    number: "07",
    title: "Website",
    category: "work",
    front: "Work / Web Identity",
    subtitle: "Personal Archive Website",
    role: "Web Design / Identity / Frontend",
    description:
      "A personal archive system for organizing research, projects, notes, and visual references in one editorial interface.",
    tags: ["portfolio", "React", "archive"],
    tone: "minimal",
  },
  {
    number: "08",
    title: "Lab Work",
    category: "work",
    front: "Work / Research Ops",
    subtitle: "AI Inference Lab Practice",
    role: "Experiment Design / Documentation",
    description:
      "Ongoing research practice around evaluation, retrieval behavior, answer reliability, and experiment organization.",
    tags: ["experiments", "docs", "AI"],
    tone: "paper",
  },
];

const awards = [
  "KDD 2026 Undergraduate Consortium presenter",
  "Grand Prize, 2025 AI Center x Daewoong Foundation Hackathon",
  "Silver Prize, 2025 Interdisciplinary Project Competition MEIT",
  "Second Prize, GDGoC onewave Hackathon",
  "National Excellence Scholarship, full tuition for 4 years",
];

const keywords = ["Research", "Backend", "AI Service", "Data", "UX", "System Design"];

function Header({ activeFilter, currentPage, setActiveFilter, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const chooseFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage("portfolio");
    setIsOpen(false);
    setIsPortfolioOpen(false);
  };

  const openPage = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    setIsPortfolioOpen(false);
  };

  return (
    <header className={`site-header is-scrolled ${isOpen ? "is-open" : ""}`}>
      <button className="brand" type="button" onClick={() => openPage("about")} aria-label="Yeowon Jeon about me">
        YEOWON JEON
      </button>
      <span className="header-year">2026</span>
      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span></span>
        <span></span>
      </button>
      <nav className="site-nav">
        <button
          className={currentPage === "about" ? "is-active" : ""}
          type="button"
          onClick={() => openPage("about")}
        >
          about me
        </button>
        <div
          className="nav-group"
          onMouseEnter={() => setIsPortfolioOpen(true)}
          onMouseLeave={() => setIsPortfolioOpen(false)}
        >
          <button
            className={currentPage === "portfolio" ? "is-active" : ""}
            type="button"
            onClick={() => chooseFilter("all")}
            onFocus={() => setIsPortfolioOpen(true)}
            aria-expanded={isPortfolioOpen}
          >
            portfolio
          </button>
          <div className="nav-dropdown">
            {filters.slice(1).map((filter) => (
              <button
                className={activeFilter === filter ? "is-active" : ""}
                type="button"
                key={filter}
                onClick={() => chooseFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <button
          className={currentPage === "awards" ? "is-active" : ""}
          type="button"
          onClick={() => openPage("awards")}
        >
          awards
        </button>
        <button
          className={currentPage === "contact" ? "is-active" : ""}
          type="button"
          onClick={() => openPage("contact")}
        >
          contact
        </button>
      </nav>
    </header>
  );
}

function AboutMe({ onOpenPortfolio }) {
  return (
    <section className="hero board" id="about">
      <div className="hero-topline">
        <span>PERSONAL DOSSIER</span>
        <span>FILE NO. 2026-001</span>
      </div>
      <div className="hero-grid">
        <div className="hero-title">
          <p className="eyebrow">Name / Yeowon Jeon</p>
          <h1>The portfolio.</h1>
          <p>Research + implementation. Concept to system.</p>
        </div>
        <div className="connect-panel">
          <dl className="dossier-meta">
            <div>
              <dt>Field</dt>
              <dd>AI Engineering</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>RAG / Backend / AI Service</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>Seoul</dd>
            </div>
            <div>
              <dt>Archive</dt>
              <dd>2026</dd>
            </div>
          </dl>
          <button type="button" onClick={onOpenPortfolio}>
            View portfolio
          </button>
        </div>
      </div>
      <div className="about-panel">
        <h2>ABOUT ME <span>01 / 04</span></h2>
        <p>
          I study artificial intelligence engineering, with an interest in research-driven systems,
          backend architecture, and human-centered AI services.
        </p>
        <p>
          My work moves between research, implementation, data analysis, and interface thinking.
        </p>
        <div className="keyword-row">
          {keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio({ activeFilter, setActiveFilter }) {
  const visibleItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="section board portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
      <div className="section-kicker">
        <span>PORTFOLIO</span>
        <span>02 / 04</span>
      </div>
      <div className="section-heading">
        <h2 id="portfolio-title">Portfolio</h2>
        <p>Selected works across research, implementation, and project-based practice.</p>
      </div>
      <div className="filter-row" aria-label="Portfolio filters">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "is-active" : ""}
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {visibleItems.map((item) => (
          <button className="flip-card" type="button" key={item.number} aria-label={`${item.title} details`}>
              <span className="flip-card-inner">
                <span className="flip-card-front">
                  <span className="file-line">
                    <small>FILE {item.number}</small>
                    <small>{item.category}</small>
                  </span>
                  <span
                    className={`card-image card-image-${item.tone}`}
                    style={item.tone === "image" ? { "--card-bg": `url(${heroWorkspace})` } : undefined}
                    aria-hidden="true"
                  >
                    <span>{item.category}</span>
                  </span>
                  <span className="card-front-text">
                  <small>{item.front}</small>
                  <strong>{item.title}</strong>
                  <em>{item.subtitle}</em>
                </span>
              </span>
              <span className="flip-card-back">
                <span className="file-line">
                  <small>SUMMARY</small>
                  <small>FILE {item.number}</small>
                </span>
                <span>
                  <small>{item.category}</small>
                  <strong>{item.subtitle}</strong>
                  <p>{item.description}</p>
                </span>
                <span className="card-meta">
                  <span>Role</span>
                  <em>{item.role}</em>
                  <span className="card-tags">#{item.tags.join(" #")}</span>
                  <b>view more</b>
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="section board awards" id="awards" aria-labelledby="awards-title">
      <div className="section-kicker">
        <span>AWARDS & HONORS</span>
        <span>03 / 04</span>
      </div>
      <div className="awards-grid">
        <div>
          <h2 id="awards-title">Awards</h2>
          <p className="awards-copy">
            Recognition across research presentation, hackathons, interdisciplinary projects, and national
            scholarship.
          </p>
        </div>
        <ol className="award-files">
          {awards.map((award, index) => (
            <li key={award}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{award}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact board" id="contact" aria-labelledby="contact-title">
      <div className="section-kicker contact-kicker">
        <span>CONTACT</span>
        <span>04 / 04</span>
      </div>
      <div>
        <p className="eyebrow">contact</p>
        <h2 id="contact-title">Let's build something precise.</h2>
      </div>
      <div className="contact-links">
        <a href="mailto:wyw24@sookmyung.ac.kr">wyw24@sookmyung.ac.kr</a>
        <a href="https://github.com/owonye">github.com/owonye</a>
      </div>
    </section>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState("about");

  const pages = {
    about: <AboutMe onOpenPortfolio={() => setCurrentPage("portfolio")} />,
    portfolio: <Portfolio activeFilter={activeFilter} setActiveFilter={setActiveFilter} />,
    awards: <Awards />,
    contact: <Contact />,
  };

  return (
    <>
      <Header
        activeFilter={activeFilter}
        currentPage={currentPage}
        setActiveFilter={setActiveFilter}
        setCurrentPage={setCurrentPage}
      />
      <main className="screen-stage">
        {pages[currentPage]}
      </main>
      <footer className="site-footer">
        <span>Yeowon Jeon</span>
        <span>(c) {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
