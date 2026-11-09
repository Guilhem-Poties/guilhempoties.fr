export const site = {
  name: 'Guilhem Poties',
  title: 'Guilhem Poties — Ingénieur créatif',
  role: 'Ingénieur créatif',
  description:
    "Portfolio de Guilhem Poties, étudiant ingénieur IMAC à l'ESIEE Paris : développement, cinéma, montage vidéo, graphisme, musique et scène.",
  email: 'gpoties@gmail.com',
  cv: '/files/CV-Guilhem-POTIES.pdf',
  location: 'Paris · originaire du Pays basque',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/guilhem-poties-aba878258/' },
    { label: 'GitHub', href: 'https://github.com/Guilhem-Poties' },
    { label: 'SoundCloud', href: 'https://soundcloud.com/vi9ne' },
  ],
  /**
   * Hébergeur du site — mention obligatoire (LCEN, art. 6). À compléter :
   * { name: 'OVH SAS', address: '2 rue Kellermann, 59100 Roubaix', phone: '1007' }
   */
  hosting: null as null | { name: string; address: string; phone?: string },
};
