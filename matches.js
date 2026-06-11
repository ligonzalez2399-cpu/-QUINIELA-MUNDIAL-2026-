// matches.js — Partidos del Mundial 2026
// Fuente: FIFA World Cup 2026 (48 equipos, 3 sedes: USA, México, Canadá)
// Fase de grupos — primeros 48 partidos (puedes agregar rondas eliminatorias después)

const MATCHES = [
  // ── GRUPO A ──
  { id: 'A1', phase: 'Fase de Grupos', group: 'Grupo A', date: '11 Jun', home: 'México', away: 'Ecuador' },
  { id: 'A2', phase: 'Fase de Grupos', group: 'Grupo A', date: '11 Jun', home: 'Senegal', away: 'Kazajistán' },
  { id: 'A3', phase: 'Fase de Grupos', group: 'Grupo A', date: '15 Jun', home: 'México', away: 'Senegal' },
  { id: 'A4', phase: 'Fase de Grupos', group: 'Grupo A', date: '15 Jun', home: 'Ecuador', away: 'Kazajistán' },
  { id: 'A5', phase: 'Fase de Grupos', group: 'Grupo A', date: '19 Jun', home: 'Ecuador', away: 'Senegal' },
  { id: 'A6', phase: 'Fase de Grupos', group: 'Grupo A', date: '19 Jun', home: 'Kazajistán', away: 'México' },

  // ── GRUPO B ──
  { id: 'B1', phase: 'Fase de Grupos', group: 'Grupo B', date: '12 Jun', home: 'Argentina', away: 'Marruecos' },
  { id: 'B2', phase: 'Fase de Grupos', group: 'Grupo B', date: '12 Jun', home: 'Irak', away: 'Ucrania' },
  { id: 'B3', phase: 'Fase de Grupos', group: 'Grupo B', date: '16 Jun', home: 'Argentina', away: 'Irak' },
  { id: 'B4', phase: 'Fase de Grupos', group: 'Grupo B', date: '16 Jun', home: 'Marruecos', away: 'Ucrania' },
  { id: 'B5', phase: 'Fase de Grupos', group: 'Grupo B', date: '20 Jun', home: 'Marruecos', away: 'Irak' },
  { id: 'B6', phase: 'Fase de Grupos', group: 'Grupo B', date: '20 Jun', home: 'Ucrania', away: 'Argentina' },

  // ── GRUPO C ──
  { id: 'C1', phase: 'Fase de Grupos', group: 'Grupo C', date: '12 Jun', home: 'España', away: 'Brasil' },
  { id: 'C2', phase: 'Fase de Grupos', group: 'Grupo C', date: '12 Jun', home: 'Suiza', away: 'Camerún' },
  { id: 'C3', phase: 'Fase de Grupos', group: 'Grupo C', date: '16 Jun', home: 'España', away: 'Suiza' },
  { id: 'C4', phase: 'Fase de Grupos', group: 'Grupo C', date: '16 Jun', home: 'Brasil', away: 'Camerún' },
  { id: 'C5', phase: 'Fase de Grupos', group: 'Grupo C', date: '20 Jun', home: 'Brasil', away: 'Suiza' },
  { id: 'C6', phase: 'Fase de Grupos', group: 'Grupo C', date: '20 Jun', home: 'Camerún', away: 'España' },

  // ── GRUPO D ──
  { id: 'D1', phase: 'Fase de Grupos', group: 'Grupo D', date: '13 Jun', home: 'Francia', away: 'Venezuela' },
  { id: 'D2', phase: 'Fase de Grupos', group: 'Grupo D', date: '13 Jun', home: 'Colombia', away: 'Kenia' },
  { id: 'D3', phase: 'Fase de Grupos', group: 'Grupo D', date: '17 Jun', home: 'Francia', away: 'Colombia' },
  { id: 'D4', phase: 'Fase de Grupos', group: 'Grupo D', date: '17 Jun', home: 'Venezuela', away: 'Kenia' },
  { id: 'D5', phase: 'Fase de Grupos', group: 'Grupo D', date: '21 Jun', home: 'Venezuela', away: 'Colombia' },
  { id: 'D6', phase: 'Fase de Grupos', group: 'Grupo D', date: '21 Jun', home: 'Kenia', away: 'Francia' },

  // ── GRUPO E ──
  { id: 'E1', phase: 'Fase de Grupos', group: 'Grupo E', date: '13 Jun', home: 'Alemania', away: 'Chile' },
  { id: 'E2', phase: 'Fase de Grupos', group: 'Grupo E', date: '13 Jun', home: 'Corea del Sur', away: 'Arabia Saudita' },
  { id: 'E3', phase: 'Fase de Grupos', group: 'Grupo E', date: '17 Jun', home: 'Alemania', away: 'Corea del Sur' },
  { id: 'E4', phase: 'Fase de Grupos', group: 'Grupo E', date: '17 Jun', home: 'Chile', away: 'Arabia Saudita' },
  { id: 'E5', phase: 'Fase de Grupos', group: 'Grupo E', date: '21 Jun', home: 'Chile', away: 'Corea del Sur' },
  { id: 'E6', phase: 'Fase de Grupos', group: 'Grupo E', date: '21 Jun', home: 'Arabia Saudita', away: 'Alemania' },

  // ── GRUPO F ──
  { id: 'F1', phase: 'Fase de Grupos', group: 'Grupo F', date: '14 Jun', home: 'Portugal', away: 'Croacia' },
  { id: 'F2', phase: 'Fase de Grupos', group: 'Grupo F', date: '14 Jun', home: 'Uruguay', away: 'Congo' },
  { id: 'F3', phase: 'Fase de Grupos', group: 'Grupo F', date: '18 Jun', home: 'Portugal', away: 'Uruguay' },
  { id: 'F4', phase: 'Fase de Grupos', group: 'Grupo F', date: '18 Jun', home: 'Croacia', away: 'Congo' },
  { id: 'F5', phase: 'Fase de Grupos', group: 'Grupo F', date: '22 Jun', home: 'Croacia', away: 'Uruguay' },
  { id: 'F6', phase: 'Fase de Grupos', group: 'Grupo F', date: '22 Jun', home: 'Congo', away: 'Portugal' },

  // ── GRUPO G ──
  { id: 'G1', phase: 'Fase de Grupos', group: 'Grupo G', date: '14 Jun', home: 'Inglaterra', away: 'Serbia' },
  { id: 'G2', phase: 'Fase de Grupos', group: 'Grupo G', date: '14 Jun', home: 'Países Bajos', away: 'Honduras' },
  { id: 'G3', phase: 'Fase de Grupos', group: 'Grupo G', date: '18 Jun', home: 'Inglaterra', away: 'Países Bajos' },
  { id: 'G4', phase: 'Fase de Grupos', group: 'Grupo G', date: '18 Jun', home: 'Serbia', away: 'Honduras' },
  { id: 'G5', phase: 'Fase de Grupos', group: 'Grupo G', date: '22 Jun', home: 'Serbia', away: 'Países Bajos' },
  { id: 'G6', phase: 'Fase de Grupos', group: 'Grupo G', date: '22 Jun', home: 'Honduras', away: 'Inglaterra' },

  // ── GRUPO H ──
  { id: 'H1', phase: 'Fase de Grupos', group: 'Grupo H', date: '15 Jun', home: 'USA', away: 'Panamá' },
  { id: 'H2', phase: 'Fase de Grupos', group: 'Grupo H', date: '15 Jun', home: 'Italia', away: 'Costa de Marfil' },
  { id: 'H3', phase: 'Fase de Grupos', group: 'Grupo H', date: '19 Jun', home: 'USA', away: 'Italia' },
  { id: 'H4', phase: 'Fase de Grupos', group: 'Grupo H', date: '19 Jun', home: 'Panamá', away: 'Costa de Marfil' },
  { id: 'H5', phase: 'Fase de Grupos', group: 'Grupo H', date: '23 Jun', home: 'Panamá', away: 'Italia' },
  { id: 'H6', phase: 'Fase de Grupos', group: 'Grupo H', date: '23 Jun', home: 'Costa de Marfil', away: 'USA' },

];
