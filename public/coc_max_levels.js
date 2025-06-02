/**
 * This data was entirely generated with the assistance of an AI (Google Gemini).
 * It contains maximum levels for troops, spells, and heroes for each Town Hall (TH) level.
 * Data is based on the game state up to TH16 (released late 2023).
 * TH17 levels are placeholders and must be updated upon official release.
 */

const COC_MAX_LEVELS_BY_TH = {
  // Nível da arma do Centro da Vila (Town Hall Weapon Level)
  townHallWeaponLevels: {
    15: 5,
    16: 5, // A arma do CV16 é o Giga Inferno Level 10, mas a Supercell manteve a numeração 'arma do CV' como 5
    17: 5, // Placeholder para CV17
  },

  // Tropas (Home Village) - Nível máximo para cada TH
  troops: {
    Barbarian: { 15: 11, 16: 12, 17: 13 },
    Archer: { 15: 11, 16: 12, 17: 13 },
    Giant: { 15: 11, 16: 12, 17: 13 },
    Goblin: { 15: 9, 16: 9, 17: 10 },
    "Wall Breaker": { 15: 11, 16: 12, 17: 13 },
    Balloon: { 15: 10, 16: 11, 17: 12 },
    Wizard: { 15: 10, 16: 11, 17: 12 },
    Healer: { 15: 8, 16: 9, 17: 10 },
    Dragon: { 15: 9, 16: 10, 17: 11 },
    "P.E.K.K.A": { 15: 10, 16: 11, 17: 12 },
    Minion: { 15: 9, 16: 10, 17: 11 },
    "Hog Rider": { 15: 11, 16: 12, 17: 13 },
    Valkyrie: { 15: 9, 16: 10, 17: 11 },
    Golem: { 15: 10, 16: 11, 17: 12 },
    Witch: { 15: 5, 16: 6, 17: 7 },
    "Lava Hound": { 15: 6, 16: 7, 17: 8 },
    Bowler: { 15: 5, 16: 6, 17: 7 },
    "Baby Dragon": { 15: 8, 16: 9, 17: 10 },
    Miner: { 15: 8, 16: 9, 17: 10 },
    "Electro Dragon": { 15: 6, 16: 7, 17: 8 },
    Yeti: { 15: 4, 16: 5, 17: 6 },
    "Dragon Rider": { 15: 3, 16: 4, 17: 5 },
    "Electro Titan": { 15: 2, 16: 3, 17: 4 },
    "Root Rider": { 15: 1, 16: 2, 17: 3 }, // Lançada no CV16
    Druid: { 15: 1, 16: 2, 17: 3 }, // Exemplo de nova tropa
    "Apprentice Warden": { 15: 1, 16: 2, 17: 3 }, // Exemplo de nova tropa

    // Super Tropas - Nível máximo (geralmente ligado ao nível da tropa base)
    "Super Barbarian": { 15: 8, 16: 9, 17: 10 },
    "Super Archer": { 15: 9, 16: 10, 17: 11 },
    "Sneaky Goblin": { 15: 9, 16: 10, 17: 11 },
    "Super Wall Breaker": { 15: 9, 16: 10, 17: 11 },
    "Super Giant": { 15: 9, 16: 10, 17: 11 },
    "Super Wizard": { 15: 9, 16: 10, 17: 11 },
    "Super Dragon": { 15: 10, 16: 11, 17: 12 },
    "Super Witch": { 15: 7, 16: 8, 17: 9 },
    "Super Minion": { 15: 10, 16: 11, 17: 12 },
    "Super Valkyrie": { 15: 11, 16: 12, 17: 13 },
    "Super Bowler": { 15: 9, 16: 10, 17: 11 },
    "Super Miner": { 15: 11, 16: 12, 17: 13 },
    "Super Hog Rider": { 15: 11, 16: 12, 17: 13 },
    "Super Yeti": { 15: 7, 16: 8, 17: 9 },
    "Super Dragon Rider": { 15: 3, 16: 4, 17: 5 }, // Exemplo
    "Super Electro Titan": { 15: 2, 16: 3, 17: 4 }, // Exemplo

    // Máquinas de Cerco - Nível máximo
    "Wall Wrecker": { 15: 5, 16: 6, 17: 7 },
    "Battle Blimp": { 15: 4, 16: 5, 17: 6 },
    "Stone Slammer": { 15: 5, 16: 6, 17: 7 },
    "Siege Barracks": { 15: 4, 16: 5, 17: 6 },
    "Log Launcher": { 15: 5, 16: 6, 17: 7 },
    "Flame Flinger": { 15: 3, 16: 4, 17: 5 },
    "Battle Drill": { 15: 5 }, // Exemplo de nova máquina
  },

  // Heróis (Home Village) - Nível máximo para cada TH
  heroes: {
    "Barbarian King": { 15: 90, 16: 95, 17: 100 },
    "Archer Queen": { 15: 90, 16: 95, 17: 100 },
    "Grand Warden": { 15: 65, 16: 70, 17: 75 },
    "Royal Champion": { 15: 40, 16: 45, 17: 50 },
    "Minion Prince": { 15: 70, 16: 80, 17: 90 },
  },

  // Feitiços (Home Village) - Nível máximo para cada TH
  spells: {
    "Lightning Spell": { 15: 11, 16: 12, 17: 13 },
    "Healing Spell": { 15: 10, 16: 11, 17: 12 },
    "Rage Spell": { 15: 7, 16: 8, 17: 9 },
    "Jump Spell": { 15: 5, 16: 6, 17: 7 },
    "Freeze Spell": { 15: 7, 16: 8, 17: 9 },
    "Poison Spell": { 15: 10, 16: 11, 17: 12 },
    "Earthquake Spell": { 15: 5, 16: 6, 17: 7 },
    "Haste Spell": { 15: 5, 16: 6, 17: 7 },
    "Clone Spell": { 15: 8, 16: 9, 17: 10 },
    "Skeleton Spell": { 15: 7, 16: 8, 17: 9 },
    "Bat Spell": { 15: 6, 16: 7, 17: 8 },
    "Invisibility Spell": { 15: 4, 16: 5, 17: 6 },
    "Recall Spell": { 15: 3, 16: 4, 17: 5 },
    "Overgrowth Spell": { 15: 1, 16: 2, 17: 3 },
    "Spirit Fox": { 15: 1, 16: 2, 17: 3 }, // Exemplo de novo feitiço
  },

  // Tropas e Heróis da Base do Construtor - Nível máximo para cada TH da Base do Construtor
  // Assumimos que o CV 15 da Vila Principal corresponde ao BH 10 da Base do Construtor atualmente.
  // Ajuste os THs da Builder Base conforme as atualizações.
  builderBase: {
    troops: {
      "Raged Barbarian": { 10: 20, 11: 22, 12: 24 }, // BH 11, 12 como placeholders
      "Sneaky Archer": { 10: 20, 11: 22, 12: 24 },
      "Beta Minion": { 10: 20, 11: 22, 12: 24 },
      "Boxer Giant": { 10: 20, 11: 22, 12: 24 },
      Bomber: { 10: 20, 11: 22, 12: 24 },
      "Baby Dragon": { 10: 20, 11: 22, 12: 24 },
      "Cannon Cart": { 10: 20, 11: 22, 12: 24 },
      "Night Witch": { 10: 20, 11: 22, 12: 24 },
      "Drop Ship": { 10: 20, 11: 22, 12: 24 },
      "Hog Glider": { 10: 20, 11: 22, 12: 24 },
      "Electrofire Wizard": { 10: 20, 11: 22, 12: 24 },
    },
    heroes: {
      "Battle Machine": { 10: 30, 11: 35, 12: 40 },
      "Battle Copter": { 10: 30, 11: 35, 12: 40 },
    },
  },
};
