# guilhempoties.fr

Portfolio de Guilhem Poties — ingénieur créatif (IMAC, ESIEE Paris).

Site statique généré avec [Astro](https://astro.build) : pas de base de données, pas de framework JS côté client, des
images optimisées automatiquement (WebP, tailles responsives) et un thème clair/sombre.

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site dans dist/
npm run preview  # sert dist/ en local
npm run check    # vérification des types et du contenu
```

## Ajouter une création

Créer un fichier Markdown dans `src/content/projets/` (le nom du fichier devient l'URL `/projets/<nom>/`) :

```markdown
---
title: Mon projet
date: 2026-03-01            # sert au tri ; l'année est affichée
period: 2025 — 2026         # optionnel, remplace l'année
disciplines: [code, cinema] # code · cinema · video · graphisme · musique · scene · ecriture
summary: Une ou deux phrases affichées sur la carte et en description SEO.
role: Réalisation, montage  # optionnel
context: IMAC 3             # optionnel
tools: [C++, OpenGL]        # optionnel
featured: 1                 # optionnel : position dans la sélection de l'accueil
cover: ../../assets/mon-projet/cover.jpg   # optionnel (sinon miniature YouTube ou icône)
coverAlt: Description de l'image
videos:
  - { id: dQw4w9WgXcQ, title: "Titre optionnel", note: "Texte optionnel" }
gallery:
  - { src: ../../assets/mon-projet/1.jpg, alt: "Description" }
galleryFit: contain         # pour les affiches / icônes à ne pas recadrer
links:
  - { label: Code source, href: "https://github.com/…" }
---

Texte libre en Markdown.
```

Les images vont dans `src/assets/<projet>/` ; Astro les redimensionne et les compresse au build.
Pensez à mettre entre guillemets les valeurs YAML qui contiennent une virgule ou deux-points.

Le CV en ligne (`/cv/`) est alimenté par `src/data/cv.ts`, et le PDF téléchargeable est `public/files/CV-Guilhem-POTIES.pdf`.
Liens, e-mail et hébergeur : `src/data/site.ts`.

## Déploiement

`npm run build` puis copier le **contenu** de `dist/` à la racine de l'hébergement (FTP/SFTP), en remplaçant
l'ancien WordPress. Le build génère aussi un `.htaccess` (Apache) avec :

- les redirections 301 des anciennes URL WordPress vers les nouvelles (`src/data/redirects.mjs`) ;
- HTTPS et `www` → domaine nu, cache long des assets, compression, en-têtes de sécurité.

Le site fonctionne aussi tel quel sur Netlify, Vercel, Cloudflare Pages ou GitHub Pages (les redirections y sont
assurées par des pages `meta refresh`).

> ⚠️ Avant de supprimer WordPress, faire une sauvegarde complète (fichiers + base de données).
