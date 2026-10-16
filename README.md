# Cap Entrepreneur

Site statique (sans serveur) pour les étudiants étrangers en France qui veulent passer du statut étudiant au titre de séjour « entrepreneur / profession libérale ». Une seule landing page :

1. **Services**, en tête de page :
   - **Modèle de business plan (PDF).** Le visiteur l'achète sur la boutique Buy Me a Coffee ([buymeacoffee.com/simoudev/e/587848](https://buymeacoffee.com/simoudev/e/587848)), qui lui remet le PDF après le paiement. Le PDF n'est **pas** sur le site.
   - **Accompagnement (49 €, sur demande).** Le visiteur vous contacte ; le paiement et l'échange (CV, paragraphe sur le projet, chiffres) se font à la main, livraison sous 24 h.
2. **Le titre « entrepreneur / profession libérale »** : définition et pièces à fournir, tirées des fiches Service-Public sourcées.
3. **Les démarches** : étapes, questionnaire « Votre situation » (calculé dans le navigateur, rien n'est envoyé), fiches sourcées et datées.
4. Illustration du titre (données masquées), FAQ, pages légales.

> Le site fournit une information, pas un conseil juridique, et ne garantit aucune décision de la préfecture.

## Structure

```
frontend/
  src/lib/site.ts          liens et réglages : Buy Me a Coffee, prix, e-mail de contact
  src/content/info.json    contenu administratif sourcé (à revoir au moins une fois par an)
  src/pages/Legal.tsx      mentions légales, confidentialité, conditions : compléter les [crochets]
  public/images/           photo d'illustration du titre
  vercel.json              configuration Vercel
.github/workflows/pages.yml publication automatique sur GitHub Pages
```

React 18, TypeScript, Vite, Tailwind. Aucune clé, aucun cookie, aucun appel réseau vers un serveur à vous.

## Avant la mise en ligne

1. **Buy Me a Coffee** : le PDF est vendu comme **Extra** (https://buymeacoffee.com/simoudev/e/587848). Pour changer de lien, modifiez `buyMeACoffee` dans `src/lib/site.ts`.
2. **`src/lib/site.ts`** : indiquez `contactEmail` (sinon le bouton « Demander un accompagnement » mène à Buy Me a Coffee) et, si vous le souhaitez, `modelePrice`.
3. **`src/pages/Legal.tsx`** : complétez les mentions entre crochets (éditeur, SIREN, hébergeur, médiateur).

## En local

```powershell
cd frontend
npm install
npm run dev      # http://localhost:5173
npm test
```

## Publier sur Vercel

```powershell
cd frontend
npx.cmd vercel login
npx.cmd vercel --prod
```

Ou, depuis un dépôt GitHub : vercel.com > Add New Project > importez le dépôt > **Root Directory : `frontend`** > Deploy. Chaque push republie le site.

## Publier sur GitHub Pages

1. Créez un dépôt sur GitHub et poussez-y le contenu de ce dossier (branche `main`).
2. Dépôt > **Settings > Pages > Build and deployment > Source : GitHub Actions**.
3. Le workflow `.github/workflows/pages.yml` teste, construit et publie le site à chaque push. Adresse : `https://<utilisateur>.github.io/<dépôt>/`.

Le site gère seul le sous-dossier `/<dépôt>/` (`VITE_BASE`) et les pages légales (copie `404.html`).

> Sur GitHub Pages gratuit, le dépôt doit être **public** : c'est pourquoi aucun PDF ne doit y être (`*.pdf` est dans `.gitignore`).

## Ancienne version

La version avec paiement Stripe, comptes, connexion Google et API Flask est archivée hors du projet, dans `C:\SAAS-archive-stripe`. Elle contient des clés et le PDF : ne la publiez pas.
