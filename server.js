const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

const players = [
  { name: "Tony Stark", tag: "#90P8U09QL" },
  { name: "TVL", tag: "#L2908U90C" },
];

app.use(express.static("public"));
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMxNThjYTllLTEyN2ItNDhjMS1hNDFlLWI2NjgxMThlNjI1OCIsImlhdCI6MTc0ODg4MDMwNywic3ViIjoiZGV2ZWxvcGVyLzYxMGFkOTI1LWZjZTUtZDVhNy0wZWU1LWVlOGM4OGM1ODkzNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3Ny4yMTQuMTY1LjM2IiwiMC4wLjAuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VStsaTGIddWKEF56vEgoHQLg3qqllNemSVntlhzLStQ3YA5xkNwYLvpfkssAtRdTX5te5_7TW82SBemWdFzx-w";

app.get("/api/players", async (req, res) => {
  try {
    const results = [];

    for (const player of players) {
      const encodedTag = encodeURIComponent(player.tag);
      const response = await axios.get(
        `https://api.clashofclans.com/v1/players/${encodedTag}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      results.push({ name: player.name, data: response.data });
    }

    const playerTony = results.find(
      (p) => p.name.toLowerCase() === "tony stark"
    )?.data;
    const playerTVL = results.find((p) => p.name.toLowerCase() === "tvl")?.data;

    if (!playerTony || !playerTVL) {
      return res.status(404).json({ error: "Jogadores não encontrados." });
    }

    const categorias = ["troops", "spells", "heroes"];
    const comparativo = {};

    for (const categoria of categorias) {
      const itensTony = playerTony[categoria] || [];
      const itensTVL = playerTVL[categoria] || [];

      const nomes = new Set([
        ...itensTony.map((i) => i.name),
        ...itensTVL.map((i) => i.name),
      ]);

      comparativo[categoria] = [];

      for (const nome of nomes) {
        const itemTony = itensTony.find((i) => i.name === nome);
        const itemTVL = itensTVL.find((i) => i.name === nome);
        const levelTony = itemTony?.level || 0;
        const levelTVL = itemTVL?.level || 0;

        const winner =
          levelTony > levelTVL ? "tony" : levelTVL > levelTony ? "tvl" : "draw";

        comparativo[categoria].push({
          name: nome,
          tonyLevel: levelTony,
          tvlLevel: levelTVL,
          winner,
        });
      }
    }

    res.json({
      players: {
        tony: {
          name: playerTony.name,
          tag: playerTony.tag,
          townHallLevel: playerTony.townHallLevel,
        },
        tvl: {
          name: playerTVL.name,
          tag: playerTVL.tag,
          townHallLevel: playerTVL.townHallLevel,
        },
      },
      comparativo,
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Erro ao buscar dados dos jogadores." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor disponível em http://localhost:${PORT}`);
});
