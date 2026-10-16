/** Everything the operator may want to change, in one place. The site has no server: these values are public. */
export const SITE = {
  brand: "Cap Entrepreneur",
  /** Buy Me a Coffee shop item (Extra) that sells the template PDF and delivers it after payment. */
  buyMeACoffee: "https://buymeacoffee.com/simoudev/e/587848",
  /** Profile page, used to reach the operator when no contact e-mail is set. */
  buyMeACoffeeProfile: "https://buymeacoffee.com/simoudev",
  /** Shown on the template card; leave empty to show no price. */
  modelePrice: "",
  /** Personalised business plan, on request: payment and exchanges are handled by hand. */
  accompagnementPrice: "49 €",
  deliveryHours: 24,
  /** Contact for the personalised plan and for legal requests. Empty: visitors are sent to the Buy Me a Coffee page. */
  contactEmail: "",
};

/** Public files (images) resolve against the deploy base, e.g. "/repo/" on GitHub Pages. */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
