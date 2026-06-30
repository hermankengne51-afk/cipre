# Récapitulatif — CIPCRE Frontend (TanStack Start)

## 1. Base de données

- **PostgreSQL 16** via Docker (conteneur `cipre-postgres`, port `5432`)
- **Drizzle ORM** (`drizzle-orm/node-postgres`) avec schémas dans `src/integrations/drizzle/schema/`
- Tables : `programs`, `news_articles`, `events`, `documents`, `media_items`, `partners`, `contact_messages`, `volunteer_applications`
- Index B-tree ajoutés sur les colonnes de filtrage fréquent (`status`, `published_at`, `category`, etc.)
- Migrations : `bun run db:generate` / `bun run db:migrate`
- Seed de données d'exemple : `bun run db:seed` (3 programmes bilingues)

## 2. Pages publiques connectées à la BD

Chaque page utilise un `loader` TanStack Router + une `createServerFn` qui interroge la BD :

| Page | Server function | Fichier |
|---|---|---|
| Programmes | `listPublishedPrograms`, `getPublishedProgramBySlug` | `src/server/public/programs.ts` |
| Événements | `listPublishedEvents` (upcoming/past) | `src/server/public/events.ts` |
| Actualités, Documentation, Partenaires | idem | `src/server/public/*.ts` |

**Données de secours (mock)** : si la BD ne retourne aucun résultat publié, chaque page affiche des données d'exemple codées en dur (non stockées en BD) — `NewsPublicationsPage.tsx`, `EventsPage.tsx`, `DocumentationCenterPage.tsx`, `PartnershipsPage.tsx`.

## 3. Panneau d'administration (`/admin`)

- Connexion : `/admin/login` (mot de passe unique, voir `ADMIN_PASSWORD` dans `.env.local`)
  - Bouton œil pour afficher/masquer le mot de passe en clair
- Session chiffrée via cookie `admin_session` (`useSession`, 7 jours, `httpOnly`)
- Onglets CRUD : Programmes, Actualités, Événements, Documentation, Médias, Partenaires, Messages, Bénévolat

### Traduction automatique FR ⇄ EN

Sur les onglets Programmes / Actualités / Événements / Documentation / Médias :
- Bannière "Langue de saisie" (FR/EN) en haut de chaque formulaire
- Les champs de la langue secondaire sont optionnels et traduits **automatiquement** (via l'API gratuite MyMemory) au moment de l'enregistrement si laissés vides
- Bouton "Traduire vers FR/EN" pour prévisualiser la traduction avant sauvegarde
- Service partagé : `src/server/shared/translate.ts`

### Réponse par email (Messages & Bénévolat)

Dans les onglets **Messages** et **Bénévolat**, une zone de texte + bouton "Envoyer" permet de répondre directement par email au demandeur (sans passer par un client mail externe) :
- `replyToContactMessage` → `src/server/admin/messages.ts`
- `replyToVolunteerApplication` → `src/server/admin/volunteers.ts`
- Envoi via **Resend** (`src/lib/email/mailer.ts`)
- Réponse à un message marque automatiquement le statut "lu" ; réponse à une candidature passe le statut à "en revue"
- Protégé par `requireAdminAuth()` (vérifie la session admin avant tout envoi)

## 4. Variables d'environnement (`.env.local`, non versionné)

```
DATABASE_URL=...
ADMIN_PASSWORD=...
AUTH_SECRET=...        # 32+ caractères, openssl rand -base64 32
RESEND_API_KEY=...     # clé API Resend
RESEND_FROM=...        # ex: onboarding@resend.dev (sans domaine vérifié)
```

⚠️ `.env.example` ne doit contenir **que des placeholders** (il est suivi par git). Les vraies valeurs vont uniquement dans `.env.local` (ignoré par git via `*.local`).

### État actuel de Resend

- Clé API configurée, expéditeur `onboarding@resend.dev`
- **Limitation sans domaine vérifié** : Resend n'autorise l'envoi qu'à l'adresse email du compte Resend lui-même. Pour répondre à de vrais bénévoles/contacts, il faudra vérifier le domaine `cipcre.org` sur Resend (enregistrements DNS SPF/DKIM) et utiliser `RESEND_FROM="CIPCRE <contact@cipcre.org>"`.

## 5. Points d'attention restants

- **Sécurité** : les fonctions serveur admin (`createProgram`, `deleteProgram`, etc. dans `src/server/admin/*.ts`, hors `messages.ts`/`volunteers.ts`) ne vérifient pas encore la session admin (`requireAdminAuth`) — à corriger pour empêcher tout appel direct sans authentification.
- `/api/contact` et `/api/volunteer` renvoient le détail brut des erreurs DB au client (à assainir en prod).
- Pas de limitation de débit (rate limiting) sur les endpoints publics POST.
- Vérification de domaine Resend à faire avant mise en production réelle des réponses par email.

## 6. Lancer le projet

```bash
docker start cipre-postgres   # si conteneur déjà créé
bun run dev                   # http://localhost:3010
```

Admin : `http://localhost:3010/admin/login`
