import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountries } from "../api/countries";

export function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries()
      .then(setCountries)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando países...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul className="country-list">
      {countries.map((c) => (
        <li key={c.alpha2Code} className="country-item">
          <Link to={c.alpha2Code} className="country-card">
            <img
              src={`https://flagcdn.com/w40/${c.alpha2Code.toLowerCase()}.png`}
              alt={`Bandera de ${c.name}`}
              width="40"
            />
            <span className="country-name" title={c.name}>
              {c.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
