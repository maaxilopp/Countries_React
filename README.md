<div align="center">

# 🌍 Países del Mundo

**Explorá los 250 países del mundo, su bandera y la hora exacta en cada uno.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Maximiliano López](https://img.shields.io/badge/GitHub-Maximiliano_López-B7E3FF?logo=github&logoColor=black)](https://github.com/maaxilopp)

Trabajo práctico de **Desarrollo Web y Mobile** - UT5

</div>

---

<img width="400" height="200" alt="image" src="https://github.com/user-attachments/assets/6cda0e33-7845-477d-8001-bb332e60d0c6" />
<img width="400" height="200" alt="image" src="https://github.com/user-attachments/assets/a731971a-851d-4655-935c-3b757278cc5b" />
<img width="100" height="200" alt="image" src="https://github.com/user-attachments/assets/2480c20f-d08b-4ec9-b195-0cc4164b28a1" />
<img width="100" height="200" alt="image" src="https://github.com/user-attachments/assets/c0d2883f-8574-4a6c-b37e-50428e73e312" />


---

## ✨ Qué hace

Una SPA que consume la API pública de [countries.dev](https://countries.dev) y resuelve toda la navegación del lado del cliente con **react-router**, sin recargas.
| 🌙 **Dark mode** | Selector claro/oscuro en todas las páginas, recordado entre visitas |

| | |
|---|---|
| 🗂️ **Catálogo completo** | Los 250 países ordenados alfabéticamente, en una grilla responsive |
| 🔎 **Detalle por país** | Bandera, capital y código ISO alpha-2 |
| 🕐 **Hora real** | Reloj analógico y digital con el huso horario del país, al segundo |
| 🔗 **URLs compartibles** | Cada país vive en su propia ruta: `/countries/UY` |
| ⚡ **Estados manejados** | Carga y error cubiertos en ambas vistas |

## 🧭 Rutas

| Ruta | Componente | Qué muestra |
|---|---|---|
| `/` | `<Navigate>` | Redirige a `/countries` |
| `/countries` | `CountriesPage` | Grilla de países con nombre y bandera |
| `/countries/:cca2` | `CountryDetailPage` | Detalle del país según su código ISO |

## 🛠️ Stack

**React** · **Context API** · **Vite** · **React Router** · **react-clock** · **dayjs** · **countries.dev API**

## 🚀 Cómo ejecutarlo

```bash
git clone https://github.com/maaxilopp/GeneradorPaises-Dwym.git
cd GeneradorPaises-Dwym
npm install
npm run dev
```

Abrí el navegador en la URL que imprime la terminal (por defecto `http://localhost:5173`).

> No hace falta API key ni levantar un backend: countries.dev es pública y responde con CORS abierto.

## 📁 Estructura

```bash
src/
├── api/
│   └── countries.js        # Llamadas a la API: lista, por código y al azar
├── componentes/
│   ├── CountryCard.jsx     # Nombre, código y bandera
│   └── CountryClock.jsx    # Reloj analógico + hora digital
├── context/
│   └── ThemeContext.jsx    # Estado del modo claro/oscuro + localStorage
├── hooks/
│   ├── useRandomCountry.js # País al azar, con carga y error
│   └── useZonedClock.js    # Hora del huso horario, refrescada cada segundo
├── pages/
│   ├── CountriesPage.jsx   # Listado
│   └── CountryDetailPage.jsx
├── utils/
│   └── time.js             # Normaliza el huso horario de la API
└── App.jsx                 # Definición de rutas y selector de modo
```


## 🧩 Decisiones técnicas

- **Banderas vía `flagcdn.com`.** El endpoint `/countries` de countries.dev devuelve la bandera como emoji, que Windows no renderiza. Se arma la URL de la imagen a partir del código ISO.
- **`useParams` como fuente de verdad.** El detalle no recibe props: lee el código de la URL, así un enlace directo funciona igual que navegar desde la lista.
- **Refetch al cambiar de país.** El `useEffect` depende de `cca2`, para que navegar entre detalles recargue los datos.
- - **Tema global con Context.** `ThemeProvider` envuelve la app en `main.jsx`, así cualquier componente accede al modo con `useTheme()` sin pasar props.
- **Preferencia persistente.** El modo se lee de `localStorage` al iniciar y se guarda cada vez que cambia, así la app abre como la dejó el usuario.
- **Clases según el modo.** El `<main>` recibe `dark-mode` o `light-mode`, y el CSS ajusta colores a partir de esa clase.

---

<div align="center">
<sub>Maximiliano López · 2026</sub>
</div>
