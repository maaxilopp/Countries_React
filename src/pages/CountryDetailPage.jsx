import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

  return (
    <>
      <Link to="/countries" className="back-button">
        ← Volver al menú
      </Link>
      {error && <p>{error}</p>}
      {!error && !country && <p>Cargando...</p>}
      {country && <CountryCard country={country} />}
    </>
  );
}
