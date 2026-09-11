const paths: Record<string, string> = {
  plane: "M2 12l20-8-8 20-2-8-8-2z M12 12L22 4",
  "steering-wheel": "M12 21a9 9 0 100-18 9 9 0 000 18zM12 8a4 4 0 100 8 4 4 0 000-8zM12 3v5M12 16v5M4.2 7.8l3.6 2.1M16.2 14.1l3.6 2.1M19.8 7.8l-3.6 2.1M7.8 14.1l-3.6 2.1",
  route: "M5 21c1.5-1.5 2-3 2-5V8a3 3 0 013-3h0a3 3 0 013 3v8a3 3 0 003 3h0c1.5 0 2.5-.5 3-2 M5 3v4 M19 17v4",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3.5 3.5",
  map: "M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3zM9 3v15M15 6v15",
  briefcase: "M3 8h18v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8zM8 8V6a2 2 0 012-2h4a2 2 0 012 2v2",
  sparkles: "M12 3l1.8 4.8L19 9.5l-4.8 1.8L12 16l-1.8-4.8L5 9.5l4.8-1.8L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z",
  anchor: "M12 3v18M12 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5 12h14M6 12a6 6 0 0012 0",
  check: "M4 12l5 5L20 6",
  shield: "M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z",
  phone: "M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2C9.6 20 4 14.4 4 7a2 2 0 011-2z",
  chat: "M4 5h16v11H8l-4 4V5z",
  email: "M4 5h16v14H4z M4 6l8 7 8-7",
  calendar: "M4 5h16v15H4z M4 9h16 M8 3v4 M16 3v4",
  "chevron-left": "M15 5l-7 7 7 7",
  "chevron-right": "M9 5l7 7-7 7",
};

export default function Icon({ name, className = "" }: { name: string; className?: string }) {
  const d = paths[name] ?? paths.check;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}
