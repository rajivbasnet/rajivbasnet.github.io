import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import content from "../data/siteContent.json";
import profilepic from "./images/profilepic.jpeg";

const BEYOND = "/beyond-engineering";

// Sections of the home page.
const sections = [
  { id: "aboutme", label: "About" },
  { id: "contact", label: "Contact" },
];

// Standalone pages; `children` are sections of that page, listed in the menu
// only while the page (or one of its sub-pages) is open.
const pages = [
  {
    to: BEYOND,
    label: content.beyond.label,
    children: [
      { id: "songwriting", label: content.beyond.subheading },
      { id: "travel", label: content.travel.heading },
    ],
  },
];

/** Id of the last section whose top passed 35% of the viewport (last one at page bottom). */
function currentSection(ids, fallback) {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) return ids[ids.length - 1];
  let current = fallback;
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
  });
  return current;
}

function Sidebar() {
  const { profile, contact } = content;
  const { pathname } = useLocation();

  const activePage = pages.find((p) => pathname.startsWith(p.to));
  const onHome = !activePage;
  const onPageIndex = !!activePage && pathname.replace(/\/$/, "") === activePage.to;

  // Which ids to watch on the current route (none on song sub-pages).
  const watched = onHome ? sections.map((s) => s.id) : onPageIndex ? activePage.children.map((c) => c.id) : [];
  const watchKey = watched.join(",");
  const fallback = onHome ? sections[0].id : null;

  const [active, setActive] = useState(fallback);

  useEffect(() => {
    const ids = watchKey ? watchKey.split(",") : [];
    if (ids.length === 0) {
      setActive(null);
      return undefined;
    }
    let frame = null;
    const update = () => {
      frame = null;
      setActive(currentSection(ids, fallback));
    };
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [watchKey, fallback]);

  // If we're already on the target route, scroll smoothly instead of navigating.
  const scrollTo = (e, id, alreadyThere) => {
    if (!alreadyThere) return; // router navigates, Layout scrolls to the section
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <header className="sidebar">
      <div>
        {onHome && (
          <img src={profilepic} alt={`Portrait of ${profile.name}`} className="sidebar-photo" width="116" height="116" />
        )}
        <h1 className="sidebar-name"><Link to="/">{profile.name}</Link></h1>
        <p className="sidebar-title">{profile.title}</p>
        <p className="sidebar-tagline">{profile.tagline}</p>

        <nav aria-label="Sections" className="sidebar-nav">
          <ul>
            {sections.map(({ id, label }) => {
              const isActive = onHome && active === id;
              return (
                <li key={id}>
                  <Link
                    to="/"
                    state={{ scrollTo: id }}
                    className={isActive ? "active" : ""}
                    aria-current={isActive ? "true" : undefined}
                    onClick={(e) => scrollTo(e, id, onHome)}
                  >
                    <span className="nav-line" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              );
            })}

            {pages.map((page) => {
              const isOpen = activePage === page;
              return (
                <React.Fragment key={page.to}>
                  <li>
                    <Link
                      to={page.to}
                      className={isOpen ? "active" : ""}
                      aria-current={isOpen ? "page" : undefined}
                      aria-expanded={isOpen}
                    >
                      <span className="nav-line" aria-hidden="true" />
                      {page.label}
                    </Link>
                  </li>
                  {isOpen &&
                    page.children.map(({ id, label }) => (
                      <li key={id} className="sub">
                        <Link
                          to={page.to}
                          state={{ scrollTo: id }}
                          className={active === id ? "active" : ""}
                          aria-current={active === id ? "true" : undefined}
                          onClick={(e) => scrollTo(e, id, onPageIndex)}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="sidebar-social" aria-label="Social links">
        {contact.socials.map((s) => (
          <li key={s.id}>
            <a href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.title}>
              <i className={s.icon_class} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Sidebar;
