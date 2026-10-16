import type { ReactNode } from "react";
import { BRAND } from "@/components/Layout";
import { SITE } from "@/lib/site";

function Page({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 md:px-8 space-y-4 py-12 text-sm leading-relaxed [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:font-display [&_h2]:text-forest [&_li]:ml-5 [&_li]:list-disc">
      <h1 className="font-display text-4xl font-black" style={{ fontStretch: "78%" }}>{title}</h1>
      {children}
    </article>
  );
}

const contact = SITE.contactEmail || "[adresse e-mail]";

/* Texts between [brackets] must be completed by the operator before going live. */

export function MentionsLegales() {
  return (
    <Page title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>{BRAND} est édité par [nom ou raison sociale], [statut, ex. micro-entrepreneur], immatriculé sous le numéro [SIREN], [adresse]. Directeur de la publication : [nom]. Contact : {contact}.</p>
      <h2>Hébergement</h2>
      <p>[Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — ou, si le site est publié sur GitHub Pages : GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.]</p>
      <h2>Nature des informations</h2>
      <p>Les informations administratives publiées sur ce site ont une vocation pédagogique. Elles sont établies à partir de sources officielles, citées et datées, mais ne constituent ni un conseil juridique ni une garantie quant à l'issue d'une démarche. Seules l'administration et les textes en vigueur font foi. Pour une situation particulière, consultez un professionnel du droit des étrangers ou la préfecture compétente.</p>
      <h2>Propriété intellectuelle</h2>
      <p>Les contenus du site et le modèle de business plan sont protégés. Le modèle est destiné à l'usage personnel de l'acheteur et ne peut pas être revendu ni diffusé. Les liens vers les sites officiels sont fournis à titre de référence ; {BRAND} n'est affilié à aucune administration.</p>
    </Page>
  );
}

export function Confidentialite() {
  return (
    <Page title="Politique de confidentialité">
      <p>Cette politique décrit comment {BRAND} traite vos données personnelles conformément au règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés.</p>
      <h2>Responsable du traitement</h2>
      <p>[Nom ou raison sociale], [adresse], {contact}.</p>
      <h2>Ce site</h2>
      <p>Le site ne propose pas de compte, ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience. Les réponses au questionnaire « Votre situation » restent dans votre navigateur (stockage local) : elles ne nous sont pas transmises et vous pouvez les effacer en vidant les données du site dans votre navigateur. L'hébergeur conserve des journaux techniques de connexion (adresse IP, pages demandées) pour assurer la sécurité du service.</p>
      <h2>Achat du modèle sur Buy Me a Coffee</h2>
      <p>Le paiement et la remise du modèle se font sur Buy Me a Coffee. Les données que vous y saisissez (nom, adresse e-mail, message, moyen de paiement) sont traitées par Buy Me a Coffee et ses prestataires de paiement selon leur propre politique de confidentialité. Nous recevons de Buy Me a Coffee le nom ou pseudonyme, l'adresse e-mail et le montant de votre soutien, utilisés pour vous remettre le modèle et répondre à vos questions — exécution du contrat — et conservés pour la durée légale comptable.</p>
      <h2>Accompagnement</h2>
      <p>Si vous demandez un accompagnement, votre CV, la description de votre projet et vos informations financières servent uniquement à préparer votre business plan — exécution du contrat. Ils sont conservés [durée, ex. 12 mois] après la livraison, puis supprimés ; vous pouvez demander leur suppression avant. [Préciser ici les outils ou prestataires utilisés pour préparer le document, et les éventuels transferts hors de l'Union européenne.]</p>
      <h2>Vos droits</h2>
      <p>Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité : écrivez à {contact}. Vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>
    </Page>
  );
}

export function Conditions() {
  return (
    <Page title="Conditions de vente">
      <h2>1. Objet</h2>
      <p>Les présentes conditions régissent la vente, par [nom ou raison sociale], de deux prestations : le <strong>modèle de business plan</strong>, document PDF identique pour tous les clients, et l'<strong>accompagnement</strong>, business plan personnalisé rédigé à partir du CV, de la description du projet et des informations fournies par le client.</p>
      <h2>2. Nature du service</h2>
      <p>Les prévisions financières sont des estimations établies à partir des informations du client et des hypothèses indiquées dans le document. Le service ne constitue ni un conseil juridique, fiscal ou financier, ni une garantie d'obtention d'un financement, d'un titre de séjour ou d'une autorisation.</p>
      <h2>3. Modèle de business plan</h2>
      <p>Le modèle s'obtient en offrant un café sur la page Buy Me a Coffee de {BRAND}, au prix qui y est affiché. Le paiement est traité par Buy Me a Coffee selon ses propres conditions ; le modèle est remis immédiatement après le paiement. Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas à un contenu numérique fourni immédiatement, avec l'accord du client, dès le paiement. En cas de problème d'accès au fichier, écrivez à {contact}.</p>
      <h2>4. Accompagnement</h2>
      <p>Prix : {SITE.accompagnementPrice} TTC, confirmé par écrit avant tout paiement. Le client transmet son CV, un paragraphe décrivant son projet et les informations demandées ; le business plan est livré en Word et en PDF au plus tard {SITE.deliveryHours} heures après la réception du paiement et de l'ensemble de ces informations. Le client qui demande l'exécution avant la fin du délai de rétractation de quatorze jours reconnaît perdre ce droit une fois le document livré. Si le document ne peut pas être livré, le client est intégralement remboursé.</p>
      <h2>5. Responsabilité</h2>
      <p>Le client est responsable de l'exactitude des informations fournies et de la relecture du document avant tout usage. [Nom ou raison sociale] ne saurait être tenu responsable des décisions prises par un tiers (administration, banque) sur la base du document.</p>
      <h2>6. Données personnelles</h2>
      <p>Voir la politique de confidentialité.</p>
      <h2>7. Litiges</h2>
      <p>En cas de litige, le client peut recourir gratuitement au médiateur de la consommation : [nom et coordonnées du médiateur]. Le droit français est applicable.</p>
    </Page>
  );
}
