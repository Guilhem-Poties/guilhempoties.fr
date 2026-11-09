import { getCollection, type CollectionEntry } from 'astro:content';
import { disciplines, type Discipline } from '../content.config';

export type Project = CollectionEntry<'projets'>;
export { disciplines, type Discipline };

/** All projects, most recent first. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projets');
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getFeatured(): Promise<Project[]> {
  const all = await getProjects();
  return all
    .filter((p) => p.data.featured !== undefined)
    .sort((a, b) => (a.data.featured ?? 0) - (b.data.featured ?? 0));
}

export const yearLabel = (p: Project) => p.data.period ?? String(p.data.date.getFullYear());

export const disciplineLabel = (d: Discipline) => disciplines[d].label;

/** Poster frame for a YouTube video (hqdefault always exists, 480×360). */
export const ytThumb = (id: string, quality: 'hqdefault' | 'maxresdefault' = 'hqdefault') =>
  `https://i.ytimg.com/vi/${id}/${quality}.jpg`;

/** Count of projects per discipline (a project counts in every discipline it lists). */
export function countByDiscipline(projects: Project[]) {
  const counts = Object.fromEntries(Object.keys(disciplines).map((k) => [k, 0])) as Record<Discipline, number>;
  for (const p of projects) for (const d of p.data.disciplines) counts[d]++;
  return counts;
}
