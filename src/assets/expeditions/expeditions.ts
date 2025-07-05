import { caveBat } from "../enemies/caves/caveBat";
import { caveSlime } from "../enemies/caves/caveSlime";
import { caveSpider } from "../enemies/caves/caveSpider";
import { caveTroll } from "../enemies/caves/caveTroll";
import { caveWraith } from "../enemies/caves/caveWraith";
import { desertBandit } from "../enemies/desert/desertBandit";
import { duneSerpent } from "../enemies/desert/duneSerpent";
import { sandScorpion } from "../enemies/desert/sandScorpion";
import { sandWitch } from "../enemies/desert/sandWitch";
import { scorchingMummy } from "../enemies/desert/scorchingMummy";
import { dungeonRat } from "../enemies/dungeon/dungeonRat";
import { dungeonSlime } from "../enemies/dungeon/dungeonSlime";
import { necromancer } from "../enemies/dungeon/necromancer";
import { possessedArmor } from "../enemies/dungeon/possessedArmor";
import { undeadKnight } from "../enemies/dungeon/undeadKnight";
import { forestBear } from "../enemies/forest/forestBear";
import { forestHawk } from "../enemies/forest/forestHawk";
import { forestSpider } from "../enemies/forest/forestSpider";
import { forestTreant } from "../enemies/forest/forestTreant";
import { forestWolf } from "../enemies/forest/forestWolf";
import { Expedition } from "../interfaces/expedition.interface";

export const expeditions: Expedition[] = [
  // FOREST
  { id: 1, biome: "forest", name: "Forest Entrance", enemies: [forestWolf] },
  { id: 2, biome: "forest", name: "Forest Road", enemies: [forestWolf, forestWolf] },
  { id: 3, biome: "forest", name: "Webbed Path", enemies: [forestSpider, forestWolf] },
  { id: 4, biome: "forest", name: "Overgrown Trail", enemies: [forestSpider, forestTreant] },
  { id: 5, biome: "forest", name: "Hawk's Nest", enemies: [forestHawk, forestHawk] },
  { id: 6, biome: "forest", name: "Shaking Trees", enemies: [forestTreant, forestWolf, forestSpider] },
  { id: 7, biome: "forest", name: "Clearing Ambush", enemies: [forestBear, forestHawk] },
  { id: 8, biome: "forest", name: "Deep Forest", enemies: [forestBear, forestTreant, forestWolf] },
  { id: 9, biome: "forest", name: "Cursed Roots", enemies: [forestSpider, forestBear, forestTreant] },
  { id: 10, biome: "forest", name: "Heart of the Forest", enemies: [forestBear, forestBear, forestHawk] },

  // DESERT
  { id: 11, biome: "desert", name: "Dune Path", enemies: [sandScorpion] },
  { id: 12, biome: "desert", name: "Bandit Hideout", enemies: [desertBandit, desertBandit] },
  { id: 13, biome: "desert", name: "Scorched Stones", enemies: [scorchingMummy] },
  { id: 14, biome: "desert", name: "Poisoned Sands", enemies: [sandScorpion, sandScorpion, desertBandit] },
  { id: 15, biome: "desert", name: "Sunset Ruins", enemies: [desertBandit, scorchingMummy, sandScorpion] },
  { id: 16, biome: "desert", name: "Dune Serpent Nest", enemies: [duneSerpent, duneSerpent] },
  { id: 17, biome: "desert", name: "Whispering Winds", enemies: [sandWitch, scorchingMummy] },
  { id: 18, biome: "desert", name: "Ancient Tomb", enemies: [scorchingMummy, duneSerpent, desertBandit] },
  { id: 19, biome: "desert", name: "Sands of Pain", enemies: [sandWitch, sandScorpion, duneSerpent] },
  { id: 20, biome: "desert", name: "Desert King’s Wrath", enemies: [sandWitch, scorchingMummy, duneSerpent] },

  // CAVES
  { id: 21, biome: "caves", name: "Cave Mouth", enemies: [caveBat] },
  { id: 22, biome: "caves", name: "Sticky Webs", enemies: [caveSpider] },
  { id: 23, biome: "caves", name: "Dripping Echo", enemies: [caveBat, caveSpider] },
  { id: 24, biome: "caves", name: "Twisting Tunnels", enemies: [caveSpider, caveSlime] },
  { id: 25, biome: "caves", name: "Stone Maw", enemies: [caveTroll] },
  { id: 26, biome: "caves", name: "Black Ooze", enemies: [caveSlime, caveBat] },
  { id: 27, biome: "caves", name: "Troll’s Hall", enemies: [caveTroll, caveSlime] },
  { id: 28, biome: "caves", name: "Wraith’s Whisper", enemies: [caveWraith] },
  { id: 29, biome: "caves", name: "Shadow Depths", enemies: [caveWraith, caveSpider, caveBat] },
  { id: 30, biome: "caves", name: "Cavern of Fear", enemies: [caveTroll, caveWraith, caveSlime] },

  // DUNGEON
  { id: 31, biome: "dungeon", name: "Broken Hallway", enemies: [dungeonRat] },
  { id: 32, biome: "dungeon", name: "Haunted Guardpost", enemies: [undeadKnight] },
  { id: 33, biome: "dungeon", name: "Bone Pile", enemies: [dungeonRat, undeadKnight] },
  { id: 34, biome: "dungeon", name: "Dark Library", enemies: [necromancer] },
  { id: 35, biome: "dungeon", name: "Ooze Chambers", enemies: [dungeonSlime, dungeonRat] },
  { id: 36, biome: "dungeon", name: "Shadow Ritual", enemies: [necromancer, dungeonSlime] },
  { id: 37, biome: "dungeon", name: "Cursed Armor Pit", enemies: [possessedArmor] },
  { id: 38, biome: "dungeon", name: "Undead Legion", enemies: [undeadKnight, dungeonRat, necromancer] },
  { id: 39, biome: "dungeon", name: "Crypt Depths", enemies: [possessedArmor, necromancer] },
  { id: 40, biome: "dungeon", name: "Throne of Despair", enemies: [possessedArmor, undeadKnight, dungeonSlime] }
];