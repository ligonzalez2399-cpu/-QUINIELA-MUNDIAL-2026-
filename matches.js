// matches.js — Partidos oficiales del Mundial 2026
// Fuente: FIFA.com — Fase de Grupos (12 grupos × 4 equipos × 6 partidos = 72 partidos)

const MATCHES = [

  // ══════════════════════════════════════════
  // GRUPO A — México · Sudáfrica · Corea · Rep. Checa
  // ══════════════════════════════════════════
  { id: 'A1', phase: 'Fase de Grupos', group: 'Grupo A', date: '11 Jun', home: 'México',           away: 'Sudáfrica' },
  { id: 'A2', phase: 'Fase de Grupos', group: 'Grupo A', date: '11 Jun', home: 'Corea del Sur',    away: 'Rep. Checa' },
  { id: 'A3', phase: 'Fase de Grupos', group: 'Grupo A', date: '18 Jun', home: 'Rep. Checa',       away: 'Sudáfrica' },
  { id: 'A4', phase: 'Fase de Grupos', group: 'Grupo A', date: '18 Jun', home: 'México',           away: 'Corea del Sur' },
  { id: 'A5', phase: 'Fase de Grupos', group: 'Grupo A', date: '24 Jun', home: 'Rep. Checa',       away: 'México' },
  { id: 'A6', phase: 'Fase de Grupos', group: 'Grupo A', date: '24 Jun', home: 'Sudáfrica',        away: 'Corea del Sur' },

  // ══════════════════════════════════════════
  // GRUPO B — Canadá · Bosnia y Herz. · Catar · Suiza
  // ══════════════════════════════════════════
  { id: 'B1', phase: 'Fase de Grupos', group: 'Grupo B', date: '12 Jun', home: 'Canadá',           away: 'Bosnia y Herz.' },
  { id: 'B2', phase: 'Fase de Grupos', group: 'Grupo B', date: '13 Jun', home: 'Catar',            away: 'Suiza' },
  { id: 'B3', phase: 'Fase de Grupos', group: 'Grupo B', date: '18 Jun', home: 'Suiza',            away: 'Bosnia y Herz.' },
  { id: 'B4', phase: 'Fase de Grupos', group: 'Grupo B', date: '18 Jun', home: 'Canadá',           away: 'Catar' },
  { id: 'B5', phase: 'Fase de Grupos', group: 'Grupo B', date: '24 Jun', home: 'Suiza',            away: 'Canadá' },
  { id: 'B6', phase: 'Fase de Grupos', group: 'Grupo B', date: '24 Jun', home: 'Bosnia y Herz.',   away: 'Catar' },

  // ══════════════════════════════════════════
  // GRUPO C — Brasil · Marruecos · Haití · Escocia
  // ══════════════════════════════════════════
  { id: 'C1', phase: 'Fase de Grupos', group: 'Grupo C', date: '13 Jun', home: 'Brasil',           away: 'Marruecos' },
  { id: 'C2', phase: 'Fase de Grupos', group: 'Grupo C', date: '13 Jun', home: 'Haití',            away: 'Escocia' },
  { id: 'C3', phase: 'Fase de Grupos', group: 'Grupo C', date: '19 Jun', home: 'Escocia',          away: 'Marruecos' },
  { id: 'C4', phase: 'Fase de Grupos', group: 'Grupo C', date: '19 Jun', home: 'Brasil',           away: 'Haití' },
  { id: 'C5', phase: 'Fase de Grupos', group: 'Grupo C', date: '24 Jun', home: 'Brasil',           away: 'Escocia' },
  { id: 'C6', phase: 'Fase de Grupos', group: 'Grupo C', date: '24 Jun', home: 'Marruecos',        away: 'Haití' },

  // ══════════════════════════════════════════
  // GRUPO D — Estados Unidos · Paraguay · Australia · Turquía
  // ══════════════════════════════════════════
  { id: 'D1', phase: 'Fase de Grupos', group: 'Grupo D', date: '12 Jun', home: 'Estados Unidos',   away: 'Paraguay' },
  { id: 'D2', phase: 'Fase de Grupos', group: 'Grupo D', date: '13 Jun', home: 'Australia',        away: 'Turquía' },
  { id: 'D3', phase: 'Fase de Grupos', group: 'Grupo D', date: '19 Jun', home: 'Estados Unidos',   away: 'Australia' },
  { id: 'D4', phase: 'Fase de Grupos', group: 'Grupo D', date: '19 Jun', home: 'Turquía',          away: 'Paraguay' },
  { id: 'D5', phase: 'Fase de Grupos', group: 'Grupo D', date: '25 Jun', home: 'Turquía',          away: 'Estados Unidos' },
  { id: 'D6', phase: 'Fase de Grupos', group: 'Grupo D', date: '25 Jun', home: 'Paraguay',         away: 'Australia' },

  // ══════════════════════════════════════════
  // GRUPO E — Alemania · Curazao · Costa de Marfil · Ecuador
  // ══════════════════════════════════════════
  { id: 'E1', phase: 'Fase de Grupos', group: 'Grupo E', date: '14 Jun', home: 'Alemania',         away: 'Curazao' },
  { id: 'E2', phase: 'Fase de Grupos', group: 'Grupo E', date: '14 Jun', home: 'Costa de Marfil',  away: 'Ecuador' },
  { id: 'E3', phase: 'Fase de Grupos', group: 'Grupo E', date: '20 Jun', home: 'Alemania',         away: 'Costa de Marfil' },
  { id: 'E4', phase: 'Fase de Grupos', group: 'Grupo E', date: '20 Jun', home: 'Ecuador',          away: 'Curazao' },
  { id: 'E5', phase: 'Fase de Grupos', group: 'Grupo E', date: '25 Jun', home: 'Curazao',          away: 'Costa de Marfil' },
  { id: 'E6', phase: 'Fase de Grupos', group: 'Grupo E', date: '25 Jun', home: 'Ecuador',          away: 'Alemania' },

  // ══════════════════════════════════════════
  // GRUPO F — Países Bajos · Japón · Suecia · Túnez
  // ══════════════════════════════════════════
  { id: 'F1', phase: 'Fase de Grupos', group: 'Grupo F', date: '14 Jun', home: 'Países Bajos',     away: 'Japón' },
  { id: 'F2', phase: 'Fase de Grupos', group: 'Grupo F', date: '14 Jun', home: 'Suecia',           away: 'Túnez' },
  { id: 'F3', phase: 'Fase de Grupos', group: 'Grupo F', date: '20 Jun', home: 'Países Bajos',     away: 'Suecia' },
  { id: 'F4', phase: 'Fase de Grupos', group: 'Grupo F', date: '20 Jun', home: 'Túnez',            away: 'Japón' },
  { id: 'F5', phase: 'Fase de Grupos', group: 'Grupo F', date: '25 Jun', home: 'Japón',            away: 'Suecia' },
  { id: 'F6', phase: 'Fase de Grupos', group: 'Grupo F', date: '25 Jun', home: 'Túnez',            away: 'Países Bajos' },

  // ══════════════════════════════════════════
  // GRUPO G — Bélgica · Egipto · Irán · Nueva Zelanda
  // ══════════════════════════════════════════
  { id: 'G1', phase: 'Fase de Grupos', group: 'Grupo G', date: '15 Jun', home: 'Bélgica',          away: 'Egipto' },
  { id: 'G2', phase: 'Fase de Grupos', group: 'Grupo G', date: '15 Jun', home: 'Irán',             away: 'Nueva Zelanda' },
  { id: 'G3', phase: 'Fase de Grupos', group: 'Grupo G', date: '21 Jun', home: 'Bélgica',          away: 'Irán' },
  { id: 'G4', phase: 'Fase de Grupos', group: 'Grupo G', date: '21 Jun', home: 'Nueva Zelanda',    away: 'Egipto' },
  { id: 'G5', phase: 'Fase de Grupos', group: 'Grupo G', date: '26 Jun', home: 'Egipto',           away: 'Irán' },
  { id: 'G6', phase: 'Fase de Grupos', group: 'Grupo G', date: '26 Jun', home: 'Nueva Zelanda',    away: 'Bélgica' },

  // ══════════════════════════════════════════
  // GRUPO H — España · Cabo Verde · Arabia Saudí · Uruguay
  // ══════════════════════════════════════════
  { id: 'H1', phase: 'Fase de Grupos', group: 'Grupo H', date: '15 Jun', home: 'España',           away: 'Cabo Verde' },
  { id: 'H2', phase: 'Fase de Grupos', group: 'Grupo H', date: '15 Jun', home: 'Arabia Saudí',     away: 'Uruguay' },
  { id: 'H3', phase: 'Fase de Grupos', group: 'Grupo H', date: '21 Jun', home: 'España',           away: 'Arabia Saudí' },
  { id: 'H4', phase: 'Fase de Grupos', group: 'Grupo H', date: '21 Jun', home: 'Uruguay',          away: 'Cabo Verde' },
  { id: 'H5', phase: 'Fase de Grupos', group: 'Grupo H', date: '26 Jun', home: 'Cabo Verde',       away: 'Arabia Saudí' },
  { id: 'H6', phase: 'Fase de Grupos', group: 'Grupo H', date: '26 Jun', home: 'Uruguay',          away: 'España' },

  // ══════════════════════════════════════════
  // GRUPO I — Francia · Senegal · Irak · Noruega
  // ══════════════════════════════════════════
  { id: 'I1', phase: 'Fase de Grupos', group: 'Grupo I', date: '16 Jun', home: 'Francia',          away: 'Senegal' },
  { id: 'I2', phase: 'Fase de Grupos', group: 'Grupo I', date: '16 Jun', home: 'Irak',             away: 'Noruega' },
  { id: 'I3', phase: 'Fase de Grupos', group: 'Grupo I', date: '22 Jun', home: 'Francia',          away: 'Irak' },
  { id: 'I4', phase: 'Fase de Grupos', group: 'Grupo I', date: '22 Jun', home: 'Noruega',          away: 'Senegal' },
  { id: 'I5', phase: 'Fase de Grupos', group: 'Grupo I', date: '26 Jun', home: 'Noruega',          away: 'Francia' },
  { id: 'I6', phase: 'Fase de Grupos', group: 'Grupo I', date: '26 Jun', home: 'Senegal',          away: 'Irak' },

  // ══════════════════════════════════════════
  // GRUPO J — Argentina · Argelia · Austria · Jordania
  // ══════════════════════════════════════════
  { id: 'J1', phase: 'Fase de Grupos', group: 'Grupo J', date: '16 Jun', home: 'Argentina',        away: 'Argelia' },
  { id: 'J2', phase: 'Fase de Grupos', group: 'Grupo J', date: '16 Jun', home: 'Austria',          away: 'Jordania' },
  { id: 'J3', phase: 'Fase de Grupos', group: 'Grupo J', date: '22 Jun', home: 'Argentina',        away: 'Austria' },
  { id: 'J4', phase: 'Fase de Grupos', group: 'Grupo J', date: '22 Jun', home: 'Jordania',         away: 'Argelia' },
  { id: 'J5', phase: 'Fase de Grupos', group: 'Grupo J', date: '27 Jun', home: 'Argelia',          away: 'Austria' },
  { id: 'J6', phase: 'Fase de Grupos', group: 'Grupo J', date: '27 Jun', home: 'Jordania',         away: 'Argentina' },

  // ══════════════════════════════════════════
  // GRUPO K — Portugal · RD Congo · Uzbekistán · Colombia
  // ══════════════════════════════════════════
  { id: 'K1', phase: 'Fase de Grupos', group: 'Grupo K', date: '17 Jun', home: 'Portugal',         away: 'RD Congo' },
  { id: 'K2', phase: 'Fase de Grupos', group: 'Grupo K', date: '17 Jun', home: 'Uzbekistán',       away: 'Colombia' },
  { id: 'K3', phase: 'Fase de Grupos', group: 'Grupo K', date: '23 Jun', home: 'Portugal',         away: 'Uzbekistán' },
  { id: 'K4', phase: 'Fase de Grupos', group: 'Grupo K', date: '23 Jun', home: 'Colombia',         away: 'RD Congo' },
  { id: 'K5', phase: 'Fase de Grupos', group: 'Grupo K', date: '27 Jun', home: 'Colombia',         away: 'Portugal' },
  { id: 'K6', phase: 'Fase de Grupos', group: 'Grupo K', date: '27 Jun', home: 'RD Congo',         away: 'Uzbekistán' },

  // ══════════════════════════════════════════
  // GRUPO L — Inglaterra · Croacia · Ghana · Panamá
  // ══════════════════════════════════════════
  { id: 'L1', phase: 'Fase de Grupos', group: 'Grupo L', date: '17 Jun', home: 'Inglaterra',       away: 'Croacia' },
  { id: 'L2', phase: 'Fase de Grupos', group: 'Grupo L', date: '17 Jun', home: 'Ghana',            away: 'Panamá' },
  { id: 'L3', phase: 'Fase de Grupos', group: 'Grupo L', date: '23 Jun', home: 'Inglaterra',       away: 'Ghana' },
  { id: 'L4', phase: 'Fase de Grupos', group: 'Grupo L', date: '23 Jun', home: 'Panamá',           away: 'Croacia' },
  { id: 'L5', phase: 'Fase de Grupos', group: 'Grupo L', date: '27 Jun', home: 'Panamá',           away: 'Inglaterra' },
  { id: 'L6', phase: 'Fase de Grupos', group: 'Grupo L', date: '27 Jun', home: 'Croacia',          away: 'Ghana' },

];
