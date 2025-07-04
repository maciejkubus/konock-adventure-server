
// Forest enemies
import { forestBear } from "./forest/forestBear";
import { forestHawk } from "./forest/forestHawk";
import { forestSpider } from "./forest/forestSpider";
import { forestTreant } from "./forest/forestTreant";
import { forestWolf } from "./forest/forestWolf";

// Desert enemies
import { desertBandit } from "./desert/desertBandit";
import { duneSerpent } from "./desert/duneSerpent";
import { sandScorpion } from "./desert/sandScorpion";
import { sandWitch } from "./desert/sandWitch";
import { scorchingMummy } from "./desert/scorchingMummy";

// Caves enemies
import { caveBat } from "./caves/caveBat";
import { caveSlime } from "./caves/caveSlime";
import { caveSpider } from "./caves/caveSpider";
import { caveTroll } from "./caves/caveTroll";
import { caveWraith } from "./caves/caveWraith";

// Dungeon enemies
import { dungeonRat } from "./dungeon/dungeonRat";
import { dungeonSlime } from "./dungeon/dungeonSlime";
import { necromancer } from "./dungeon/necromancer";
import { possessedArmor } from "./dungeon/possessedArmor";
import { undeadKnight } from "./dungeon/undeadKnight";

export const enemies = {
  forest: [forestWolf, forestSpider, forestTreant, forestHawk, forestBear],
  desert: [sandScorpion, desertBandit, scorchingMummy, duneSerpent, sandWitch],
  caves: [caveBat, caveSpider, caveTroll, caveSlime, caveWraith],
  dungeon: [dungeonRat, undeadKnight, necromancer, dungeonSlime, possessedArmor],
};
