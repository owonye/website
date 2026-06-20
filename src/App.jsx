import heroImage from "../assets/selfie.png";
import workImage from "../assets/hero-workspace.png";
import projectImage from "../assets/hero-workspace.png";
import researchImage from "../assets/hero-workspace.png";
import awardsImage from "../assets/selfie.png";

const categories = [
  {
    id: "work",
    title: "Work",
    number: "01",
    image: workImage,
    alt: "Work preview",
    description: "Experience in building scalable systems and delivering thoughtful solutions.",
    link: "View Work",
  },
  {
    id: "projects",
    title: "Projects",
    number: "02",
    image: projectImage,
    alt: "Projects preview",
    description: "A selection of AI and backend projects from idea to real-world application.",
    link: "View Projects",
  },
  {
    id: "research",
    title: "Research",
    number: "03",
    image: researchImage,
    alt: "Research preview",
    description: "Exploring retrieval, reasoning, and evaluation for trustworthy AI systems.",
    link: "View Research",
  },
  {
    id: "awards",
    title: "Awards",
    number: "04",
    image: awardsImage,
    alt: "Awards preview",
    description: "Recognition for academic excellence and impactful contributions.",
    link: "View Awards",
  },
];

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <a href="#about" className="logo">
          YEOWON JEON
        </a>

        <nav className="site-nav">
          <a href="#about">About Me</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="script-letter">Y</span>
              <span className="name">YEOWON</span>
              <span className="surname">JEON</span>
            </h1>

            <p className="hero-subtitle">AI Engineering Student</p>

            <p className="hero-description">
              I build research-driven systems at the intersection of language, intelligence, and human
              needs. Focused on RAG, backend systems, and human-centered AI that create real impact.
            </p>

            <a href="#portfolio" className="hero-link">
              <span>Explore</span>
              <span>→</span>
            </a>
          </div>

          <div className="hero-image">
            <img src={heroImage} alt="Yeowon Jeon portrait" />
            <p className="hero-note">Designing intelligent systems with rigor, empathy, and curiosity.</p>
          </div>
        </section>

        <section className="category-grid" id="portfolio">
          {categories.map((category) => (
            <article className="category-card" id={category.id} key={category.id}>
              <div className="category-head">
                <h2 className="category-title">{category.title}</h2>
                <span className="category-number">{category.number}</span>
              </div>

              <div className="category-image">
                <img src={category.image} alt={category.alt} />
              </div>

              <p className="category-description">{category.description}</p>

              <a href={`#${category.id}`} className="category-link">
                <span>{category.link}</span>
                <span>→</span>
              </a>
            </article>
          ))}
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-monogram">
          <span>Yj</span>
        </div>

        <p className="footer-quote">Engineering intelligence. Elevating human potential.</p>

        <p className="footer-links">
          <a href="mailto:wyw24@sookmyung.ac.kr">wyw24@sookmyung.ac.kr</a>
          <span>/</span>
          <a href="https://github.com/owonye">github.com/owonye</a>
        </p>

        <p className="copyright">© 2026 Yeowon Jeon</p>
      </footer>
    </div>
  );
}
