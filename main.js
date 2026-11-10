/* Construye el sitio a partir de data.js. Normalmente no necesitas tocar este archivo. */
(() => {
  const D = PORTFOLIO;

  const UI = {
    es: {
      nav: { about: "Sobre mí", experience: "Experiencia", publications: "Publicaciones", projects: "Proyectos", awards: "Premios", skills: "Habilidades", languages: "Idiomas", contact: "Contacto" },
      available: "Disponible para nuevas oportunidades",
      contactMe: "Contáctame", seeProjects: "Ver proyectos", downloadCv: "Descargar CV",
      aboutKicker: "Sobre mí", aboutTitle: "Un poco de mí",
      expKicker: "Trayectoria", expTitle: "Experiencia laboral",
      pubKicker: "Investigación", pubTitle: "Publicaciones", readPub: "Leer en Springer ↗",
      projKicker: "Portafolio", projTitle: "Proyectos destacados",
      demo: "Ver demo ↗", code: "Código ↗",
      awardsKicker: "Reconocimientos", awardsTitle: "Premios y logros",
      skillsKicker: "Stack", skillsTitle: "Habilidades",
      langKicker: "Comunicación", langTitle: "Idiomas",
      eduKicker: "Formación", eduTitle: "Educación y certificaciones",
      testKicker: "Referencias", testTitle: "Lo que dicen de mí",
      contactKicker: "Contacto", contactTitle: "¿Trabajamos juntos?",
      contactText: "Estoy abierto a nuevas oportunidades, colaboraciones o simplemente a conversar. Escríbeme y te responderé pronto.",
      sendEmail: "Enviar correo", rights: "Hecho con cariño.",
    },
    en: {
      nav: { about: "About", experience: "Experience", publications: "Publications", projects: "Projects", awards: "Awards", skills: "Skills", languages: "Languages", contact: "Contact" },
      available: "Open to new opportunities",
      contactMe: "Contact me", seeProjects: "See projects", downloadCv: "Download CV",
      aboutKicker: "About", aboutTitle: "A bit about me",
      expKicker: "Career", expTitle: "Work experience",
      pubKicker: "Research", pubTitle: "Publications", readPub: "Read on Springer ↗",
      projKicker: "Portfolio", projTitle: "Featured projects",
      demo: "Live demo ↗", code: "Source ↗",
      awardsKicker: "Recognition", awardsTitle: "Awards & achievements",
      skillsKicker: "Stack", skillsTitle: "Skills",
      langKicker: "Communication", langTitle: "Spoken languages",
      eduKicker: "Background", eduTitle: "Education & certifications",
      testKicker: "References", testTitle: "What people say",
      contactKicker: "Contact", contactTitle: "Let's work together",
      contactText: "I'm open to new opportunities, collaborations or just a chat. Drop me a line and I'll get back to you soon.",
      sendEmail: "Send email", rights: "Made with care.",
    },
  };

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.4L6.45 22H3.34l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 18.1h1.73L7.27 3.8H5.42L17.8 20.1Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  };

  let lang = store.get("lang") || (navigator.language || "es").slice(0, 2);
  if (!UI[lang]) lang = "es";

  const t = (v) => (v == null ? "" : typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.es ?? "") : v);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const has = (arr) => Array.isArray(arr) && arr.length > 0;
  const head = (kicker, title) => `<p class="section-title">${kicker}</p><h2>${title}</h2>`;
  const tags = (list) => (has(list) ? `<div class="tags">${list.map((x) => `<span class="tag">${esc(t(x))}</span>`).join("")}</div>` : "");
  const set = (id, html) => {
    const el = document.getElementById(id);
    el.innerHTML = html;
    el.hidden = !html;
  };

  function render() {
    const u = UI[lang];
    const m = D.meta;
    document.documentElement.lang = lang;
    document.title = `${m.name} — ${t(m.role)}`;
    document.getElementById("lang-toggle").textContent = lang === "es" ? "EN" : "ES";

    document.getElementById("brand").textContent = m.name;

    const navMap = { about: D.about, experience: D.experience, publications: D.publications, projects: D.projects, awards: D.awards, skills: D.skills, languages: D.languages, contact: D.contact };
    document.getElementById("nav-links").innerHTML = Object.entries(navMap)
      .filter(([, v]) => v && (!Array.isArray(v) || v.length))
      .map(([k]) => `<a href="#${k}">${u.nav[k]}</a>`).join("");

    // Hero
    const socials = (D.contact.links || []).map((l) =>
      `<a href="${esc(l.url)}" target="_blank" rel="noopener" aria-label="${esc(l.label)}" title="${esc(l.label)}">${ICONS[l.icon] || ICONS.link}</a>`
    ).join("") + (D.contact.email ? `<a href="mailto:${esc(D.contact.email)}" aria-label="Email" title="Email">${ICONS.mail}</a>` : "");
    const avatar = m.photo
      ? `<img class="avatar" src="${esc(m.photo)}" alt="${esc(m.name)}" />`
      : `<div class="avatar" aria-hidden="true">${esc(m.initials || m.name[0])}</div>`;
    set("hero", `
      <div>
        ${m.available ? `<span class="badge"><span class="dot"></span>${u.available}</span>` : ""}
        <h1>${esc(m.name)}</h1>
        <p class="role">${esc(t(m.role))}</p>
        <p class="tagline">${esc(t(m.tagline))}</p>
        ${m.location ? `<p class="loc">📍 ${esc(t(m.location))}</p>` : ""}
        <div class="hero-cta">
          <a class="btn primary" href="#contact">${u.contactMe}</a>
          <a class="btn" href="#projects">${u.seeProjects}</a>
          ${m.cv ? `<a class="btn" href="${esc(m.cv)}" download>⬇ ${u.downloadCv}</a>` : ""}
        </div>
        <div class="socials">${socials}</div>
      </div>
      ${avatar}
      ${has(D.stats) ? `<div class="stats">${D.stats.map((s) => `<div class="stat reveal"><b>${esc(s.value)}</b><span>${esc(t(s.label))}</span></div>`).join("")}</div>` : ""}
    `);

    const aboutPhotos = has(D.aboutPhotos) ? `<div class="about-photos">${D.aboutPhotos.map((p) =>
      `<img class="reveal" src="${esc(p.src)}" alt="${esc(t(p.alt))}" loading="lazy"${p.position ? ` style="object-position:${esc(p.position)}"` : ""} />`).join("")}</div>` : "";
    set("about", D.about ? head(u.aboutKicker, u.aboutTitle) + `<div class="about${aboutPhotos ? " with-photos" : ""}"><p class="about-text">${esc(t(D.about))}</p>${aboutPhotos}</div>` : "");

    set("experience", has(D.experience) ? head(u.expKicker, u.expTitle) + `<div class="timeline">${D.experience.map((j) => `
      <div class="job reveal">
        <div class="period">${esc(t(j.period))}</div>
        <div class="card">
          <h3>${esc(t(j.role))}</h3>
          <div class="company">${j.url ? `<a href="${esc(j.url)}" target="_blank" rel="noopener">${esc(t(j.company))} ↗</a>` : esc(t(j.company))}</div>
          ${has(t(j.bullets)) ? `<ul>${t(j.bullets).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
          ${tags(j.tags)}
        </div>
      </div>`).join("")}</div>` : "");

    set("publications", has(D.publications) ? head(u.pubKicker, u.pubTitle) + D.publications.map((p) => {
      const url = p.url || (p.doi ? `https://doi.org/${p.doi}` : "");
      return `
      <article class="card publication reveal">
        <div class="pub-type">📄 ${esc(t(p.type))}${p.year ? ` · ${esc(p.year)}` : ""}</div>
        <h3>${url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(t(p.title))}</a>` : esc(t(p.title))}</h3>
        ${p.authors ? `<p class="pub-authors">${esc(p.authors)}</p>` : ""}
        ${p.venue ? `<p class="pub-venue">${esc(t(p.venue))}</p>` : ""}
        ${t(p.description) ? `<p class="pub-desc">${esc(t(p.description))}</p>` : ""}
        ${has(p.highlights) ? `<div class="pub-highlights">${p.highlights.map((h) => `<div><b>${esc(h.value)}</b><span>${esc(t(h.label))}</span></div>`).join("")}</div>` : ""}
        ${tags(p.tags)}
        ${url ? `<div class="pub-links"><a class="btn primary" href="${esc(url)}" target="_blank" rel="noopener">${u.readPub}</a>${p.doi ? `<span class="doi">DOI: <a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">${esc(p.doi)}</a></span>` : ""}</div>` : ""}
      </article>`;
    }).join("") : "");

    set("projects", has(D.projects) ? head(u.projKicker, u.projTitle) + `<div class="projects">${D.projects.map((p) => `
      <article class="card project reveal ${p.featured ? "featured" : ""}">
        ${p.image ? `<div class="thumb"><img src="${esc(p.image)}" alt="${esc(t(p.title))}" loading="lazy" /></div>` : ""}
        <div class="body">
          <h3>${esc(t(p.title))}</h3>
          <p>${esc(t(p.description))}</p>
          ${tags(p.tags)}
          ${p.demo || p.code ? `<div class="links">
            ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">${u.demo}</a>` : ""}
            ${p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">${u.code}</a>` : ""}
          </div>` : ""}
        </div>
      </article>`).join("")}</div>` : "");

    set("awards", has(D.awards) ? head(u.awardsKicker, u.awardsTitle) + `<div class="grid-2">${D.awards.map((a) => `
      <div class="card award reveal${a.image ? " has-img" : ""}">
        ${a.image ? `<img class="award-img" src="${esc(a.image)}" alt="${esc(t(a.title))}" loading="lazy" />` : ""}
        <div class="icon">🏆</div>
        <div>
          <h3>${esc(t(a.title))}</h3>
          <div class="meta">${esc(t(a.issuer))}${a.year ? ` · ${esc(a.year)}` : ""}</div>
          ${t(a.description) ? `<p>${esc(t(a.description))}</p>` : ""}
        </div>
      </div>`).join("")}</div>` : "");

    set("skills", has(D.skills) ? head(u.skillsKicker, u.skillsTitle) + `<div class="grid-2">${D.skills.map((g) => `
      <div class="card skill-group reveal"><h3>${esc(t(g.group))}</h3>${tags(g.items)}</div>`).join("")}</div>` : "");

    set("languages", has(D.languages) ? head(u.langKicker, u.langTitle) + `<div class="grid-2">${D.languages.map((l) => `
      <div class="card lang reveal">
        <div><h3>${esc(t(l.name))}</h3><div class="meta">${esc(t(l.label))}</div></div>
        <div class="dots" aria-label="${l.level}/5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= l.level ? "on" : ""}"></i>`).join("")}</div>
      </div>`).join("")}</div>` : "");

    const edu = [
      ...(D.education || []).map((e) => `<div class="card award reveal"><div class="icon">🎓</div><div><h3>${esc(t(e.degree))}</h3><div class="meta">${esc(t(e.school))} · ${esc(t(e.period))}</div></div></div>`),
      ...(D.certifications || []).map((c) => `<div class="card award reveal"><div class="icon">📜</div><div><h3>${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(t(c.name))} ↗</a>` : esc(t(c.name))}</h3><div class="meta">${esc(t(c.issuer))}${c.year ? ` · ${esc(c.year)}` : ""}</div></div></div>`),
    ];
    set("education", edu.length ? head(u.eduKicker, u.eduTitle) + `<div class="grid-2">${edu.join("")}</div>` : "");

    set("testimonials", has(D.testimonials) ? head(u.testKicker, u.testTitle) + `<div class="grid-2">${D.testimonials.map((q) => `
      <figure class="card quote reveal"><p>“${esc(t(q.quote))}”</p><figcaption class="who">${esc(q.author)}<span>${esc(t(q.role))}</span></figcaption></figure>`).join("")}</div>` : "");

    set("contact", `<div class="card contact-card reveal">
      ${head(u.contactKicker, u.contactTitle)}
      <p>${u.contactText}</p>
      <div class="hero-cta">
        ${D.contact.email ? `<a class="btn primary" href="mailto:${esc(D.contact.email)}">✉ ${u.sendEmail}</a>` : ""}
        ${(D.contact.links || []).map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}
      </div>
    </div>`);

    set("footer", `© ${new Date().getFullYear()} ${esc(m.name)}. ${u.rights}`);
    observe();
  }

  // Animación al hacer scroll
  let io;
  function observe() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    io?.disconnect();
    io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  // Tema claro/oscuro
  const themeBtn = document.getElementById("theme-toggle");
  const applyTheme = (th) => {
    document.documentElement.dataset.theme = th;
    themeBtn.textContent = th === "dark" ? "☀" : "☾";
  };
  applyTheme(store.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  themeBtn.onclick = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next); store.set("theme", next);
  };

  document.getElementById("lang-toggle").onclick = () => {
    lang = lang === "es" ? "en" : "es"; store.set("lang", lang); render();
  };

  const links = document.getElementById("nav-links");
  document.getElementById("menu-toggle").onclick = () => links.classList.toggle("open");
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

  render();
})();
