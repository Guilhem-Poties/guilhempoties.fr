// Source : CV d'octobre 2025 (public/files/CV-Guilhem-POTIES.pdf).

export const intro = [
  "Étudiant ingénieur en cycle IMAC (Image, Multimédia, Audiovisuel et Communication) à l'ESIEE Paris — Université Gustave Eiffel.",
  "Ma formation me donne de solides bases en informatique, en multimédia et en audiovisuel. En dehors des cours, je tourne, je monte, je mixe et je monte sur scène.",
];

export const experiences = [
  {
    title: "Programmation d'un jeu d'échecs",
    org: 'IMAC',
    period: '2025',
    text: "Un jeu d'échecs complet en C++, avec une interface 2D en ImGui et un affichage 3D en OpenGL. Entièrement fonctionnel, récompensé par un 18/20.",
    href: '/projets/jeu-d-echecs/',
  },
  {
    title: 'Création de courts-métrages',
    org: 'Université Gustave Eiffel · IMAC',
    period: '2023 — 2025',
    text: "Sur plusieurs évènements et projets, j'ai réalisé ou participé à des courts-métrages à des postes variés : réalisateur, monteur, comédien, direction d'acteurs.",
    href: '/projets/?d=cinema',
  },
  {
    title: 'Montage et réalisation vidéo',
    org: 'Département culturel de la ville de Bidart',
    period: '2021 — 2024',
    text: 'Réalisation de trailers pour les spectacles des saisons culturelles, ainsi que de vidéos de présentation.',
    href: '/projets/place-aux-artistes/',
  },
  {
    title: 'Développeur logiciel',
    org: 'Telerad',
    period: '2023',
    text: "Stage prolongé en CDD : développement de programmes pour des systèmes embarqués de radio et d'interfaces web. Cryptographie, programmation web, réseau, gestion de données et installation de logiciels.",
  },
  {
    title: "Développement d'une application web",
    org: 'IUT de Bayonne',
    period: '2022 — 2023',
    text: "Trocali, une application web de place de marché. Préconception et conception entièrement réalisées par notre groupe de projet.",
    href: '/projets/trocali/',
  },
];

export const education = [
  { title: 'Cycle ingénieur IMAC', org: 'ESIEE Paris — Université Gustave Eiffel', period: 'Depuis 2023' },
  { title: 'DUT Informatique', org: 'IUT de Bayonne — UPPA', period: '2021 — 2023' },
  { title: 'Baccalauréat général', org: 'Lycée André Malraux, Biarritz', period: '2018 — 2021', detail: 'Spécialités NSI et Physique-Chimie, Maths complémentaires, section euro anglais' },
];

export const skills = [
  { title: 'Développement', items: ['C / C++', 'OpenGL', 'ImGui', 'HTML · CSS · JS', 'React', 'Python', 'Java'] },
  { title: 'Création audiovisuelle', items: ['Montage vidéo', 'Mixage audio', 'After Effects', 'Photographie', 'Son', '3D'] },
  { title: 'Architecture logicielle', items: ['Bases de données', 'UML', 'SQL', 'Réseaux'] },
  { title: 'Gestion de projet', items: ["Président d'association étudiante", 'Agile / Scrum'] },
];

export const softSkills = ['Investissement', 'Travail en équipe', 'Créativité'];

export const interests = [
  { title: 'Musique', text: "Une activité de DJ, et des premiers pas dans la production." },
  { title: 'Théâtre', text: 'Dix ans de participation active dans une compagnie semi-professionnelle.' },
  { title: 'Dessin', text: 'En autodidacte, sur papier comme en numérique.' },
  { title: 'Sport', text: "Volley à l'université et musculation : discipline et esprit d'équipe." },
];

export const languages = [
  { title: 'Français', level: 'Langue maternelle' },
  { title: 'Anglais', level: 'C1' },
  { title: 'Espagnol', level: 'B1' },
];
