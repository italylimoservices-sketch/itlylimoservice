export type MacroRegion = "north" | "central" | "south" | "islands";

const macroRegionByRegion: Record<string, MacroRegion> = {
  Lombardy: "north",
  Veneto: "north",
  Piedmont: "north",
  Liguria: "north",
  "Emilia-Romagna": "north",
  Lazio: "central",
  Tuscany: "central",
  Campania: "south",
  Puglia: "south",
  Sicily: "islands",
  Sardinia: "islands",
};

export const macroRegionLabels: Record<MacroRegion, { en: string; it: string }> = {
  north: { en: "Northern Italy", it: "Nord Italia" },
  central: { en: "Central Italy", it: "Italia Centrale" },
  south: { en: "Southern Italy", it: "Sud Italia" },
  islands: { en: "Italian Islands", it: "Isole Italiane" },
};

export const macroRegionOrder: MacroRegion[] = ["north", "central", "south", "islands"];

export function getMacroRegion(region: string): MacroRegion {
  return macroRegionByRegion[region] ?? "central";
}
