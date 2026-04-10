import { useState, useEffect, useRef } from "react";
import "./styles/Work.css";

type Tag = "UIUX" | "Web Design" | "Graphic" | "VFX";

interface Project {
  title: string;
  tags: Tag[];
  description: string;
  year: string;
  image?: string;
  link?: string;
}

const FILTERS: ("All" | Tag)[] = ["All", "UIUX", "Web Design", "Graphic", "VFX"];

const projects: Project[] = [
  {
    title: "Sonic the Hedgehog 2",
    tags: ["VFX"],
    description: "Grooming Artist — Digital Character Appearance Refinement at MPC Film",
    year: "2022",
  },
  {
    title: "House of the Dragon",
    tags: ["VFX"],
    description: "Grooming Artist — Creature & Character Hair Grooms at MPC Film",
    year: "2022",
  },
  {
    title: "Mufasa: The Lion King",
    tags: ["VFX"],
    description: "Grooming Artist — Photorealistic Fur & Feathers at MPC Film",
    year: "2024",
  },
  {
    title: "Brand Identity System",
    tags: ["Graphic", "UIUX"],
    description: "Full brand identity design: logo, typography, colour palette & guidelines",
    year: "2023",
  },
  {
    title: "Immersive Portfolio",
    tags: ["Web Design", "UIUX"],
    description: "3D interactive portfolio built with Three.js and GSAP animations",
    year: "2024",
  },
  {
    title: "Dashboard UI Kit",
    tags: ["UIUX", "Web Design"],
    description: "Analytics dashboard design system with 60+ reusable components",
    year: "2023",
  },
  {
    title: "Chefcart Branding",
    tags: ["Web Design", "Graphic"],
    description: "Visual Storytelling for Chefcart",
    year: "2024",
    image: "/images/ccbanner.png?v=2",
    link: "https://dribbble.com/shots/27268158-Visual-Storytelling-for-Chefcart?utm_source=Clipboard_Shot&utm_campaign=vineethj1998&utm_content=Visual%20Storytelling%20for%20Chefcart&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=vineethj1998&utm_content=Visual%20Storytelling%20for%20Chefcart&utm_medium=Social_Share",
  },
  {
    title: "QACircle Branding",
    tags: ["Web Design", "Graphic"],
    description: "QACircle Branding & Visual Design",
    year: "2024",
    image: "/images/qacbanner.png?v=2",
    link: "https://dribbble.com/shots/27268382-QACircle-Technology-Recruitment-Tech-Training?utm_source=Clipboard_Shot&utm_campaign=vineethj1998&utm_content=QACircle%20Technology%20%7C%20Recruitment%20%26%20Tech%20Training&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=vineethj1998&utm_content=QACircle%20Technology%20%7C%20Recruitment%20%26%20Tech%20Training&utm_medium=Social_Share",
  },
  {
    title: "IMDB Vineeth Jawalkar",
    tags: ["VFX"],
    description: "Previous VFX Works",
    year: "2024",
    image: "/images/imdb.png",
    link: "https://www.imdb.com/name/nm13568799/",
  },
];

// Assign a deterministic gradient to each card based on its index
const cardGradients = [
  "linear-gradient(135deg, #1a2a3a 0%, #0d1f2d 100%)",
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  "linear-gradient(135deg, #0d2137 0%, #1b1b2f 100%)",
  "linear-gradient(135deg, #1c1c2e 0%, #2a1b2e 100%)",
  "linear-gradient(135deg, #0e2233 0%, #1a2a1a 100%)",
  "linear-gradient(135deg, #1f1c2c 0%, #928dab 40%, #1f1c2c 100%)",
  "linear-gradient(135deg, #0a0e17 0%, #1a1a3a 100%)",
  "linear-gradient(135deg, #12191f 0%, #262626 100%)",
  "linear-gradient(135deg, #1a1a1a 0%, #3d2b1f 100%)",
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | Tag>("All");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);
  const [animating, setAnimating] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter logic with fade animation
  const handleFilter = (filter: "All" | Tag) => {
    if (filter === activeFilter) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveFilter(filter);
      const filtered =
        filter === "All"
          ? projects
          : projects.filter((p) => p.tags.includes(filter));
      setVisibleProjects(filtered);
      setAnimating(false);
    }, 220);
  };

  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    const targets = [headingRef.current, filtersRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("work-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((t) => t && observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Stagger reveal for grid cards whenever visibleProjects changes
  useEffect(() => {
    if (!gridRef.current || animating) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>(".work-card");
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(32px)";
      const timeout = setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 60 + i * 80);
      return () => clearTimeout(timeout);
    });
  }, [visibleProjects, animating]);

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">

        {/* ── Heading ── */}
        <div className="work-heading work-reveal-init" ref={headingRef}>
          <h2 className="work-title">MY <span>WORK</span></h2>
          <p className="work-subtitle">Selected projects across disciplines</p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="work-filters work-reveal-init" ref={filtersRef}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`work-filter-btn${activeFilter === f ? " work-filter-active" : ""}`}
              onClick={() => handleFilter(f)}
              data-cursor="disable"
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div
          className={`work-grid${animating ? " work-grid-fading" : ""}`}
          ref={gridRef}
        >
          {visibleProjects.map((project) => {
            const originalIndex = projects.indexOf(project);
            return (
              <article
                className={`work-card${project.link ? " work-card-linked" : ""}`}
                key={`${project.title}-${activeFilter}`}
                onClick={() => project.link && window.open(project.link, "_blank")}
              >
                {/* Thumbnail */}
                <div
                  className="work-card-thumb"
                  style={
                    project.image
                      ? {
                          backgroundImage: `url('${project.image}')`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }
                      : {
                          background: cardGradients[originalIndex % cardGradients.length],
                        }
                  }
                >
                  {/* Show placeholder icon only if no custom image */}
                  {!project.image && (
                    <div className="work-thumb-placeholder">
                      <svg
                        className="work-thumb-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="work-card-overlay">
                    <div className="work-overlay-content">
                      {project.link && (
                        <span className="work-view-project">
                          View Project
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Year badge */}
                  <span className="work-year-badge">{project.year}</span>
                </div>

                {/* Card body */}
                <div className="work-card-body">
                  <h3 className="work-card-title">{project.title}</h3>
                  <p className="work-card-desc">{project.description}</p>
                  <div className="work-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="work-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}

          {/* Empty state */}
          {visibleProjects.length === 0 && (
            <div className="work-empty">
              <p>No projects found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
