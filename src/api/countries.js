export async function getRandomCountry() {
  const res = await fetch(
    "https://countries.dev/random?fields=name,alpha2Code,flags,timezones,capital",
  );
  if (!res.ok) throw new Error("No se pudo cargar el país");
  return res.json();
}
export async function getCountries() {
  const res = await fetch(
    "https://countries.dev/countries?fields=name,alpha2Code,flag&sort=name",
  );
  if (!res.ok) throw new Error("No se pudo cargar la lista");
  return res.json();
}

export async function getCountryByCode(cca2) {
  const res = await fetch(`https://countries.dev/alpha/${cca2}`);
  if (!res.ok) throw new Error("País no encontrado");
  return res.json();
}
