import express, {Request, Response} from "express";
import {create} from "express-handlebars";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

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
    body_class: "landing",
    layout: "landing"
  });
});

// Backstory alpha
app.get("/YWxwaGE=", (req: Request, res: Response) => {
  res.render("bst1", {
    title: "Backstory 1",
    body_class: "landing",
    layout: "landing"
  })
});

// Backstory beta
app.get("/YmV0YQ==", (req: Request, res: Response) => {
  res.render("bst2", {
    title: "Backstory 2",
    body_class: "landing",
    layout: "landing"
  })
});

// Backstory gamma
app.get("/Z2FtbWE=", (req: Request, res: Response) => {
  res.render("bst3", {
    title: "Backstory 3",
    body_class: "landing",
    layout: "landing",
  })
});

// cp1-1
app.get("/Y3AxLTE=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Esimene vihje",
    password: team1[0],
    script: "/media/scripts/team_one_one.js",
    className: "cp1-1",
    clue: "Esimene vihje",
  })
});

// cp1-2
app.get("/Y3AxLTI=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Teine vihje",
    password: team1[1],
    className: "cp1-2",
    clue: "Teine vihje",
    script: "/media/scripts/team_one_one.js",
  })
});

// cp1-3
app.get("/Y3AxLTM=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Kolmas vihje",
    password: team1[2],
    script: "/media/scripts/team_one_one.js",
    className: "cp1-3",
    clue: "Kolmas vihje",
  })
});

// cp1-4
app.get("/Y3AxLTQ=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Neljas vihje",
    password: team1[3],
    script: "/media/scripts/team_one_one.js",
    className: "cp1-4",
    clue: "Neljas vihje",
  })
});

// cp1-5
app.get("/Y3AxLTU=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Viies vihje",
    password: team1[4],
    script: "/media/scripts/team_one_one.js",
    className: "cp1-5",
    clue: "Viies vihje",
  })
});

// cp2-1
app.get("/Y3AyLTE=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Esimene vihje",
    password: team2[0],
    script: "/media/scripts/team_one_two.js",
    className: "cp2-1",
    clue: "Esimene vihje",
  })
});

// cp2-2
app.get("/Y3AyLTI=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Teine vihje",
    password: team2[1],
    script: "/media/scripts/team_one_two.js",
    className: "cp2-2",
    clue: "Teine vihje",
  })
});

// cp2-3
app.get("/Y3AyLTM=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Kolmas vihje",
    password: team2[2],
    script: "/media/scripts/team_one_two.js",
    className: "cp2-3",
    clue: "Kolmas vihje",
  })
});

// cp2-4
app.get("/Y3AyLTQ=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Neljas vihje",
    password: team2[3],
    script: "/media/scripts/team_one_two.js",
    className: "cp2-4",
    clue: "Neljas vihje",
  })
});

// cp2-5
app.get("/Y3AyLTU=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Viies vihje",
    password: team2[4],
    script: "/media/scripts/team_one_two.js",
    className: "cp2-5",
    clue: "Viies vihje",
  })
});

export const runApp = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App listening on port ${port}`));
}