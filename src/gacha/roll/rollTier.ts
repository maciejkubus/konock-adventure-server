import { HeroTier } from 'src/assets/interfaces/hero.interface';

const tierRates: { tier: HeroTier, chance: number }[] = [
  { tier: "legendary", chance: 1 },
  { tier: "epic", chance: 10 },
  { tier: "rare", chance: 30 },
  { tier: "normal", chance: 200 }
];

export function rollTier(): HeroTier {

  const total = tierRates.reduce((sum, rate) => sum + rate.chance, 0);
  const roll = Math.random() * total;

  let cumulative = 0;
  for (const rate of tierRates) {
    cumulative += rate.chance;
    if (roll <= cumulative) {
      return rate.tier;
    }
  }

  return 'normal'; // fallback
}
