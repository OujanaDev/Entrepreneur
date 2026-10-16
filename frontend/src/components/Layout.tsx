import { Link, Outlet } from "react-router-dom";
import { Coffee, ExternalLink } from "lucide-react";
import { asset, SITE } from "@/lib/site";
import { cn, formatDate } from "@/lib/utils";
import type { Source } from "@/lib/content";

export const BRAND = SITE.brand;

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2 font-display text-lg font-extrabold tracking-tight", className)} style={{ fontStretch: "85%" }}>
      <span className="grid h-7 w-7 place-items-center rounded-[4px] bg-forest" aria-hidden>
        <svg viewBox="0 0 20 20" className="h-4 w-4"><path d="M4 13l3.5-3.5 2.5 2.5 6-6" stroke="hsl(var(--kraft))" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      {BRAND}
    </Link>
  );
}

// In-page anchors, prefixed with the deploy base so they also work from the legal pages and on GitHub Pages.
const LINKS = [
  { href: asset("#services"), label: "Services" },
  { href: asset("#titre"), label: "Le titre" },
  { href: asset("#demarches"), label: "Démarches" },
  { href: asset("#questions"), label: "Questions" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        <Logo className="text-forest" />
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 text-[0.95rem] lg:flex">
          {LINKS.map((l) => <a key={l.href} href={l.href} className="text-forest/80 hover:text-forest">{l.label}</a>)}
        </nav>
        <a href={SITE.buyMeACoffee} target="_blank" rel="noopener noreferrer" className="btn btn-outline min-h-0 py-2 text-sm">
          <Coffee className="h-4 w-4" aria-hidden /> Le modèle
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="space-y-3">
          <Link to="/" className="font-display text-lg font-extrabold" style={{ fontStretch: "85%" }}>{BRAND}</Link>
          <p className="max-w-sm text-sm text-cream/85">
            Business plans et information pour passer du titre étudiant à une activité indépendante. Ce service ne remplace pas un conseil juridique et ne garantit aucune décision de la préfecture.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-bold text-kraft">Le site</p>
          <ul className="space-y-1.5 text-cream/85">
            <li><a href={asset("#services")} className="hover:text-cream">Services</a></li>
            <li><a href={asset("#titre")} className="hover:text-cream">Le titre et les pièces</a></li>
            <li><a href={asset("#demarches")} className="hover:text-cream">Les démarches</a></li>
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-bold text-kraft">Informations légales</p>
          <ul className="space-y-1.5 text-cream/85">
            <li><Link to="/mentions-legales" className="hover:text-cream">Mentions légales</Link></li>
            <li><Link to="/confidentialite" className="hover:text-cream">Confidentialité</Link></li>
            <li><Link to="/conditions" className="hover:text-cream">Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:p-2">Aller au contenu</a>
      <Header />
      <main id="contenu" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function SourceList({ sources, className }: { sources?: Source[]; className?: string }) {
  if (!sources?.length) return null;
  return (
    <ul className={cn("mt-3 space-y-1 text-sm", className)}>
      {sources.map((s) => (
        <li key={s.url + s.label} className="flex flex-wrap items-baseline gap-x-2">
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline gap-1 font-bold text-olive underline decoration-olive/40 hover:decoration-olive">
            {s.publisher} — {s.label}
            <ExternalLink className="h-3 w-3 self-center" aria-hidden />
          </a>
          <span className="text-xs text-muted-foreground">{s.verifiedAt ? `vérifié le ${formatDate(s.verifiedAt)}` : "lien à vérifier"}</span>
        </li>
      ))}
    </ul>
  );
}

/** Renders text with paragraphs separated by blank lines and "- " bullet lines. */
export function RichText({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <div className="max-w-[68ch] space-y-3 leading-relaxed">
      {blocks.map((b, i) => {
        const lines = b.split("\n");
        if (lines.every((l) => l.trim().startsWith("- "))) {
          return (
            <ul key={i} className="list-disc space-y-1 pl-5 marker:text-olive">
              {lines.map((l, j) => <li key={j}>{l.trim().slice(2)}</li>)}
            </ul>
          );
        }
        return <p key={i}>{b}</p>;
      })}
    </div>
  );
}
