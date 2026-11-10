export const categoryPalette: Record<string, { dot: string }> = {
  'Frontend Development': { dot: 'bg-[#282d45]' },
  'Backend & Architecture': { dot: 'bg-[#1c2430]' },
  'Blockchain & Web3': { dot: 'bg-[#3d4668]' },
  'Integrations & DevOps': { dot: 'bg-[#4c5678]' },
  'IT Infrastructure & Networking': { dot: 'bg-[#7d8698]' },
  'Practices': { dot: 'bg-[#b7becc]' },
  'AI': { dot: 'bg-[#2a3354]' },
};

const fallbackPalette = [
  categoryPalette['Frontend Development'],
  categoryPalette['Backend & Architecture'],
  categoryPalette['AI'],
  categoryPalette['Integrations & DevOps'],
];

export function getCategoryColor(category: string, index = 0) {
  return categoryPalette[category] ?? fallbackPalette[index % fallbackPalette.length];
}
