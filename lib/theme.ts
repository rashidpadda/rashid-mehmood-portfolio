export const categoryPalette: Record<string, { badge: string; dot: string }> = {
  'Frontend Development': { badge: 'bg-violet-100 text-violet-700 dark:bg-violet-400/15 dark:text-violet-300', dot: 'bg-violet-600 dark:bg-violet-400' },
  'Backend & Architecture': { badge: 'bg-blue-100 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300', dot: 'bg-blue-600 dark:bg-blue-400' },
  'Blockchain & Web3': { badge: 'bg-pink-100 text-pink-700 dark:bg-pink-400/15 dark:text-pink-300', dot: 'bg-pink-600 dark:bg-pink-400' },
  'Integrations & DevOps': { badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300', dot: 'bg-emerald-600 dark:bg-emerald-400' },
  'IT Infrastructure & Networking': { badge: 'bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300', dot: 'bg-amber-600 dark:bg-amber-400' },
  'Practices': { badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300', dot: 'bg-cyan-600 dark:bg-cyan-400' },
};

const fallbackPalette = [
  categoryPalette['Frontend Development'],
  categoryPalette['Backend & Architecture'],
  categoryPalette['Blockchain & Web3'],
  categoryPalette['Integrations & DevOps'],
];

export function getCategoryColor(category: string, index = 0) {
  return categoryPalette[category] ?? fallbackPalette[index % fallbackPalette.length];
}
