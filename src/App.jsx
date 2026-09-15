import { Routes, Route, Navigate } from "react-router-dom";
import { CountriesPage } from "./pages/CountriesPage";
import { CountryDetailPage } from "./pages/CountryDetailPage";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <h1>Países del Mundo</h1>
      <Routes>
        <Route path="/" element={<Navigate replace to="/countries" />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:cca2" element={<CountryDetailPage />} />
      </Routes>
    </main>
  );
}
