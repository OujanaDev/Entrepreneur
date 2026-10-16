import raw from "@/content/info.json";

export interface Source {
  label: string;
  publisher: string;
  url: string;
  verifiedAt: string | null;
}

export interface InfoContent {
  lastReviewed: string;
  disclaimer: string;
  topics: {
    id: string;
    title: string;
    summary: string;
    sections: { heading: string; body: string; sources: Source[]; needsIndividualCheck: boolean }[];
  }[];
  faq: { question: string; answer: string; sources: Source[] }[];
  officialLinks: (Source & { description: string })[];
  questionnaire: { id: string; label: string; help: string; options: { value: string; label: string }[] }[];
  rules: { id: string; when?: Record<string, string[]>; topics?: string[]; alerts?: Alert[] }[];
}

export interface Alert {
  level: "info" | "warning" | "critical";
  text: string;
  sources?: Source[];
}

export interface Personalized {
  matchedRules: string[];
  priorityTopics: string[];
  alerts: Alert[];
}

/** Sourced administrative content, bundled with the site. */
export const INFO = raw as unknown as InfoContent;

const LEVEL = { critical: 0, warning: 1, info: 2 } as const;

/** A rule matches when every answer it names is among its listed values. Runs in the browser; nothing is sent. */
export function personalize(content: InfoContent, answers: Record<string, string>): Personalized {
  const allowed = new Map(content.questionnaire.map((q) => [q.id, new Set(q.options.map((o) => o.value))]));
  const clean = Object.fromEntries(Object.entries(answers).filter(([k, v]) => allowed.get(k)?.has(v)));
  const matchedRules: string[] = [];
  const priorityTopics: string[] = [];
  const alerts: Alert[] = [];
  for (const rule of content.rules) {
    if (!Object.entries(rule.when ?? {}).every(([q, values]) => values.includes(clean[q]))) continue;
    matchedRules.push(rule.id);
    for (const t of rule.topics ?? []) if (!priorityTopics.includes(t)) priorityTopics.push(t);
    alerts.push(...(rule.alerts ?? []));
  }
  alerts.sort((a, b) => (LEVEL[a.level] ?? 3) - (LEVEL[b.level] ?? 3));
  return { matchedRules, priorityTopics, alerts };
}
