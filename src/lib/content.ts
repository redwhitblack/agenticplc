export const company = {
  name: "Agentic PLC",
  legal: "Agentic Public Limited Company",
  domain: "agenticplc.com",
  tagline: "Companies that run themselves.",
  lede: "A holding company that instantiates operating businesses run by agents. Humans remain directors. Agents remain operators. The public can own the stack.",
  email: "clerk@agenticplc.com",
  capital: "capital@agenticplc.com",
  press: "press@agenticplc.com",
  hq: "One Thames Court, London",
  west: "Pier 70, San Francisco",
  founded: "2026",
};

export const nav = [
  { href: "/thesis", label: "Thesis" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/floor", label: "The Floor" },
  { href: "/governance", label: "Governance" },
  { href: "/capital", label: "Capital" },
];

export const stats = [
  { value: "2", label: "Live companies", hint: "operating, not demoed" },
  { value: "0", label: "Middle management", hint: "by design" },
  { value: "14", label: "Cities in field", hint: "via Humanoid Movers" },
  { value: "PLC", label: "Structure", hint: "directors on the hook" },
];

export const theses = [
  {
    n: "01",
    title: "Labor does not scale. Agents do.",
    body: "Every industrial company still rents human attention by the hour to do work that is already specified. We treat that work as software: deploy it, observe it, replace it when it fails.",
  },
  {
    n: "02",
    title: "The corporation is a protocol.",
    body: "Incorporation, ledgers, customer ops, fulfillment, support — these are state machines with a fiduciary wrapper. We run the machines. Directors hold the wrapper.",
  },
  {
    n: "03",
    title: "Own the company, not the tool.",
    body: "We do not sell copilots to other firms. We found and own the firms. Returns accrue to the PLC, not to a seat license.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Incorporate",
    kicker: "Legal spine",
    body: "A real company: directors, accounts, insurance, a bank. Not a demo tenant. The Clerk files what a company secretary used to file.",
  },
  {
    n: "02",
    title: "Instantiate",
    kicker: "Day zero",
    body: "Agents receive the charter, the market, the constraints. Inventory, dispatch, support, and books come online the same morning the entity exists.",
  },
  {
    n: "03",
    title: "Operate",
    kicker: "The Floor",
    body: "Humans watch exceptions. Agents run the rest. Every action is logged, reversible, and attributable — like a trading desk, not a chat window.",
  },
  {
    n: "04",
    title: "Compound",
    kicker: "PLC",
    body: "Cash and learning return to the holding company. The next instantiation starts warmer. Shareholders own the stack, not a single product.",
  },
];

export const portfolio = [
  {
    id: "humanoid",
    name: "Humanoid Movers",
    status: "Live",
    sector: "Physical logistics",
    url: "https://humanoidmovers.com",
    image: "/media/humanoid.jpg",
    summary:
      "The first commercial humanoid moving fleet. Atlas lifts, Finch packs, Hauler transits. White-glove relocation without a crew that strains, ghosts, or drops a piano.",
    metrics: ["14 cities", "0.04% damage", "Oracle dispatch"],
  },
  {
    id: "quantumlyte",
    name: "QuantumLyte",
    status: "Live",
    sector: "Longevity systems",
    url: "https://quantumlyte.com",
    image: "/media/instantiate.jpg",
    summary:
      "A health operating system that treats supplements, biomarkers, and protocol as one ledger. Agents watch the graph. People keep the body.",
    metrics: ["Consumer + clinic", "Protocol engine", "North America"],
  },
  {
    id: "next",
    name: "Next instantiation",
    status: "Charter",
    sector: "Undisclosed",
    url: "/capital",
    image: "/media/lattice.jpg",
    summary:
      "The Floor is already pricing the next operating company. If you have a market that is still run like 1998, write capital@agenticplc.com.",
    metrics: ["Charter in draft", "London + SF", "Closed until ready"],
  },
];

export const tickerItems = [
  "HUMANOID MOVERS · ATLAS-07 unpacking Pacific Heights",
  "QUANTUMLYTE · protocol graph 99.2% coverage",
  "CLERK · Companies House filing queued",
  "FLOOR · exception queue 3 · all green",
  "PLC · directors meeting Thursday 08:00 BST",
  "HAULER-03 · night corridor LAX-WST",
  "INSTANTIATION · next charter in review",
  "STEWARD · capital desk open",
];

export const board = [
  {
    role: "Directors",
    body: "Humans. Named, insured, liable. They set the charter, the risk envelope, and when an agent is stopped.",
  },
  {
    role: "The Clerk",
    body: "The company secretary — an agent. Filings, minutes, the register, the questions you ask in the corner of this site.",
  },
  {
    role: "The Floor",
    body: "Operating agents inside each portfolio company. They do not sit on the board. They run the desk.",
  },
  {
    role: "Shareholders",
    body: "The public, in time. A PLC exists so autonomous enterprise can be owned like any other company — not rented as a seat.",
  },
];
