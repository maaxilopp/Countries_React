import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryCard } from "../componentes/CountryCard";
import { getCountryByCode } from "../api/countries";

export function CountryDetailPage() {
  const { cca2 } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCountry(null);
    setError(null);
    getCountryByCode(cca2)
      .then(setCountry)
      .catch((e) => setError(e.message));
  }, [cca2]);

  if (error) return <p>{error}</p>;
  if (!country) return <p>Cargando...</p>;

  return <CountryCard country={country} />;
}
