import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import "express-async-errors";

const app = express();
// Accetta JSON dal cliente
app.use(express.json());

// Registra le richieste del cliente
app.use(morgan("dev"));
dotenv.config();

const port = process.env.PORT || 3000;

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

// Server in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(
    `Example app listening on port http://localhost:${port}/api/planets`
  );
});
