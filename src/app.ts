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
    team_id: 1,
    className: "cp1-1",
    clue: "Hommikune betoon-post",
    btn_id: 1,
  })
});

// cp1-2
app.get("/Y3AxLTI=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Teine vihje",
    password: team1[1],
    className: "cp1-2",
    clue: "Metallist märge",
    team_id: 1,
    btn_id: 2,
  })
});

// cp1-3
app.get("/Y3AxLTM=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Kolmas vihje",
    password: team1[2],
    team_id: 1,
    className: "cp1-3",
    clue: "Koht kus sai minevikus saadetisi reaalsusest kätte",
    btn_id: 3,
  })
});

// cp1-4
app.get("/Y3AxLTQ=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Neljas vihje",
    password: team1[3],
    team_id: 1,
    className: "cp1-4",
    clue: "Neljas vihje",
    btn_id: 4,
  })
});

// cp1-5
app.get("/Y3AxLTU=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Viies vihje",
    password: team1[4],
    team_id: 1,
    className: "cp1-5",
    clue: "Haikala",
    btn_id: 5,
  })
});

// cp2-1
app.get("/Y3AyLTE=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Esimene vihje",
    password: team2[0],
    team_id: 2,
    className: "cp2-1",
    clue: "Esimene vihje",
    btn_id: 1,
  })
});

// cp2-2
app.get("/Y3AyLTI=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Teine vihje",
    password: team2[1],
    team_id: 2,
    className: "cp2-2",
    clue: "Teine vihje",
    btn_id: 2,
  })
});

// cp2-3
app.get("/Y3AyLTM=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Kolmas vihje",
    password: team2[2],
    team_id: 2,
    className: "cp2-3",
    clue: "Kolmas vihje",
    btn_id: 3,
  })
});

// cp2-4
app.get("/Y3AyLTQ=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Neljas vihje",
    password: team2[3],
    team_id: 2,
    className: "cp2-4",
    clue: "Neljas vihje",
    btn_id: 4,
  })
});

// cp2-5
app.get("/Y3AyLTU=", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Viies vihje",
    password: team2[4],
    team_id: 2,
    className: "cp2-5",
    clue: "Viies vihje",
    btn_id: 5,
  })
});

// cp1-final
app.get("/cp1f", (req: Request, res: Response) => {
  res.render("final.hbs", {
    title: "Viies vihje",
    team_id: 1,
    body_class: "landing",
    layout: "landing",
    password: "k0te",
    half: "1/2",
  })
});

// cp2-final
app.get("/2fcp", (req: Request, res: Response) => {
  res.render("final.hbs", {
    title: "Viies vihje",
    team_id: 2,
    body_class: "landing",
    layout: "landing",
    password: "rm4nn",
    half: "2/2",
  })
});

// Map
app.get("/final", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Viies vihje",
    password: team2[4],
    team_id: 2,
    className: "cp2-5",
    clue: "Viies vihje",
    btn_id: 5,
  })
});

export const runApp = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App listening on port ${port}`));
}