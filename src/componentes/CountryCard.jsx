import { CountryClock } from "./CountryClock";

export function CountryCard({ country }) {
  const { name, alpha2Code, capital, flags, timezones } = country;
  return (
    <article className="card">
      <h3>¡Bienvenido! Hoy aprenderemos sobre:</h3>
      <h1>
        {name} <span className="code">{alpha2Code}</span>
      </h1>
      <h2>
        La capital de {name} es {capital}
      </h2>
      <h3>Esta es su bandera:</h3>
      <img className="flag" src={flags.svg} alt={`Bandera de ${name}`} />
      <h3>Y esta es su hora local:</h3>
      <CountryClock timezone={timezones[0]} />
    </article>
  );
}
