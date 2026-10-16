import { ArrowUpRight, Check, Coffee, Mail } from "lucide-react";
import { SourceList } from "@/components/Layout";
import { INFO, type Source } from "@/lib/content";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** The template PDF is sold and delivered by Buy Me a Coffee: the site only links to it. */
export function ModeleBuy({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      <a href={SITE.buyMeACoffee} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
        <Coffee className="h-4 w-4" aria-hidden /> Offrir un café et recevoir le modèle
        <span className="sr-only">(ouvre Buy Me a Coffee dans un nouvel onglet)</span>
      </a>
      <p className="text-xs text-muted-foreground">Paiement sur Buy Me a Coffee. Le PDF est disponible juste après le paiement.</p>
    </div>
  );
}

/** Personalised plan, on request: by e-mail when an address is set, otherwise through the Buy Me a Coffee page. */
export function AccompagnementContact({ className }: { className?: string }) {
  const href = SITE.contactEmail
    ? `mailto:${SITE.contactEmail}?subject=${encodeURIComponent("Demande d'accompagnement business plan")}`
    : SITE.buyMeACoffeeProfile;
  return (
    <div className={cn("space-y-2", className)}>
      <a href={href} target={SITE.contactEmail ? undefined : "_blank"} rel="noopener noreferrer" className="btn btn-dark w-full">
        {SITE.contactEmail ? <Mail className="h-4 w-4" aria-hidden /> : <ArrowUpRight className="h-4 w-4" aria-hidden />} Demander un accompagnement
      </a>
      {SITE.contactEmail && <p className="text-xs text-muted-foreground">Ou écrivez à <span className="font-bold">{SITE.contactEmail}</span></p>}
    </div>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Check className="mt-1 h-4 w-4 shrink-0 text-olive" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

/** First thing on the page: what is offered. */
export function ServicesHero() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pt-24">
        <h1 className="max-w-[20ch] font-display text-[clamp(2.3rem,5vw,4.2rem)] font-extrabold leading-[1.02] text-forest" style={{ fontStretch: "80%" }}>
          Le business plan de votre titre « entrepreneur / profession libérale ».
        </h1>
        <p className="mt-5 max-w-[56ch] text-lg text-forest/85">
          Pour les étudiants étrangers qui créent leur micro-entreprise en France : un modèle prêt à adapter, ou un business plan rédigé pour votre projet.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="panel flex flex-col p-7 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-xl font-bold" style={{ fontStretch: "90%" }}>Modèle de business plan</h2>
              {SITE.modelePrice && <p className="tabular font-display text-3xl font-extrabold" style={{ fontStretch: "80%" }}>{SITE.modelePrice}</p>}
            </div>
            <ul className="mt-6 space-y-2.5">
              <Feature>Un business plan complet de micro-entreprise, au format PDF</Feature>
              <Feature>Toutes les parties attendues : projet, offre, marché, plan financier, aspects juridiques</Feature>
              <Feature>Offrez-moi un café sur Buy Me a Coffee : le modèle vous est remis aussitôt</Feature>
            </ul>
            <ModeleBuy className="mt-8 md:mt-auto md:pt-8" />
          </article>

          <article className="panel flex flex-col border-forest p-7 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-xl font-bold" style={{ fontStretch: "90%" }}>Accompagnement</h2>
              <p className="text-right">
                <span className="tabular font-display text-3xl font-extrabold" style={{ fontStretch: "80%" }}>{SITE.accompagnementPrice}</span>
                <span className="block text-xs text-muted-foreground">sur demande</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2.5">
              <Feature>Le modèle PDF inclus</Feature>
              <Feature>Votre business plan adapté à votre projet, à partir de votre CV et d'un paragraphe sur votre activité</Feature>
              <Feature>Vos prix, vos clients et vos charges repris dans le plan financier</Feature>
              <Feature><strong>Livré sous {SITE.deliveryHours} h</strong> après réception de vos informations, en Word et en PDF</Feature>
            </ul>
            <AccompagnementContact className="mt-8 md:mt-auto md:pt-8" />
          </article>
        </div>
      </div>
    </section>
  );
}

function bullets(body: string) {
  return body.split("\n").filter((l) => l.trim().startsWith("- ")).map((l) => l.trim().slice(2).replace(/\s*[;.]$/, ""));
}

/** What the permit is and which documents it takes. Facts come from the sourced info content. */
export function TitreSection() {
  const info = INFO;
  const documents = info?.topics.find((t) => t.id === "documents");
  const titre = info?.topics.find((t) => t.id === "differences-statuts")?.sections.find((s) => s.heading.includes("entrepreneur"));
  const common = documents?.sections.find((s) => s.heading.startsWith("Pièces communes"));
  const activity = documents?.sections.find((s) => s.heading.startsWith("Pièces liées"));
  const sources: Source[] = [...(titre?.sources ?? []).slice(0, 2), ...(common?.sources ?? [])].filter((s, i, all) => all.findIndex((x) => x.url === s.url) === i);
  const activityItems = activity ? bullets(activity.body).filter((b, i, all) => all.indexOf(b) === i) : [];

  return (
    <section id="titre" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[1.05]" style={{ fontStretch: "82%" }}>
            Le titre « entrepreneur / profession libérale », c'est quoi&nbsp;?
          </h2>
          <div className="mt-6 max-w-[60ch] space-y-4">
            <p>
              C'est la carte de séjour temporaire qui autorise une personne étrangère à exercer en France une activité <strong>non salariée</strong> : commerciale, artisanale, industrielle ou libérale, par exemple en micro-entreprise. Elle est prévue par l'article L421-5 du CESEDA et dure un an au plus.
            </p>
            <p>
              La carte « étudiant » ne permet pas d'être auto-entrepreneur. Pour obtenir ce titre, l'activité doit être <strong>économiquement viable</strong> et procurer des ressources suffisantes ; pour une activité libérale, Service-Public indique au moins 1 867,02 € par mois. Un avis sur la viabilité du projet est demandé avant le dépôt.
            </p>
            <p className="text-sm text-muted-foreground">Les conditions exactes dépendent de votre situation et de votre nationalité : vérifiez-les auprès de votre préfecture.</p>
          </div>
          <SourceList sources={sources} />
        </div>

        <div>
          <h2 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold" style={{ fontStretch: "82%" }}>Pièces à fournir</h2>
          <p className="mt-2 text-sm text-muted-foreground">Liste générale selon Service-Public ; chaque préfecture peut en demander d'autres.</p>
          {common && (
            <>
              <h3 className="mt-7 font-bold">Pour tout dossier</h3>
              <ul className="mt-3 space-y-2">{bullets(common.body).map((b) => <Feature key={b}>{b}</Feature>)}</ul>
            </>
          )}
          {activityItems.length > 0 && (
            <>
              <h3 className="mt-7 font-bold">Pour l'activité</h3>
              <ul className="mt-3 space-y-2">
                {activityItems.map((b) => <Feature key={b}>{/business plan/i.test(b) ? <strong>{b}</strong> : b}</Feature>)}
              </ul>
            </>
          )}
          <div className="rule mt-10 pt-8">
            <p className="mb-4">Le business plan fait partie du dossier. Partez de notre modèle :</p>
            <ModeleBuy />
          </div>
        </div>
      </div>
    </section>
  );
}
