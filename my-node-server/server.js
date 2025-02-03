const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ratingData = require("./mockRatingData");
const listData = require("./mockListData");
const statisticsData = require("./mockStatistics");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text()); // Для обработки text/plain запросов

app.get("/api/rating", (req, res) => {
  res.status(200).json(ratingData);
});

app.get("/api/list", (req, res) => {
  res.status(200).json(listData);
});

app.get("/api/statistics", (req, res) => {
  res.status(200).json(statisticsData);
});

// Маршрут для обработки sendBeacon
app.post("/api/beacon", (req, res) => {
  const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  console.log("Полученные данные:", data);
  res.status(200).send({ message: "Beacon data received successfully" });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
