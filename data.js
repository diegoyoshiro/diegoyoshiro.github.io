/* ============================================================
   TU INFORMACIÓN VA AQUÍ
   ------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar.
   - Los textos pueden ser una cadena simple: "Hola"
     o bilingües: { es: "Hola", en: "Hello" }
   - Si borras una sección completa (ej. awards: []), desaparece del sitio.
   - Busca "TODO" para ver lo que falta completar.
   ============================================================ */

const PORTFOLIO = {
  meta: {
    name: "Diego Dongo",
    initials: "DD",
    role: { es: "Ingeniero Informático y de Sistemas", en: "Computer & Systems Engineer" },
    location: { es: "Cusco, Perú", en: "Cusco, Peru" },
    photo: "assets/Profile.png", // si está vacío se muestran tus iniciales
    cv: "",    // TODO: ej. "assets/cv.pdf" — si está vacío no aparece el botón
    available: true,
    tagline: {
      es: "Especializado en Inteligencia Artificial, NLP y desarrollo de software. Investigador publicado en Springer y líder de equipos de ingeniería.",
      en: "Specializing in Artificial Intelligence, NLP and software development. Springer-published researcher and engineering team lead.",
    },
  },

  contact: {
    email: "dongoyoshiro@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/diego-yoshiro-dongo/", icon: "linkedin" },
      // TODO: { label: "GitHub", url: "https://github.com/tu-usuario", icon: "github" },
    ],
  },

  about: {
    es: "Soy Ingeniero Informático y de Sistemas egresado de la Universidad Nacional de San Antonio Abad del Cusco, especializado en Inteligencia Artificial, NLP y desarrollo de software. Investigué la detección de noticias falsas en el contexto peruano con machine learning, trabajo que presenté en SmartTech-IC 2024 (Quito, Ecuador) y que fue publicado por Springer. Tengo experiencia como Tech Lead frontend y desarrollando soluciones para clientes como BBVA y Telefónica. Me interesa contribuir a la Seguridad de la IA (AI Safety) y su gobernanza para mitigar riesgos sociales. Fuera del código, compito en taekwondo a nivel nacional.",
    en: "I'm a Computer and Systems Engineer from the National University of San Antonio Abad in Cusco, specializing in Artificial Intelligence, NLP and software development. I researched fake news detection in the Peruvian context using machine learning, presented the work at SmartTech-IC 2024 (Quito, Ecuador) and published it with Springer. I've worked as a frontend Tech Lead and built solutions for clients such as BBVA and Telefónica. I'm interested in advancing technical AI Safety and Governance to mitigate societal risks. Outside of code, I compete in taekwondo at the national level.",
  },

  // Fotos junto al texto "Sobre mí". "position" ajusta el recorte (ej. "center 30%"). Lista vacía = sin fotos.
  aboutPhotos: [
    { src: "assets/About%20me.jpg", alt: { es: "Diego en traje formal", en: "Diego in a formal suit" }, position: "center 40%" },
    { src: "assets/About%20me%202.jpg", alt: { es: "Diego dando una charla", en: "Diego giving a talk" }, position: "55% center" },
  ],

  stats: [
    { value: "4+", label: { es: "años de experiencia", en: "years of experience" } },
    { value: "3", label: { es: "idiomas", en: "languages" } },
    { value: "1", label: { es: "publicación científica", en: "scientific publication" } },
    { value: "15+", label: { es: "certificaciones y cursos", en: "certifications & courses" } },
  ],

  experience: [
    {
      role: { es: "Cofundador · Desarrollo y Marketing", en: "Co-founder · Development & Marketing" },
      company: "EtheriaDev",
      url: "",
      period: { es: "Actualidad", en: "Present" }, // TODO (opcional): agrega el año de inicio, ej. "2025 — Presente"
      bullets: {
        es: ["Cofundé EtheriaDev, donde lidero el desarrollo de software y la estrategia de marketing."],
        en: ["Co-founded EtheriaDev, where I lead software development and marketing strategy."],
      },
      tags: [{ es: "Emprendimiento", en: "Entrepreneurship" }, { es: "Desarrollo de software", en: "Software development" }, "Marketing"],
    },
    {
      role: "Rising Software Engineer",
      company: "NTT DATA",
      url: "",
      period: { es: "Abr 2024 — Ago 2026", en: "Apr 2024 — Aug 2026" },
      bullets: {
        es: [
          "BBVA – Plataforma de Pago Anticipado y Seguros: desarrollo en Cells de la solución en los canales Senda, Gema PJ y Gema PNN.",
          "BBVA – Plataforma de créditos FastCash: lideré al equipo en la migración frontend (Cells, Senda) de los flujos de Pago, Cancelación y Desembolso de crédito empresarial con componentes Spherica y soporte multicanal; implementé el etiquetado y la analítica.",
          "Telefónica – Plataforma de Consultores: funcionalidades en Angular para los módulos de Ajustes y Descuentos, plantillas de correo y logging con New Relic; propuse mejoras para el rendimiento del equipo.",
        ],
        en: [
          "BBVA – Early Payment & Insurance Platform: Cells development of the solution across the Senda, Gema PJ and Gema PNN channels.",
          "BBVA – FastCash Credit Platform: led the team migrating the business-credit Payment, Cancellation and Disbursement flows to Cells (Senda) with Spherica components and multi-channel support; implemented tagging and analytics.",
          "Telefónica – Consultants Platform: built Angular features for the Adjustments and Discounts modules, designed email templates and added New Relic logging; proposed ideas to improve team performance.",
        ],
      },
      tags: ["Cells", "Angular", "TypeScript", "New Relic", "Unit testing"],
    },
    {
      role: "Frontend Tech Lead",
      company: "Smart Cities Perú",
      url: "",
      period: { es: "Jul 2022 — Dic 2023", en: "Jul 2022 — Dec 2023" },
      bullets: {
        es: [
          "Lideré el equipo frontend en Angular del nuevo sistema de gestión de citas de la clínica MacSalud (Cusco).",
          "Migré a Angular el antiguo sistema de venta de boletos de Consettur, optimizando la venta de tickets para la ciudadela de Machu Picchu.",
          "Análisis de requerimientos y documentación de proyectos.",
        ],
        en: [
          "Led the Angular frontend team building a new appointment management system for the MacSalud clinic (Cusco).",
          "Migrated Consettur's legacy ticketing system to Angular, optimizing ticket sales for the Machu Picchu citadel.",
          "Requirements analysis and project documentation.",
        ],
      },
      tags: ["Angular", "TypeScript", { es: "Liderazgo técnico", en: "Tech leadership" }],
    },
    {
      role: { es: "Desarrollador y Asistente de Investigación", en: "Developer & Research Assistant" },
      company: { es: "Centro de Investigación en Energía y Atmósfera (CIEA) – UNSAAC", en: "Energy and Atmosphere Research Center (CIEA) – UNSAAC" },
      url: "",
      period: { es: "Ene 2021 — Jul 2021", en: "Jan 2021 — Jul 2021" },
      bullets: {
        es: ["Desarrollé software en Python para automatizar el procesamiento de los datos monitoreados por el CIEA, optimizando el flujo de trabajo."],
        en: ["Built Python software to automate the processing of data monitored by the CIEA, streamlining the workflow."],
      },
      tags: ["Python", { es: "Análisis de datos", en: "Data analysis" }],
    },
  ],

  projects: [
    {
      title: {
        es: "Detección de noticias falsas con Machine Learning",
        en: "Fake News Detection with Machine Learning",
      },
      description: {
        es: "Modelo para detectar noticias falsas en el contexto peruano con Naive Bayes y Support Vector Machine, entrenado con un dataset propio construido con la API de Twitter. Alcanzó 95.40% de precisión con Naive Bayes. Nació como mi tesis (Fictus Detector), se presentó en SmartTech-IC 2024 y fue publicado por Springer (CCIS vol. 2392).",
        en: "Model to detect fake news in the Peruvian context using Naive Bayes and Support Vector Machines, trained on a custom dataset collected via the Twitter API. Reached 95.40% accuracy with Naive Bayes. Started as my thesis (Fictus Detector), presented at SmartTech-IC 2024 and published by Springer (CCIS vol. 2392).",
      },
      image: "",
      tags: ["Machine Learning", "NLP", "Python", "Scikit-learn", "NLTK"],
      demo: "https://link.springer.com/chapter/10.1007/978-3-031-98287-3_24",
      code: "",
      featured: true,
    },
    {
      title: { es: "Sistema de venta de boletos – Machu Picchu", en: "Ticketing System – Machu Picchu" },
      description: {
        es: "Migración frontend en Angular del sistema de venta de boletos de Consettur, optimizando el flujo de compra de tickets para la ciudadela de Machu Picchu.",
        en: "Angular frontend migration of Consettur's ticketing system, optimizing the ticket purchase flow for the Machu Picchu citadel.",
      },
      image: "",
      tags: ["Angular", "TypeScript"],
      demo: "",
      code: "",
    },
    // Oculto por ahora — quita los "//" para mostrarlo cuando tengas la descripción:
    // {
    //   title: { es: "Solución de Business Intelligence", en: "Business Intelligence Solution" },
    //   description: {
    //     es: "Proyecto final de la especialización en BI de Data Growth. Describe qué datos usaste, qué preguntas de negocio respondía y qué herramientas (Power BI, SQL…).",
    //     en: "Capstone project for the Data Growth BI specialization. Describe the data, the business questions it answered and the tools used.",
    //   },
    //   image: "",
    //   tags: ["Business Intelligence"],
    //   demo: "",
    //   code: "",
    // },
    // TODO: agrega más proyectos (web, Angular, etc.)
  ],

  awards: [
    {
      title: { es: "1er puesto — Campeonato Nacional Descentralizado Cusco (Poomsae)", en: "1st place — National Decentralized Championship Cusco (Poomsae)" },
      issuer: { es: "Federación Deportiva Peruana de Taekwondo", en: "Peruvian Taekwondo Federation" },
      year: "2026",
      description: { es: "División Colores – Senior I (U30).", en: "Color belt division – Senior I (U30)." },
    },
    {
      title: { es: "3er puesto — Campeonato Nacional Descentralizado Cusco (Kyorugi)", en: "3rd place — National Decentralized Championship Cusco (Kyorugi)" },
      issuer: { es: "Federación Deportiva Peruana de Taekwondo", en: "Peruvian Taekwondo Federation" },
      year: "2026",
      description: { es: "División Colores – Senior M-74 kg.", en: "Color belt division – Senior M-74 kg." },
      image: "assets/Taekwondo.jpg",
    },
    {
      title: { es: "Ponente — SmartTech-IC 2024", en: "Speaker — SmartTech-IC 2024" },
      issuer: { es: "Conferencia internacional, Quito – Ecuador", en: "International conference, Quito – Ecuador" },
      year: "2024",
      description: { es: "Presenté mi investigación sobre detección de noticias falsas con machine learning en el contexto peruano.", en: "Presented my research on machine learning–based fake news detection in the Peruvian context." },
    },
    {
      title: { es: "Certificado de Reconocimiento", en: "Certificate of Recognition" },
      issuer: "Telefónica del Perú",
      year: "2024",
      description: "",
    },
    {
      title: { es: "CUSCONTEST XIV — 1er puesto, categoría Avanzado", en: "CUSCONTEST XIV — 1st place, Advanced category" },
      issuer: "ACM Chapter Cusco",
      year: "2018",
      description: { es: "Concurso regional de programación competitiva con ~70 participantes.", en: "Regional competitive programming contest with ~70 participants." },
    },
  ],

  skills: [
    { group: { es: "Lenguajes", en: "Languages" }, items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "Dart", "HTML / CSS"] },
    { group: { es: "Frontend y móvil", en: "Frontend & mobile" }, items: ["Angular", "Cells", "Ionic", "Flutter"] },
    { group: { es: "IA y ciencia de datos", en: "AI & data science" }, items: ["Machine Learning", "NLP", "Scikit-learn", "NLTK", "Pandas", "NumPy", "Business Intelligence"] },
    { group: { es: "Backend y nube", en: "Backend & cloud" }, items: ["Spring Boot", "Azure", "Google Cloud Platform"] },
    { group: { es: "Herramientas", en: "Tools" }, items: ["Git / GitHub", "GitLab", "Postman", "New Relic", "GitHub Copilot", "Google Colab"] },
    {
      group: { es: "Habilidades blandas", en: "Soft skills" },
      items: [
        { es: "Liderazgo", en: "Leadership" },
        { es: "Hablar en público", en: "Public speaking" },
        { es: "Investigación", en: "Research" },
        { es: "Pensamiento crítico", en: "Critical thinking" },
        { es: "Resolución de problemas", en: "Problem solving" },
        { es: "Trabajo en equipo", en: "Teamwork" },
        "Scrum",
      ],
    },
  ],

  languages: [
    { name: { es: "Español", en: "Spanish" }, level: 5, label: { es: "Nativo", en: "Native" } },
    { name: { es: "Inglés", en: "English" }, level: 4, label: { es: "Intermedio alto (B2) – TOEFL iBT", en: "Upper intermediate (B2) – TOEFL iBT" } },
    { name: { es: "Portugués", en: "Portuguese" }, level: 3, label: { es: "Intermedio (B1)", en: "Intermediate (B1)" } },  ],

  education: [
    {
      degree: { es: "Ingeniería Informática y de Sistemas", en: "B.Sc. Computer & Systems Engineering" },
      school: "Universidad Nacional de San Antonio Abad del Cusco",
      period: "2016 — 2023",
    },
  ],

  certifications: [
    { name: "Microsoft Certified: Azure AI Fundamentals (AI-900)", issuer: "Microsoft", year: "2026", url: "" },
    { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2026", url: "" },
    { name: { es: "Ciclo de vida del software", en: "Software Lifecycle" }, issuer: "AdAcademy", year: "2026", url: "" },
    { name: "Lab to Market", issuer: "Cayetano Investigation", year: "2026", url: "" },
    { name: "GitHub Copilot (GH-300)", issuer: "Microsoft", year: "2025", url: "" },
    { name: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", year: "2025", url: "" },
    { name: { es: "I Congreso Internacional de Ingeniería de Sistemas", en: "1st International Congress of Systems Engineering" }, issuer: { es: "Colegio de Ingenieros del Perú", en: "College of Engineers of Peru" }, year: "2024", url: "" },
    { name: { es: "Inteligencia Artificial: curso conmemorativo por los 90 años de la USP", en: "Artificial Intelligence: USP 90th anniversary course" }, issuer: "USP", year: "2024", url: "" },
    { name: "IV Seminario Internacional de Ciencia de Datos Aplicada a la Sociedad", issuer: "UNMSM", year: "2024", url: "" },
    { name: "IX Encuentro de Líderes Empresariales 2023", issuer: "Encuentro de Líderes Empresariales", year: "2023", url: "" },
    { name: { es: "Bootcamp en Ciencia de Datos", en: "Data Science Bootcamp" }, issuer: "Data Science Woman", year: "2023", url: "" },
    { name: "ELE Descentralizado Cusco", issuer: "CAENE Educación Ejecutiva", year: "2022", url: "" },
    { name: "Angular: De cero a experto", issuer: "Udemy", year: "2022", url: "" },
    { name: "Operador de Computadoras", issuer: "UNSAAC", year: "2021", url: "" },
  ],

  testimonials: [
    {
      quote: {
        es: "Diego fue uno de los integrantes más destacados de la especialización en Business Intelligence; realizó un excelente proyecto final. Ha demostrado dominar con mucha precisión herramientas de explotación de datos y entender el valor que se puede generar a las organizaciones, planteando soluciones y alternativas de crecimiento de negocio.",
        en: "Diego was one of the most outstanding members of the Business Intelligence specialization and delivered an excellent capstone project. He showed precise command of data tools and a clear understanding of the value they bring to organizations, proposing solutions and business growth alternatives.",
      },
      author: "Rodrigo Diógenes Jáuregui Márquez",
      role: { es: "Instructor de Business Intelligence, Data Growth", en: "Business Intelligence Instructor, Data Growth" },
    },
  ],
};
