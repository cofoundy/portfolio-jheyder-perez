export const siteConfig = {
  name: "Jheyder W. Perez Aguinaga",
  title: "Ingeniero Civil & Investigador",
  description:
    "Ingeniero Civil especializado en Evaluación Estructural y Gestión de Riesgos de Desastres. CEO de Toward Resilience Corp. Investigador visitante en Tohoku University. Docente en PUCP.",

  accentColor: "#0F4C5C",
  highlightColor: "#14919B",

  stats: [
    { value: "6+", label: "Publicaciones científicas" },
    { value: "21", label: "Instituciones evaluadas" },
    { value: "5+", label: "Años de experiencia" },
  ],

  tagline:
    "Especialista en Evaluación Estructural y Gestión de Riesgos de Desastres. Investigador visitante en Tohoku University, Japón. Doctorando en la Pontificia Universidad Católica de Chile.",

  social: {
    email: "jheyder.perez@gmail.com",
    linkedin: "https://www.linkedin.com/in/jheyderperez/",
    researchgate: "https://www.researchgate.net/profile/Jheyder-Perez-Aguinaga-2",
    whatsapp: "https://wa.me/51959066643",
    scholar: "https://scholar.google.com/citations?user=B-WX9P0AAAAJ&hl=es",
  },

  services: [
    {
      title: "Evaluación Estructural",
      description:
        "Evaluación integral de edificaciones existentes mediante ensayos no destructivos, potencial de corrosión y modelamiento estructural. Experiencia en colegios, hospitales, iglesias, edificios residenciales y proyectos mineros.",
      icon: "building",
    },
    {
      title: "Asesoría en Investigación",
      description:
        "Soporte en investigación académica en gestión de riesgos naturales, resiliencia comunitaria, modelamiento basado en agentes y evacuación frente a tsunamis.",
      icon: "research",
    },
  ],

  aboutMe:
    "Ingeniero Civil por la Universidad San Ignacio de Loyola, con Maestría en Ingeniería Civil con mención en Gestión de Riesgos Naturales por la Pontificia Universidad Católica del Perú (PUCP), donde obtuve el primer puesto con mención sobresaliente. Actualmente soy CEO de Toward Resilience Corporation S.A.C., empresa especializada en evaluación estructural de edificaciones existentes, y pre docente e investigador en la PUCP. Mi investigación se enfoca en sistemas de evacuación frente a tsunamis utilizando modelos basados en agentes y técnicas de reinforcement learning, con colaboraciones internacionales en Tohoku University (Japón) y la Universidad Técnica Federico Santa María (Chile). Próximamente iniciaré mi Doctorado en Ciencias de la Ingeniería en la Pontificia Universidad Católica de Chile.",

  skills: [
    "Evaluación Estructural",
    "Ensayos No Destructivos",
    "Gestión de Riesgos",
    "Agent-Based Modeling",
    "Python",
    "ETABS",
    "SAP2000",
    "DIANA FEA",
    "Abaqus FEA",
    "Matlab",
    "Reinforcement Learning",
    "Machine Learning",
  ],

  publications: [
    {
      authors: "Perez J., Moya L., Ramirez J., Gonzales E., Mas E., Adriano B. & Koshimura S.",
      year: "2025",
      title: "Tsunami Evacuation Planning for Camana, Peru: Insights from Agent-Based Modeling",
      venue: "Natural Hazards",
      note: "En revisión",
      type: "journal",
    },
    {
      authors: "Perez J., Moya L., Ramirez J., Gonzales E., Mas E., Adriano B. & Koshimura S.",
      year: "2025",
      title: "Tsunami pedestrian evacuation simulation for Camaná, Peru: Perspectives for improving evacuation performance",
      venue: "E3S Web of Conferences — 17th Aceh International Workshop on Sustainable Tsunami Disaster Recovery",
      note: "E3S Web of Conferences, Vol. 515 (2025)",
      type: "conference",
      link: "https://www.e3s-conferences.org/articles/e3sconf/abs/2025/51/e3sconf_aiwest-dr2025_02011/e3sconf_aiwest-dr2025_02011.html",
    },
    {
      authors: "Perez J., Cabrera N. & Reza A.",
      year: "2025",
      title: "Preparedness and strengths in disaster risk management in Lurigancho-Chosica, Lima, Peru: Toward resilience of Lima Metropolitan",
      venue: "E3S Web of Conferences — 17th Aceh International Workshop on Sustainable Tsunami Disaster Recovery",
      note: "E3S Web of Conferences, Vol. 515 (2025)",
      type: "conference",
      link: "https://www.e3s-conferences.org/articles/e3sconf/abs/2025/51/e3sconf_aiwest-dr2025_03005/e3sconf_aiwest-dr2025_03005.html",
    },
    {
      authors: "Cordova-Arias C. & Perez J.",
      year: "2024",
      title: "Quantitative indicators for multi-hazard community resilience assessment of informal settlements",
      venue: "18th World Conference on Earthquake Engineering — Milan, Italy",
      note: "Proceedings 18WCEE",
      type: "conference",
      link: "https://www.researchgate.net/publication/381847001",
    },
  ],

  projects: [
    {
      name: "Modelo Global de Evacuación por Tsunami (GTEM)",
      description: "Desarrollo de sistemas complejos con modelos basados en agentes para optimizar la evacuación frente a tsunamis. Colaboración Tohoku University – PUCP, financiado por CDRI.",
      link: "",
      skills: ["Agent-Based Modeling", "Python", "Tohoku University"],
    },
    {
      name: "Proyecto LAdERA — CONCYTEC",
      description: "Lineamientos para adaptación al cambio climático en ecosistemas urbanos de bajo riesgo y mejoramiento ambiental.",
      link: "",
      skills: ["Gestión de Riesgos", "Cambio Climático", "PUCP"],
    },
    {
      name: "Evaluación Estructural — 21 Instituciones Educativas",
      description: "Evaluación estructural integral de 21 instituciones educativas de Lima Metropolitana para la Dirección Regional de Educación (DRELM).",
      link: "",
      skills: ["Evaluación Estructural", "Ensayos No Destructivos", "DRELM"],
    },
    {
      name: "Evacuación Peatonal con Reinforcement Learning",
      description: "Sistema inteligente de evacuación peatonal basado en técnicas de reinforcement learning. Tesis de maestría financiada por CONCYTEC.",
      link: "",
      skills: ["Reinforcement Learning", "Python", "PUCP"],
    },
  ],

  experience: [
    {
      company: "Tohoku University & International Research Project",
      title: "Investigador Visitante",
      dateRange: "Ago. 2025 – Presente",
      bullets: [
        "Investigación en Japón bajo el Prof. Erik Mas sobre modelos basados en agentes para evacuación frente a tsunamis",
        "Proyecto GTEM: Modelo Global de Evacuación por Tsunami, financiado por CDRI",
      ],
    },
    {
      company: "Pontificia Universidad Católica del Perú (PUCP)",
      title: "Pre Docente & Asistente de Investigación",
      dateRange: "Ago. 2023 – Presente",
      bullets: [
        "Docencia en Evaluación Estructural, Resistencia de Materiales, Concretos y Laboratorio de Materiales",
        "Investigador en el Proyecto LAdERA (CONCYTEC): adaptación al cambio climático en ecosistemas urbanos",
        "Intercambio en la Universidad Técnica Federico Santa María (Chile): tsunami vertical-evacuation planning",
      ],
    },
    {
      company: "Toward Resilience Corporation S.A.C.",
      title: "CEO & Ingeniero de Proyectos",
      dateRange: "Ago. 2022 – Presente",
      bullets: [
        "Evaluación estructural de 21 instituciones educativas para la DRELM de Lima Metropolitana",
        "Servicios para JJC Contratistas Generales / Thornton Tomasetti en minería (Mina Justa)",
        "Ensayos no destructivos, potencial de corrosión y modelamiento con fines de reforzamiento",
      ],
    },
    {
      company: "Universidad San Ignacio de Loyola (USIL)",
      title: "Asistente Académico & Pre Docente",
      dateRange: "Ago. 2022 – Oct. 2023",
      bullets: [
        "Docencia en Tecnología del Concreto, Proyecto de Ingeniería Civil y Seminario de Tesis",
        "Gestión documentaria y académica de estudiantes de Ingeniería Civil",
      ],
    },
    {
      company: "Scientia Concrete S.A.C.",
      title: "Ingeniero Estructural de Proyectos",
      dateRange: "Ene. 2020 – Jul. 2022",
      bullets: [
        "Evaluación estructural y rehabilitación de edificaciones históricas, universidades y viviendas",
        "Técnicas destructivas y no destructivas en concreto armado, albañilería y tierra armada",
      ],
    },
  ],

  scholarships: [
    {
      name: "Beca 18 — PRONABEC",
      issuer: "Gobierno del Perú",
      year: "2015 – 2020",
      description: "Beca completa de pregrado para estudios de Ingeniería Civil en la Universidad San Ignacio de Loyola.",
    },
    {
      name: "Financiamiento CONCYTEC",
      issuer: "Consejo Nacional de Ciencia, Tecnología e Innovación Tecnológica",
      year: "2023 – 2025",
      description: "Financiamiento para estudios de Maestría en Gestión de Riesgos Naturales en PUCP y tesis sobre evacuación peatonal con reinforcement learning.",
    },
    {
      name: "CDRI — Coalition for Disaster Resilient Infrastructure",
      issuer: "CDRI Research Grant",
      year: "2025 – Presente",
      description: "Financiamiento del proyecto GTEM (Global Tsunami Evacuation Model) en colaboración con Tohoku University y PUCP.",
    },
  ],

  awards: [
    {
      name: "Premio Excelencia Universitaria",
      issuer: "ACI International",
      year: "2020",
      description: "Reconocimiento internacional a la excelencia académica y aporte a la industria del concreto.",
    },
    {
      name: "1er Puesto — Mención Sobresaliente",
      issuer: "Pontificia Universidad Católica del Perú (PUCP)",
      year: "2025",
      description: "Primer puesto de la promoción en la Maestría en Ingeniería Civil con mención en Gestión de Riesgos Naturales.",
    },
    {
      name: "Tesis con Mención Sobresaliente",
      issuer: "Universidad San Ignacio de Loyola (USIL)",
      year: "2020",
      description: "Tesis de pregrado en Ingeniería Civil reconocida con la más alta distinción.",
    },
  ],

  researchLines: [
    {
      title: "Evaluación Estructural de Edificaciones Existentes",
      description: "Ensayos no destructivos, potencial de corrosión y modelamiento estructural en colegios, hospitales, iglesias, edificios residenciales y proyectos mineros.",
    },
    {
      title: "Gestión de Riesgos de Desastres Naturales",
      description: "Resiliencia comunitaria, preparación frente a sismos, tsunamis, flujos de escombros e inundaciones, con enfoque en Lima Metropolitana.",
    },
    {
      title: "Modelamiento Basado en Agentes (ABM)",
      description: "Simulación de evacuación peatonal frente a tsunamis mediante agent-based models, con aplicaciones en Camaná, Perú y colaboración con Tohoku University.",
    },
    {
      title: "Reinforcement Learning aplicado a Evacuación",
      description: "Optimización de rutas de evacuación peatonal utilizando técnicas de machine learning y reinforcement learning para escenarios multi-amenaza.",
    },
  ],

  education: [
    {
      school: "Pontificia Universidad Católica de Chile",
      degree: "Doctorado en Ciencias de la Ingeniería",
      dateRange: "2026",
      achievements: ["Próximo inicio"],
    },
    {
      school: "Pontificia Universidad Católica del Perú (PUCP)",
      degree: "Maestría en Ingeniería Civil — Gestión de Riesgos Naturales",
      dateRange: "2023 – 2025",
      achievements: [
        "1er Puesto — Mención Sobresaliente",
        "Financiamiento CONCYTEC",
      ],
    },
    {
      school: "Universidad San Ignacio de Loyola (USIL)",
      degree: "Ingeniero Civil — CIP N° 315093",
      dateRange: "2015 – 2020",
      achievements: [
        "Tesis con Mención Sobresaliente",
        "Beca Completa PRONABEC (Beca 18)",
        "Premio Excelencia Universitaria — ACI International",
      ],
    },
  ],
};
