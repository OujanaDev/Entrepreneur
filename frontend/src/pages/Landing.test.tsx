import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Landing from "./Landing";
import { SITE } from "@/lib/site";

it("opens on the services, then the permit definition and documents, with no server behind it", () => {
  const fetchSpy = vi.fn();
  vi.stubGlobal("fetch", fetchSpy);
  render(<MemoryRouter><Landing /></MemoryRouter>);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/business plan de votre titre/);
  const headings = screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent ?? "");
  const order = ["Modèle de business plan", "Accompagnement", "c'est quoi", "Pièces à fournir", "étape par étape", "Questions fréquentes"];
  const positions = order.map((t) => headings.findIndex((h) => h.includes(t)));
  expect(positions.every((p) => p >= 0)).toBe(true);
  expect([...positions].sort((a, b) => a - b)).toEqual(positions);

  // The template is bought on Buy Me a Coffee; the documents list comes from the bundled content.
  const buy = screen.getAllByRole("link", { name: /Offrir un café/ });
  expect(buy.length).toBeGreaterThanOrEqual(2);
  buy.forEach((a) => expect(a).toHaveAttribute("href", SITE.buyMeACoffee));
  expect(screen.getByText("Pour tout dossier")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Demander un accompagnement/ })).toBeInTheDocument();

  expect(fetchSpy).not.toHaveBeenCalled();
  expect(document.body.textContent).not.toMatch(/\bIA\b|Claude|intelligence artificielle|Stripe/);
});
