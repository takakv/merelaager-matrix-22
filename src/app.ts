import express, {Request, Response} from "express";
import {create} from "express-handlebars";
import path from "path";

import {team1, team2} from "./passwords";

const app = express();

const hbs = create({
  extname: "hbs",
  defaultLayout: "teams",
  layoutsDir: path.join(__dirname, "..", "/views/layouts/"),
  partialsDir: path.join(__dirname, "..", "/views/partials/"),
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Ööhäire 2022",
    body_class: "landing"
  });
});

// cp1-1
app.get("/Y3AxLTE=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Esimene vihje",
    password: team1[0],
    script: "/media/scripts/team_one_one.js",
    className: "cp1-1"
  })
});

// cp1-2
app.get("/Y3AxLTI=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Teine vihje",
    password: team1[1],
  })
});

// cp1-3
app.get("/Y3AxLTM=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Kolmas vihje",
    password: team1[2],
  })
});

// cp1-4
app.get("/Y3AxLTQ=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Neljas vihje",
    password: team1[3],
  })
});

// cp1-5
app.get("/Y3AxLTU=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Viies vihje",
    password: team1[4],
  })
});

// cp2-1
app.get("/Y3AyLTE=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Esimene vihje",
    password: team2[0],
  })
});

// cp2-2
app.get("/Y3AyLTI=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Teine vihje",
    password: team2[1],
  })
});

// cp2-3
app.get("/Y3AyLTM=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Kolmas vihje",
    password: team2[2],
  })
});

// cp2-4
app.get("/Y3AyLTQ=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Neljas vihje",
    password: team2[3],
  })
});

// cp2-5
app.get("/Y3AyLTU=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Viies vihje",
    password: team2[4],
  })
});

export const runApp = () => {
  const port = 4000;
  app.listen(port, () => console.log(`App listening on port ${port}`));
}