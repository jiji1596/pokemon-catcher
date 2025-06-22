export function getDifficulty(stats) {
  const hp = stats.find((s) => s.stat.name === "hp").base_stat;
  const attack = stats.find((s) => s.stat.name === "attack").base_stat;
  const defense = stats.find((s) => s.stat.name === "defense").base_stat;

  const strength = hp + attack + defense;
  let tier = "";
  if (strength <= 150) {
    tier = "Easy";
  } else if (strength <= 250) {
    tier = "Intermediate";
  } else {
    tier = "Difficult";
  }

  return tier;
}

export async function getTypeImage(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data.sprites["generation-viii"]["sword-shield"].name_icon;
}
