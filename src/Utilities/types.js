export const Types = {
    POISON: 'poison',
    GRASS: 'grass',
    FIRE: 'fire',
    WATER: 'water',
    ELECTRIC: 'electric',
    GROUND: 'ground',
    FLYING: 'flying',
    FIGHTING: 'fighting',
    PSYCHIC: 'psychic',
    ROCK: 'rock',
    ICE: 'ice',
    BUG: 'bug',
    DRAGON: 'dragon',
    GHOST: 'ghost',
    DARK: 'dark',
    STEEL: 'steel',
    FAIRY: 'fairy',
    NORMAL: 'normal',
  }
  
  export const getTypeColor = (type) => {
    switch (type) {
      case Types.POISON:
        return '#a040a0';
      case Types.GRASS:
        return '#40a040';
      case Types.FIRE:
        return '#ff4040';
      case Types.WATER:
        return '#40a0ff';
      case Types.ELECTRIC:
        return '#ffd040';
      case Types.GROUND:
        return '#e0c068';
      case Types.FLYING:
        return '#a0c0ff';
      case Types.FIGHTING:
        return '#c04040';
      case Types.PSYCHIC:
        return '#ff40ff';
      case Types.ROCK:
        return '#c0c040';
      case Types.ICE:
        return '#c0f0ff';
      case Types.BUG:
        return '#a0d040';
      case Types.DRAGON:
        return '#4040ff';
      case Types.GHOST:
        return '#707070';
      case Types.DARK:
        return '#704040';
      case Types.STEEL:
        return '#c0c0c0';
      case Types.FAIRY:
        return '#ffa0ff';
      case Types.NORMAL:
        return '#a0a0a0';
      default:
        return '#000000';
    }
  }