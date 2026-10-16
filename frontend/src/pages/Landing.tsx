import { Plus } from "lucide-react";
import { DemarchesSection, INFO_FAQ } from "@/components/DemarchesSection";
import { RichText, SourceList } from "@/components/Layout";
import { ServicesHero, TitreSection } from "@/components/Offers";
import { asset, SITE } from "@/lib/site";

const PRODUCT_FAQ = [
  {
    question: "Quelle formule choisir ?",
    answer: `Le modèle convient si vous rédigez vous-même : vous l'adaptez à votre projet. L'accompagnement (${SITE.accompagnementPrice}) vous donne le modèle, puis votre business plan adapté à votre CV et à votre projet, livré sous ${SITE.deliveryHours} heures après réception de vos informations.`,
  },
  {
    question: "Comment est-ce que je reçois le modèle ?",
    answer: "Le paiement se fait sur Buy Me a Coffee, une plateforme de soutien aux créateurs. Une fois le café offert, le modèle PDF vous est remis directement par Buy Me a Coffee. Aucun compte n'est nécessaire sur ce site.",
  },
  {
    question: "Le business plan me garantit-il le titre « entrepreneur » ?",
    answer: "Non. La préfecture examine chaque demande individuellement : viabilité du projet, ressources, situation de séjour. Le business plan présente votre projet de façon structurée ; il ne remplace pas un conseil juridique.",
  },
  {
    question: "Que deviennent mes données ?",
    answer: "Ce site ne crée pas de compte et n'enregistre rien : les réponses au questionnaire restent dans votre navigateur. Pour l'accompagnement, votre CV et vos informations servent uniquement à préparer votre document ; le détail figure dans la politique de confidentialité.",
  },
];

export default function Landing() {
  const faq = INFO_FAQ;

  return (
    <>
      <ServicesHero />
      <TitreSection />
      <DemarchesSection />

      <section id="exemple-titre" className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[1.05]" style={{ fontStretch: "82%" }}>La mention visée</h2>
            <p className="mt-4 max-w-[50ch]">
              Au dos de la carte de séjour, la rubrique « Observations » indique l'activité autorisée : <strong>« Entrepreneur / profession libérale — exercice d'une activité non salariée »</strong>.
            </p>
            <p className="mt-4 max-w-[50ch] text-sm text-muted-foreground">
              Photo d'un titre réel, données personnelles masquées, présentée à titre d'illustration. Chaque demande est examinée individuellement par la préfecture.
            </p>
          </div>
          <figure>
            <img
              src={asset("images/titre-entrepreneur.jpg")}
              alt="Dos d'une carte de séjour française portant, dans la rubrique Observations, la mention « Entrepreneur / profession libérale — exercice d'une activité non salariée ». Les données personnelles sont floutées."
              width={1600}
              height={1050}
              loading="lazy"
              className="h-auto w-full rounded-[6px] border border-border"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">Illustration — titre réel, données personnelles masquées.</figcaption>
          </figure>
        </div>
      </section>

      <section id="questions">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[1.05]" style={{ fontStretch: "82%" }}>Questions fréquentes</h2>
          <div className="divide-y divide-border border-y border-border">
            {[...PRODUCT_FAQ.map((f) => ({ ...f, sources: [] })), ...faq].map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-bold [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <Plus className="mt-0.5 h-5 w-5 shrink-0 text-olive transition-transform group-open:rotate-45" aria-hidden />
                </summary>
                <div className="mt-3"><RichText text={f.answer} /></div>
                <SourceList sources={f.sources} />
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
