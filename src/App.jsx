import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CountriesPage } from "./pages/CountriesPage";
import { CountryDetailPage } from "./pages/CountryDetailPage";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

export default function App() {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
  }, [darkMode]);

  return (
    <main className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Países del Mundo</h1>
      <button
        className="theme-button"
        onClick={toggleTheme}
        aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
        title={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      <Routes>
        <Route path="/" element={<Navigate replace to="/countries" />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:cca2" element={<CountryDetailPage />} />
      </Routes>
    </main>
  );
}
