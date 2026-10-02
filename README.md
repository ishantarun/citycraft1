# CITYCRAFT: AI-Powered Digital Twin for Smarter, Sustainable Cities

CITYCRAFT is a full-stack, real-time Smart City Command Center and Digital Twin dashboard designed for urban planning, traffic optimization, flood risk modeling, environmental analysis, and scenario simulation.

---

## 🏛️ Architecture & Folder Structure

```
CITYCRAFT/
│
├── frontend/                     # React + TypeScript + Vite Client (Port 3000)
│   ├── src/
│   │   ├── components/           # 3D Twin, 2D Map, Overview, Simulator, AI Center, Modules
│   │   ├── context/              # Global City State & Telemetry Context
│   │   ├── services/             # REST API Client & Simulation Fallbacks
│   │   ├── types/                # TypeScript Interfaces & Metrics Models
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts            # Configured with proxy to http://localhost:5000
│
├── backend/                      # Node.js + Express + TypeScript REST API (Port 5000)
│   ├── src/
│   │   ├── server.ts             # Express REST Server Entry Point
│   │   ├── routes/               # REST Route Controllers (/api/city, /api/simulation, /api/status)
│   │   ├── services/             # Weather, Air Quality, Telemetry & Diagnostics Services
│   │   ├── data/                 # Nagpur Spatial Data & Building Definitions
│   │   └── simulation/           # CITYCRAFT Differential Rule Engine
│   ├── package.json
│   ├── tsconfig.json
│   └── .env                      # Server & External API Configurations
│
├── package.json                  # Root Monorepo Manager using `concurrently`
├── README.md
└── .env.example
```

---

## 🚀 How to Run the Application

### 1. Install Dependencies
```bash
# Install root, frontend, and backend packages concurrently
npm run install:all
```
*(Or install inside `frontend` and `backend` directories individually).*

### 2. Start Frontend & Backend Together
```bash
npm run start
```
- **Frontend Dashboard:** [http://localhost:3000](http://localhost:3000)
- **Backend API Server:** [http://localhost:5000](http://localhost:5000)
- **Backend Health Check:** [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 🌐 External APIs & Fallback System

- **Live Weather API:** Integrates with [Open-Meteo Weather API](https://open-meteo.com) for Nagpur (`lat=21.1458, lon=79.0882`) with **zero API keys required**.
- **Live Air Quality API:** Integrates with [Open-Meteo Air Quality API](https://air-quality-api.open-meteo.com) for real-time PM2.5, PM10, NO2, O3 & AQI.
- **Graceful Fallbacks:** If external services are unreachable, CITYCRAFT seamlessly transitions to its built-in fallback datasets with status tags (`LIVE`, `MODELLED`, `SIMULATED`, `DEMO`).

---

## 🛰️ Backend REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | System health check & uptime status |
| `GET` | `/api/city/overview` | Returns City Health Score, Traffic, AQI, Flood, Energy & Green metrics |
| `GET` | `/api/city/traffic` | Returns congestion %, travel times, speed & hourly congestion trend |
| `GET` | `/api/city/flood` | Returns rainfall mm, water levels & vulnerable spatial zones |
| `GET` | `/api/city/environment` | Returns live AQI, pollutant breakdown & urban heat island zones |
| `GET` | `/api/city/energy` | Returns grid demand MW, renewable energy % & top consumers |
| `GET` | `/api/city/buildings` | Returns 3D procedural building metadata for digital twin |
| `GET` | `/api/city/roads` | Returns spatial road polylines & congestion colors |
| `GET` | `/api/city/zones` | Returns city sector bounds & population densities |
| `GET` | `/api/city/live-weather` | Direct live Open-Meteo weather endpoint |
| `GET` | `/api/city/air-quality` | Direct live Open-Meteo air quality endpoint |
| `GET` | `/api/recommendations` | Returns rule-based AI decision recommendations |
| `POST` | `/api/simulation/run` | Executes urban differential solver for What-If parameters |
| `POST` | `/api/simulation/compare` | Evaluates Options A, B, C & D policy trade-offs |
| `GET` | `/api/status` | Returns system diagnostic latency & connection state |
| `GET` | `/api/config` | Returns city location & layer configuration |

---

## 🌟 Key Features

1. **3D Interactive Digital Twin (Three.js / React Three Fiber / Drei):**
   - Procedural 3D city scene with commercial skyscrapers, residential towers, hospitals, schools, parks, water body, and moving traffic vehicles.
   - Day/Night lighting toggle, OrbitControls camera, hover highlights, and detailed building metadata inspection card.
2. **2D GIS Map (Leaflet):**
   - Centered on Nagpur, India with layer toggles for traffic flow, flood risk polygons, air quality zones, hospitals, emergency facilities.
3. **What-If Scenario Simulator:**
   - Sliders for traffic volume, rainfall mm, green canopy, drainage capacity, EV adoption, public transport boost, and tree plantation.
   - Executes backend solver returning **BEFORE vs AFTER vs CHANGE %** metrics.
4. **AI Decision Center:**
   - Evaluates scenario results and outputs structured rationale & confidence scores.
5. **Hackathon Presentation Demo Mode:**
   - Automated 8-step interactive presentation wizard designed for judging demonstrations.
