import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const disciplines = {
  code: { label: 'Code', icon: 'page-web' },
  cinema: { label: 'Cinéma', icon: 'camera' },
  video: { label: 'Vidéo', icon: 'camera' },
  graphisme: { label: 'Graphisme', icon: 'tablette-graphique' },
  musique: { label: 'Musique', icon: 'note' },
  scene: { label: 'Scène', icon: 'masques' },
  ecriture: { label: 'Écriture', icon: 'plume' },
} as const;

export type Discipline = keyof typeof disciplines;
const disciplineKeys = Object.keys(disciplines) as [Discipline, ...Discipline[]];

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Date used for sorting & display (the year is shown). */
      date: z.coerce.date(),
      /** Optional free-form period shown instead of the year, e.g. "2021 — 2023". */
      period: z.string().optional(),
      /** First entry is the primary discipline. */
      disciplines: z.array(z.enum(disciplineKeys)).min(1),
      /** One or two sentences, shown on cards and as meta description. */
      summary: z.string(),
      role: z.string().optional(),
      context: z.string().optional(),
      tools: z.array(z.string()).default([]),
      /** Lower number = shown first in the home-page selection. */
      featured: z.number().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      videos: z
        .array(z.object({ id: z.string(), title: z.string().optional(), note: z.string().optional() }))
        .default([]),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      /** "contain" for posters / icons that must not be cropped. */
      galleryFit: z.enum(['cover', 'contain']).default('cover'),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    }),
});

export const collections = { projets };
