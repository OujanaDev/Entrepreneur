import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, ChevronDown, Info, OctagonAlert } from "lucide-react";
import { RichText, SourceList } from "@/components/Layout";
import { INFO, personalize } from "@/lib/content";
import { cn, formatDate } from "@/lib/utils";

const STORAGE_KEY = "demarches-reponses";

function loadAnswers(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

const PATH = [
  { title: "Vérifier sa situation", text: "Titre actuel et sa date de fin, diplôme obtenu en France, nature de l'activité, ressources." },
  { title: "Choisir le bon titre", text: "Carte « recherche d'emploi ou création d'entreprise », puis carte « entrepreneur / profession libérale »." },
  { title: "Prouver la viabilité", text: "Business plan, prévisionnel, ressources au moins équivalentes au SMIC selon la préfecture." },
  { title: "Déposer la demande", text: "En ligne sur l'ANEF, avant l'expiration du titre en cours." },
  { title: "Immatriculer l'activité", text: "Sur le guichet unique, au moment compatible avec le titre obtenu." },
];

/** The procedure, as a slip of numbered steps plus a short questionnaire; every claim keeps its source. */
export function DemarchesSection() {
  const content = INFO;
  const [answers, setAnswers] = useState<Record<string, string>>(loadAnswers);
  const [open, setOpen] = useState<string | null>(null);
  const result = useMemo(() => (Object.keys(answers).length ? personalize(content, answers) : null), [answers, content]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      /* answers still used for this visit */
    }
  }, [answers]);

  const topics = useMemo(() => {
    const prio = result?.priorityTopics ?? [];
    return [...content.topics].sort((a, b) => {
      const ia = prio.indexOf(a.id), ib = prio.indexOf(b.id);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
  }, [content, result]);

  return (
    <section id="demarches" className="border-b border-border bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[1.05]" style={{ fontStretch: "82%" }}>
              Le changement de statut, étape par étape.
            </h2>
            <p className="max-w-[48ch] text-forest/85">
              D'étudiant à entrepreneur : ce que disent les sites officiels, sans jargon. Répondez à quelques questions pour voir d'abord ce qui vous concerne.
            </p>
            <ol className="space-y-4">
              {PATH.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                  <span className="tabular font-display text-3xl font-extrabold leading-none text-olive" style={{ fontStretch: "75%" }} aria-hidden>{i + 1}</span>
                  <div>
                    <p className="font-bold">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="panel p-5 text-forest md:p-8">
            <>
                <h3 className="font-display text-xl font-bold" style={{ fontStretch: "90%" }}>Votre situation</h3>
                <p className="mt-1 text-sm text-muted-foreground">Vos réponses restent dans votre navigateur : elles ne sont pas enregistrées.</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {content.questionnaire.map((q) => (
                    <label key={q.id} className="space-y-1 text-sm font-bold">
                      {q.label}
                      <select
                        value={answers[q.id] ?? ""}
                        onChange={(e) => setAnswers((a) => {
                          const next = { ...a };
                          if (e.target.value) next[q.id] = e.target.value;
                          else delete next[q.id];
                          return next;
                        })}
                        className="field"
                      >
                        <option value="">Choisir…</option>
                        {q.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </label>
                  ))}
                </div>

                {result && result.alerts.length > 0 && (
                  <ul className="mt-6 space-y-3" aria-label="Points d'attention pour votre situation">
                    {result.alerts.map((a, i) => {
                      const Icon = a.level === "critical" ? OctagonAlert : a.level === "warning" ? AlertTriangle : Info;
                      return (
                        <li key={i} className={cn("rounded-[4px] border p-4 text-sm", a.level === "critical" ? "border-rust-deep bg-paper" : a.level === "warning" ? "border-kraft bg-paper" : "border-border bg-paper")}>
                          <p className="flex gap-2"><Icon className={cn("mt-0.5 h-4 w-4 shrink-0", a.level === "critical" ? "text-rust-deep" : "text-olive")} aria-hidden />{a.text}</p>
                          <SourceList sources={a.sources} />
                        </li>
                      );
                    })}
                  </ul>
                )}

                <div className="mt-8 divide-y divide-border border-y border-border">
                  {topics.map((t) => {
                    const isOpen = open === t.id;
                    const prio = result?.priorityTopics.includes(t.id);
                    return (
                      <div key={t.id}>
                        <button
                          onClick={() => setOpen(isOpen ? null : t.id)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 py-4 text-left"
                        >
                          <span>
                            <span className="font-bold">{t.title}</span>
                            {prio && <span className="ml-3 rounded-full bg-olive px-2 py-0.5 align-middle text-xs font-bold text-cream">Vous concerne</span>}
                            <span className="mt-0.5 block text-sm text-muted-foreground">{t.summary}</span>
                          </span>
                          <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-180")} aria-hidden />
                        </button>
                        {isOpen && (
                          <div className="space-y-6 pb-6">
                            {t.sections.map((s) => (
                              <div key={s.heading}>
                                <p className="font-bold">
                                  {s.heading}
                                  {s.needsIndividualCheck && <span className="ml-2 rounded-[4px] bg-kraft/40 px-1.5 py-0.5 text-xs font-bold">à vérifier selon votre cas</span>}
                                </p>
                                <div className="mt-2 text-[0.97rem]"><RichText text={s.body} /></div>
                                <SourceList sources={s.sources} />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  {content.disclaimer} Contenu revu le {formatDate(content.lastReviewed)}.
                </p>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}

export const INFO_FAQ = INFO.faq;
