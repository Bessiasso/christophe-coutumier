# Digital Wedding Invitation Project Planning

## Purpose / Goals

-   Fournir une **invitation numérique élégante** présentée sous forme de livre animé.
-   L'invitation affiche les informations du mariage (date, lieu, détails) sur une seule page.
-   Expérience visuelle immersive avec animation de pages de livre.
-   Expérience **mobile-first**, avec une version PC responsive.
-   Déploiement sur **Vercel**.

## Scope

### In-Scope

-   Page d'invitation unique avec animation de livre.
-   Affichage des informations du mariage (noms, date, lieu, détails).
-   Animation de pages de livre pour une expérience immersive.
-   Design :
    -   Mobile-first, responsive, élégant.
    -   Utilisation de **shadcn/ui** via MCP server pour les composants.
-   Hébergement : **Vercel**.

### Out of Scope (initial version)

-   Authentification et gestion d'utilisateurs.
-   Base de données et stockage persistant.
-   Envoi d'emails.
-   QR codes et liens personnalisés.
-   Gestion des invités et RSVP.
-   Dashboard administrateur.
-   Multi-langues.

## Tech Stack

| Composant  | Technologie                          |
| ---------- | ------------------------------------ |
| Frontend   | Next.js (TypeScript) avec App Router |
| Styling    | TailwindCSS (latest)                 |
| Components | shadcn/ui (via MCP server)           |
| Animations | CSS animations / Framer Motion       |
| Hosting    | Vercel                               |
| Sécurité   | HTTPS                                |

## Design System

### Typographie

-   **Great Vibes** (Google Fonts – script élégant pour titres et accents romantiques)
-   **Coming Soon** (Google Fonts – sans-serif pour textes et détails pratiques)

### Palette de couleurs

-   **Principales :**

    -   Ivory / Cream Gold  
        HEX : `#FFF8E7` / `#F5E6D3`  
        RGB : 255, 248, 231 / 245, 230, 211
    -   Midnight Blue  
        HEX : `#191970`  
        RGB : 25, 25, 112

-   **Secondaire (fond) :**
    -   Ivory / Cream (fond principal)

## Data Model

-   **Invitation Content** : Informations statiques du mariage (noms des mariés, date, lieu, détails, etc.).
-   Aucune base de données requise - contenu statique ou configuration simple.

## Sécurité & Confidentialité

-   HTTPS obligatoire (Vercel).
-   Pas de données sensibles stockées.

## UX Flows

1. L'utilisateur accède à la page d'invitation.
2. Animation d'ouverture du livre.
3. Affichage des informations du mariage sur la page du livre.
4. Expérience visuelle immersive avec animations de pages.

## Timeline / Milestones

1. Setup projet (Next.js, Tailwind, shadcn/ui via MCP).
2. Configuration des polices Google Fonts (Great Vibes, Coming Soon).
3. Création du système de couleurs (Ivory/Cream Gold, Midnight Blue).
4. Développement de l'animation de livre.
5. Page d'invitation unique avec contenu.
6. Design final + test mobile.
7. Déploiement Vercel + test utilisateur.
